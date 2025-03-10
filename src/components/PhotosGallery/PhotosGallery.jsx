//PhotosGallery — компонент, який рендерить галерею фото.

import PhotosGalleryItem from "../PhotosGalleryItem/PhotosGalleryItem"; // Імпортуємо компонент
import Grid from "../Grid/Grid"; // Універсальна сітка
import GridItem from "../GridItem/GridItem"; // Елемент сітки
import css from "./PhotosGallery.module.css"; // Підключаємо стилі

export default function PhotosGallery({ images }) {
  return (
    <Grid>
      {images.map((image) => (
        <GridItem key={image.id}>
          {/* Передаємо дані про зображення в компонент */}
          <PhotosGalleryItem src={image.src.large} alt={image.alt} avgColor={image.avg_color} />
        </GridItem>
      ))}
    </Grid>
  );
}
