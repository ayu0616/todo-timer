import { combineReducers, createStore } from "redux";
import { tasksReducer } from "./tasks/reducer";

const rootReducer = combineReducers({
	tasks: tasksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
