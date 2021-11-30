import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} title=${description}/>
</a>
</div>`;
    }).join("");
};
var lightbox = new SimpleLightbox('.gallery a');

galleryContainer.addEventListener("click", onGalleryContainerClick);
function onGalleryContainerClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return;
    };
};
