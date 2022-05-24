import { ReactNode, FC, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Task, TaskUpdateData } from "../../store/tasks/types";
import { formatDate } from "../../utils/helper";

const formatDatetimeLocal = (date: Date) => formatDate(date, "yyyy-MM-ddTHH:mm");

type MyFormGroupProps = { children: ReactNode };

const MyFormGroup: FC<MyFormGroupProps> = ({ children }) => {
	const formGroupClassName = "m-3";
	return <Form.Group className={formGroupClassName}>{children}</Form.Group>;
};

type TaskFormProps = { defaultValues?: Partial<Task> };

const TaskForm = ({ defaultValues }: TaskFormProps) => {
	const [title, setTitle] = useState(defaultValues?.title ?? "");
	const [dueDate, setDueDate] = useState(formatDatetimeLocal(defaultValues?.dueDate ?? new Date()));
	const [startDate, setStartDate] = useState(formatDatetimeLocal(defaultValues?.startDate ?? new Date()));
	const [endDate, setEndDate] = useState(formatDatetimeLocal(defaultValues?.endDate ?? new Date(new Date().getTime() + 1000 * 60 * 30)));
	return (
		<Form>
			<MyFormGroup>
				<Form.Label>タイトル</Form.Label>
				<Form.Control type="text" value={title} onChange={(e) => setTitle(e.currentTarget.value)}></Form.Control>
			</MyFormGroup>

			<MyFormGroup>
				<Form.Label>タグ</Form.Label>
				<Form.Check inline type="checkbox" id="1" name="tags" label="課題" />
				<Form.Check inline type="checkbox" id="2" name="tags" label="勉強" />
				<Form.Check inline type="checkbox" id="3" name="tags" label="課題" />
				<Form.Check inline type="checkbox" id="4" name="tags" label="仕事" />
			</MyFormGroup>

			<MyFormGroup>
				<Form.Label>締切日時</Form.Label>
				<Form.Control type="datetime-local" value={dueDate} onChange={(e) => setDueDate(e.currentTarget.value)}></Form.Control>
			</MyFormGroup>

			<MyFormGroup>
				<Form.Label>実行日時</Form.Label>
				<InputGroup>
					<Form.Control type="datetime-local" value={startDate} onChange={(e) => setStartDate(e.currentTarget.value)}></Form.Control>
					<InputGroup.Text>→</InputGroup.Text>
					<Form.Control type="datetime-local" value={endDate} onChange={(e) => setEndDate(e.currentTarget.value)}></Form.Control>
				</InputGroup>
			</MyFormGroup>
		</Form>
	);
};

export default TaskForm;
