import css from "./TodoList.module.css";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos, onDelete }) => {
  return (
    <ul className={css.list}>
      {todos.map((todo) => (
        <li key={todo.id} className={css.listItem}>
          <TodoListItem todo={todo} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};