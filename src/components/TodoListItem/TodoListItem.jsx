import css from "./TodoListItem.module.css";
import { RiDeleteBinLine } from "react-icons/ri"; // Іконка кошика

export default function TodoListItem ({ todo, onDelete, onEdit }) {
  return (
     <div>
      <p>TODO #{todo.id}</p>
      <p>{todo.text}</p>

      <button onClick={() => onDelete(todo.id)}>Delete</button>

      {/* Кнопка Edit викликає onEdit(todo) */}
      <button onClick={() => onEdit(todo)}>
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};
