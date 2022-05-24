import classNames, { Argument } from "classnames";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import MenuModal from "./MenuModal";

type TaskMenuIconProps = {
	onClick?: () => void;
	classNamesObj?: Argument;
};

const TaskMenuIcon = ({ onClick, classNamesObj = {} }: TaskMenuIconProps) => {
	const containerClassNames: Argument = Object.assign(classNamesObj, {
		"position-absolute": true,
		"top-0": true,
		// "end-0": true,
		"m-3": true,
		"d-flex": true,
	});

	const iconClassNames = {
		"cursor-pointer": true,
		"fs-4": true,
	};

	const taskMenuOnclick = () => {
		if (onClick) onClick();
		setModalShow(true);
	};

	const [modalShow, setModalShow] = useState(false);
	return (
		<>
			<div className={classNames(containerClassNames)} style={{ right: "1rem" }}>
				<BsThreeDots onClick={taskMenuOnclick} className={classNames(iconClassNames)} />
			</div>
			<MenuModal show={modalShow} setShow={setModalShow} />
		</>
	);
};

export default TaskMenuIcon;
