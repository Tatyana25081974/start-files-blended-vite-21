import { useState } from "react"; // Імпортуємо useState для керування станом
import { FiSearch } from "react-icons/fi"; // Імпортуємо іконку для кнопки пошуку
import css from "./PhotoForm.module.css"; // Імпортуємо стилі

const PhotoForm = ({ onSubmit }) => {
  // 🔹 Локальний стан для інпуту
  const [query, setQuery] = useState("");

  // 🔹 Функція оновлення стану при введенні тексту в інпут
  const handleChange = (event) => {
    setQuery(event.target.value); // Оновлюємо стан значенням інпуту
  };

  // 🔹 Функція обробки сабміту форми
  const handleSubmit = (event) => {
    event.preventDefault(); // Запобігаємо перезавантаженню сторінки

    // Перевіряємо, чи інпут не порожній (валідація)
    if (query.trim() === "") {
      alert("Please enter a search term!"); // Якщо порожньо, показуємо повідомлення
      return;
    }

    onSubmit(query.trim()); // Передаємо значення інпуту у батьківський компонент
    setQuery(""); // Очищаємо поле після відправлення
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <button className={css.button} type="submit">
        <FiSearch size="16px" /> {/* Іконка пошуку */}
      </button>

      <input
        className={css.input}
        type="text"
        placeholder="What do you want to find?"
        name="search"
        value={query} // Контрольований інпут
        onChange={handleChange} // Викликає handleChange при зміні тексту
        required
        autoFocus
      />
    </form>
  );
};

export default PhotoForm; // Експортуємо компонент
