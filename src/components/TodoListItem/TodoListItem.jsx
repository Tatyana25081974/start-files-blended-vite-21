import css from "./TodoListItem.module.css";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri"; // Іконки для кнопок

export default function TodoListItem({ todo, onDelete, onEdit }) {
  return (
    <div>
      <p>TODO #{todo.id}</p>
      <p>{todo.text}</p>

      <button onClick={() => onDelete(todo.id)}>
        <RiDeleteBinLine size={24} /> Delete
      </button>

      {/* Викликає onEdit(todo) при натисканні */}
      <button onClick={() => onEdit(todo)}>
        <RiEdit2Line size={24} /> Edit
      </button>
    </div>
  );
}

