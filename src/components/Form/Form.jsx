import { useState } from "react";
import css from "./Form.module.css";

export const Form = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return; // Перевірка на порожній інпут

    onSubmit(inputValue); // Передаємо значення у `Todos`
    setInputValue(""); // Очищуємо поле після відправки
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="What do you want to write?"
        autoFocus
      />
      <button className={css.button} type="submit">Add</button>
    </form>
  );
};
