import React, { useState } from "react";
import "./TodoItem.css";
import LikePic from "../../assets/favorite.svg";
import MenuPic from "../../assets/menu.svg";
import Modal from "../Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  addLike,
  resetLike,
  addComplited,
  resetComplited,
  removeTask,
} from "../../store/todoReducer";

function TodoItem({ id, description, complited, like }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  // const allTasks = useSelector((store) => store.todo);
  // let task = Object.values(allTasks).find((item) => item.id === Number(id));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onChangeLike = () => {
    if (like) {
      dispatch(resetLike(id));
      setShow(false);
    } else {
      dispatch(addLike(id));
    }
    setShow(false);
  };

  const onChangeComplited = () => {
    if (complited) {
      dispatch(resetComplited(id));
      setShow(false);
    } else {
      dispatch(addComplited(id));
    }
    setShow(false);
  };

  const onShowMenu = () => {
    setShow(!show);
  };

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setShow(false);
  };

  const onEdit = () => {
    setEdit(true);
    setShow(false);
  };

  const onCloseEdit = (e) => {
    if (e.key === "Enter") {
      setEdit(false);
    }
  };

  if (edit) {
    return (
      <input
        autoFocus
        id="edit"
        value={description}
        onKeyPress={onCloseEdit}
      ></input>
    );
  } else {
    return (
      <div className="todo-item">
        {complited ? <p id="complited">{description}</p> : <p>{description}</p>}
        <div className="icons">
          {like ? (
            <img
              src={LikePic}
              alt="favorite"
              id="favorite"
              onClick={onChangeLike}
            ></img>
          ) : null}
          <div className="drop">
            <img src={MenuPic} alt="menu" id="menu" onClick={onShowMenu}></img>
            {show ? (
              <div className="dropdown-content">
                {complited ? (
                  <a href="#" onClick={onChangeComplited}>
                    Вернуть в работу
                  </a>
                ) : (
                  <a href="#" onClick={onChangeComplited}>
                    Выполненно
                  </a>
                )}
                {like ? (
                  <a href="#" onClick={onChangeLike}>
                    Убрать из избранного
                  </a>
                ) : (
                  <a href="#" onClick={onChangeLike}>
                    В избранное
                  </a>
                )}
                <a href="#" onClick={onEdit}>
                  Редактировать
                </a>
                <a href="#" onClick={handleToggleModal}>
                  Удалить
                </a>
              </div>
            ) : null}
            <Modal
              visible={isModalOpen}
              onClose={handleToggleModal}
              description={description}
              id={id}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TodoItem;
