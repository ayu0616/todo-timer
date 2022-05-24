import ActionTypes from "../actionTypes";
import { Task, TaskActionTypes, TaskUpdateData } from "./types";

export const addAction = (task: Task): TaskActionTypes => {
	return {
		type: ActionTypes.add,
		payload: task,
	};
};

export const updateAction = (updateData: TaskUpdateData): TaskActionTypes => {
	return {
		type: ActionTypes.update,
		payload: updateData,
	};
};

export const removeAction = (id: string): TaskActionTypes => {
	return {
		type: ActionTypes.remove,
		payload: { id: id },
	};
};
