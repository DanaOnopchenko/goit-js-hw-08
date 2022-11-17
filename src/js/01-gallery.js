// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import '../css/01-gallery.css';
import '../css/common.css';
// Change code below this line

// console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");
// galleryEl.addEventListener('click', onOpenModal)
const markup = galleryItems.map(({
    preview,
    original,
    description
}) => `
<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
`).join('')
galleryEl.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a', { captionsData: `alt`, captionDelay: 250 });
