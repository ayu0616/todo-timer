import TaskItem from "../src/components/task/TaskItem";

export default function Home() {
	return [1, 2, 3, 4].map((value) => <TaskItem itemId={value.toString()} taskName={"テスト" + value} dueDatetime={new Date()} startDatetime={new Date()} endDatetime={new Date()} key={value} />);
}
