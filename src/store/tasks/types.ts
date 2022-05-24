import { Action } from "redux";
import ActionTypes from "../actionTypes";

export type Task = {
	id: string;
	title: string;
	dueDate: Date;
	startDate: Date;
	endDate: Date;
	tags: string[];
};
export type TaskUpdateData = Pick<Task, "id"> & Partial<Task>;
// export type Tasks = Task[];
export class Tasks extends Array<Task> {
	constructor(...tasks: Task[]) {
		super(...tasks);
	}

	taskMap(callbackfn: (value: Task, index: number, array: Tasks) => Task, thisArg?: any): Tasks {
		return new Tasks(...this.map(callbackfn, thisArg));
	}

	taskFilter(predicate: (value: Task, index: number, array: Tasks) => unknown, thisArg?: any): Tasks {
		return new Tasks(...this.filter(predicate, thisArg));
	}

	/**引数に入力したIDと一致するIDを持つタスクを返す */
	findById(id: string) {
		return this.find((task) => task.id === id);
	}
}

interface AddAction extends Action {
	type: typeof ActionTypes.add;
	payload: Task;
}
interface UpdateAction extends Action {
	type: typeof ActionTypes.update;
	payload: TaskUpdateData;
}
interface RemoveAction extends Action {
	type: typeof ActionTypes.remove;
	payload: { id: string };
}

export type TaskActionTypes = AddAction | UpdateAction | RemoveAction;
