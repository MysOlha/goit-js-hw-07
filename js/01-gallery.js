import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryImage = document.querySelector('.gallery')

galleryImage.insertAdjacentHTML('beforeend', createGallery(galleryItems))

galleryImage.addEventListener('click', onImagesClick)


function createGallery (images) {
return images
.map(({ preview, original, description}) => {
    return `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
                </a>
            </div>`
})
.join('')

} 

function onImagesClick (evt) {
if(!evt.target.classList.contains('gallery__image')){
    return
} 
evt.preventDefault()
modalOpen(evt)
console.log(evt.target.dataset.source)
}

function modalOpen (evt) {
const originalSizeOfImage = evt.target.dataset.source
const instance = basicLightbox.create(`<img src="${originalSizeOfImage}" width="1280" height="720">`)
instance.show()

galleryImage.addEventListener('keydown', onEscapeClick)
    
function onEscapeClick (evt) {
    if (modalOpen && evt.key === 'Escape') {
  
    instance.close()
    }
  
}
}




