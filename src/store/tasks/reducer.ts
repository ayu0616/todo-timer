import { createId } from "../../utils/helper";
import ActionTypes from "../actionTypes";
import { TaskActionTypes, Tasks } from "./types";

const initialState = new Tasks();

export const tasksReducer = (state = initialState, action: TaskActionTypes): Tasks => {
	switch (action.type) {
		case ActionTypes.add:
			return new Tasks(...state, action.payload);
		case ActionTypes.update:
			return state.taskMap((task) => {
				if (task.id === action.payload.id) {
					return { ...task, ...action.payload };
				}
			});
		case ActionTypes.remove:
			return state.taskFilter((task) => task.id !== action.payload.id);
		default:
			const _: never = action;
			return state;
	}
};
