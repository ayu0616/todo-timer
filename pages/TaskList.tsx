import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import TaskItem from "../src/components/task/TaskItem";
import { RootState } from "../src/store/store";
import { addAction } from "../src/store/tasks/actions";
import { Task } from "../src/store/tasks/types";

const TaskList = () => {
	const tasks = useSelector((state: RootState) => state.tasks);
	const dispatch = useDispatch();
	const handleAdd = (task: Task) => dispatch(addAction(task));
	useEffect(() => {
		for (let i = 0; i < 10; i++) {
			handleAdd({
				id: i.toString(),
				title: "テスト" + (i + 1),
				tags: ["勉強", "大学"],
				dueDate: new Date(),
				startDate: new Date(),
				endDate: new Date(),
			});
		}
	}, []); 

	return (
		<>
			{tasks.map((task, index) => (
				<TaskItem itemId={task.id} taskName={task.title} dueDatetime={task.dueDate} startDatetime={task.startDate} endDatetime={task.endDate} key={index} />
			))}
		</>
	);
};

export default TaskList;
