import css from "./TodoList.module.css";
import TodoListItem  from "../TodoListItem/TodoListItem";

 const TodoList = ({ todos, onDelete, onEdit }) => {
  return (
    <ul className={css.list}>
      {todos.map((todo) => (
        <li key={todo.id} className={css.listItem}>
          <TodoListItem todo={todo} onDelete={onDelete} onEdit={onEdit}/>
        </li>
      ))}
    </ul>
  );
};
export default TodoList;