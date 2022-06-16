import React, { useState } from "react";
import { removeTodo } from "../../asyncActions/todo";
import { useDispatch } from "react-redux";

import "./Modal.css";

interface ModalProps {
  id: number;
  description: string;
  visible: boolean;
  onClose: any;
}

const Modal: React.FC<ModalProps> = ({
  visible = false,
  onClose,
  description,
  id,
}) => {
  const dispatch = useDispatch();

  const onHandleDelete = () => {
    // @ts-ignore
    dispatch(removeTodo(id));

    setIsModalOpen(false);
    return true;
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!visible) return null;

  let date = new Date();
  let output =
    String(date.getDate()).padStart(2, "0") +
    "/" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "/" +
    date.getFullYear();

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">
            Вы действительно хотите удалить задачу?
          </h3>
          <span className="modal-close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <div className="modal-content">
            <p>{description}</p>
            <p>{`Дата создания: ${output}`}</p>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Отмена</button>
          <button onClick={onHandleDelete}>Да, удалить</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
