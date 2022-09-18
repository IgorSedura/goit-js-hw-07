import { galleryItems } from "./gallery-items.js";
const galleryCards = document.querySelector(".gallery");
const galleryMarkup = createGallery(galleryItems);
galleryCards.insertAdjacentHTML("beforeend", galleryMarkup);
function createGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `

  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>

      `;
    })
    .join("");
}

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
