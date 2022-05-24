import classNames from "classnames";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { formatDate } from "../../utils/helper";
import CheckBox from "./CheckBox";
import TaskMenuIcon from "./TaskMenuIcon";

type TaskItemProps = { itemId: string; taskName: string; dueDatetime: Date; startDatetime: Date; endDatetime: Date };

const TaskItem = ({ itemId, taskName, dueDatetime, startDatetime, endDatetime }: TaskItemProps) => {
	const dateFormat = "MM/dd(EEE) HH:mm";
	const [isMouseOver, setIsMouseOver] = useState(false);
	const containerClassNames = {
		"m-3": true,
		"p-3": true,
		"shadow-sm": true,
		border: true,
		rounded: true,
		"bg-light": isMouseOver,
		"position-relative": true,
	};

	return (
		<div className={classNames(containerClassNames)}>
			<Container fluid className={""} onMouseEnter={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)}>
				<Row>
					<Col sm={1} xs={2}>
						<CheckBox />
					</Col>
					<Col>
						<h3 className="m-0">{taskName}</h3>
						<hr />
						<div>{formatDate(dueDatetime, dateFormat)} まで</div>
						<div>
							{formatDate(startDatetime, dateFormat)} → {formatDate(endDatetime, dateFormat)}
						</div>
						<Button>タイマー</Button>
					</Col>
				</Row>
				<TaskMenuIcon />
			</Container>
		</div>
	);
};

export default TaskItem;
