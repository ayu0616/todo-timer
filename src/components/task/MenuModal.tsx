import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import FormInModal from "./TaskForm";

type MenuModalProps = {
	show: boolean;
    setShow: (newShow: boolean) => void;
};

const MenuModal = ({ show, setShow }: MenuModalProps) => {
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Modal show={show} onHide={handleClose} centered>
			<Modal.Header closeButton>
				<Modal.Title>タスクを編集</Modal.Title>
			</Modal.Header>
			<Modal.Body><FormInModal/></Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					キャンセル
				</Button>
				<Button variant="primary" onClick={handleClose}>
					変更を保存
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default MenuModal;
