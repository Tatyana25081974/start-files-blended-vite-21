import css from "./PhotosGalleryItem.module.css"; // Підключаємо стилі

export default function PhotosGalleryItem({ src, alt, avgColor }) {
  return (
    <div
      className={css.thumb}
      style={{ backgroundColor: avgColor, borderColor: avgColor }} // Задаємо фон
    >
      <img className={css.image} src={src} alt={alt} />
    </div>
  );
}
