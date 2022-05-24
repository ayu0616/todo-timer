import classNames from "classnames";
import { useState } from "react";
import { BsCheckSquareFill, BsSquare, BsCheckSquare } from "react-icons/bs";

type CheckBoxType = "none" | "over" | "checked";

type CheckBoxBodyProps = {
	type: CheckBoxType;
};

const CheckBoxBody = ({ type }: CheckBoxBodyProps) => {
	const classNameObj = {
		"cursor-pointer": true,
		"text-black-50": ["over", "none"].includes(type),
		"text-primary": type === "checked",
		"fs-4": true,
	};
	if (type === "over") return <BsCheckSquare className={classNames(classNameObj)} />;
	else if (type === "checked") return <BsCheckSquareFill className={classNames(classNameObj)} />;
	else if (type === "none") return <BsSquare className={classNames(classNameObj)} />;
};

type CheckBoxProps = {
	onClick?: () => void;
};

const CheckBox = ({ onClick }: CheckBoxProps) => {
	const [checkBoxType, setCheckBoxType] = useState<CheckBoxType>("none");
	return (
		<div className="d-flex justify-content-center align-items-center h-100 w-100">
			<div className="d-flex"
				onClick={() => {
					if (checkBoxType === "checked") setCheckBoxType("none");
					else setCheckBoxType("checked");
					// onClickが引数に存在すれば実行する
					if (onClick) onClick();
				}}
				onMouseOver={() => {
					if (checkBoxType !== "checked") setCheckBoxType("over");
				}}
				onMouseLeave={() => {
					if (checkBoxType !== "checked") setCheckBoxType("none");
				}}
			>
				<CheckBoxBody type={checkBoxType} />
			</div>
		</div>
	);
};

export default CheckBox;
