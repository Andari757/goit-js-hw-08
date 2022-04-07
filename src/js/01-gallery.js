// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const gallery = document.querySelector(".gallery")
const items = galleryItems
    .map(e => `<a class="gallery__item" href="${e.original}">
  <img class="gallery__image" src="${e.preview}" alt="${e.description}" />
</a>`)
    .join("");
gallery.insertAdjacentHTML("afterbegin", items)
    
    let Gallery = new SimpleLightbox('.gallery a',{captionsData: `alt`, captionDelay:250});
