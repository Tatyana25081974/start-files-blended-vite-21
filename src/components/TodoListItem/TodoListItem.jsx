import css from "./TodoListItem.module.css";
import { RiDeleteBinLine } from "react-icons/ri"; // Іконка кошика

export const TodoListItem = ({ todo, onDelete }) => {
  return (
    <div className={css.box}>
      <p className={css.text}>TODO #{todo.id}</p>
      <p className={css.description}>{todo.text}</p>
      <button className={css.deleteButton} onClick={() => onDelete(todo.id)}>
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};
