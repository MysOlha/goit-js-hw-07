import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryImage = document.querySelector('.gallery')
galleryImage.insertAdjacentHTML('beforeend', createGalleryImage(galleryItems))

galleryImage.addEventListener('click', onImagesClick)

function createGalleryImage(img) {
    return img
    .map(({preview, original, description}) => {
        return `<li> <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
                </a> </li>`
    })
    .join('')
}

function onImagesClick (evt) {
    
    evt.preventDefault()
    if(!evt.target.classList.contains('gallery__image')){
        return
    }
    new SimpleLightbox('.gallery a', {captionsData: 'alt', captionsDelay: 250} );
    
    galleryImage.removeEventListener('click', onImagesClick)
}
        
