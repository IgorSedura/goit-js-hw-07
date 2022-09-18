import { galleryItems } from "./gallery-items.js";

const galleryCards = document.querySelector(".gallery");
const galleryMarkup = createGallery(galleryItems);
galleryCards.insertAdjacentHTML("beforeend", galleryMarkup);
function createGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
      `;
    })
    .join("");
}

galleryCards.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }
  modalWindow(evt);
}

function modalWindow(evt) {
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);
  instance.show();
  galleryCards.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}
