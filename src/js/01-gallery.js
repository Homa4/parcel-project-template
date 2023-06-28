// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
fillGalleryList();

console.log(galleryItems);

gallery.addEventListener('click', handleClick)

function fillGalleryList() {
    for (const item of galleryItems) {
        gallery.innerHTML += `
            <li class="gallery__item">
                <a class="gallery__link" href="${item.original}">
                    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
                </a>
            </li>
        `
    }
}

function handleClick(event) {
    event.preventDefault();
    if (event.target === gallery) {
        return;
    }
    let lightbox = new SimpleLightbox('.gallery a',{
        captionsData: "alt",
        captionPosition: "bottom",
        captionDelay: 250,});
    lightbox.on('show.simplelightbox', function () {
        // do something…
        
    });  
}