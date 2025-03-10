//Зберігає стейти: images, query, page, isLoading, error.
// Робить запити до API при зміні query або page.
// Передає пропси у PhotoForm, PhotosGallery, Button, Loader.
//Обробляє кнопку "Load More", щоб підвантажувати нові фото.




import { useState, useEffect } from "react";// Для керування станами та ефектами
import { getPhotos } from "../apiService/photos"; // Запит до API
import PhotoForm from "../components/PhotoForm/PhotoForm"; // Форма пошуку
import PhotosGallery from "../components/PhotosGallery/PhotosGallery"; // Галерея фото
import Button from "../components/Button/Button"; // Кнопка "Load more"
import Loader from "../components/Loader/Loader"; // Спінер завантаження

export default function Photos() {
  //  Стейти для збереження даних
  const [images, setImages] = useState([]); // Масив фото, які отримали з API
  const [query, setQuery] = useState(""); // Пошуковий запит
  const [page, setPage] = useState(1); // Номер поточної сторінки
  const [isLoading, setIsLoading] = useState(false); // Показує спінер
  const [error, setError] = useState(null); // Зберігає помилки

  //  Функція обробки пошуку (Отримує нове слово для пошуку (newQuery). Ця функція викликається в PhotoForm)
  const handleSearch = (newQuery)  => {
    if (newQuery.trim() === "") return; // Перевірка на пустий рядок
    setQuery(newQuery); // Оновлюємо пошуковий запит
    setImages([]); // Очищаємо старі фото
    setPage(1); // Скидаємо нумерацію сторінок
  };

  //  Функція для завантаження наступної сторінки/ Використовується у Button, передається пропом onClick={loadMore}
  const loadMore = () => {
    setPage((prevPage) => prevPage + 1); // Збільшуємо номер сторінки
  };

  //  Виконуємо запит при зміні `query` або `page`
  useEffect(() => {
    if (!query) return; // Якщо немає запиту, не виконуємо запит

    async function fetchPhotos() {
      try {
        setIsLoading(true); // Показуємо спінер
        const data = await getPhotos(query, page); // Виконуємо запит
        setImages((prevImages) => [...prevImages, ...data.photos]); // Додаємо фото
      } catch (error) {
        setError("Щось пішло не так... Спробуйте ще раз!"); // Записуємо помилку
      } finally {
        setIsLoading(false); // Ховаємо спінер
      }
    }

    fetchPhotos();
  }, [query, page]); // Виконується при зміні `query` або `page`

  return (
    <div>
      <h1>Photo Search</h1>
      {/* Передаємо функцію `handleSearch` у `PhotoForm` */}
      <PhotoForm onSubmit={handleSearch} />

      {/* Відображаємо помилку, якщо вона є */}
      {error && <p>{error}</p>}

      {/* Відображаємо галерею, якщо є фото */}
      {images.length > 0 && <PhotosGallery images={images} />}

      {/* Відображаємо кнопку "Load more", якщо є фото */}
      {images.length > 0 && !isLoading && <Button onClick={loadMore} />}

      {/* Відображаємо спінер під час завантаження */}
      {isLoading && <Loader />}
    </div>
  );
}
