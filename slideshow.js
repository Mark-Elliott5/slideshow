const searchImages = () => {
    const images = Array.from(document.getElementsByClassName('image-wrapper'));
    const currentImage = images.find((element) => element.classList.value === 'image-wrapper visible');
    const index = images.indexOf(currentImage);
    return [images, currentImage, index];
}

const toggleVisibility = (currentImage, nextImage) => {
    currentImage.classList.toggle('visible');
    nextImage.classList.toggle('visible');
}

const nextImage = (images, currentImage, index) => {
    let nextImage;
    if (index >= images.length-1) {
        nextImage = images[0];
    } else {
        nextImage = images[index+1];
    }
    toggleVisibility(currentImage, nextImage);
}

const previousImage = (images, currentImage, index) => {
    let nextImage;
    if (index <= 0) {
        nextImage = images[images.length-1];
    } else {
        nextImage = images[index-1];
    }
    toggleVisibility(currentImage, nextImage);
}

const nextButton = document.getElementById('next');
nextButton.addEventListener('click', () => {
    nextImage(...searchImages())
});
const previousButton = document.getElementById('previous');
previousButton.addEventListener('click', () => {
    previousImage(...searchImages())
});

setInterval(() => {nextImage(...searchImages())}, 5000);