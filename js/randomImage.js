// Array of images in the "assets/doremy_images" folder
const imageFolder = 'assets/doremy_images/';

// Array of image file names
const images = [
    'randomimages (1).gif',
    'randomimages (1).ico',
    'randomimages (1).jpg',
    'randomimages (1).png',
    'randomimages (1).webp',
    'randomimages (10).png',
    'randomimages (11).png',
    'randomimages (2).gif',
    'randomimages (2).jpg',
    'randomimages (2).png',
    'randomimages (3).gif',
    'randomimages (3).jpg',
    'randomimages (3).png',
    'randomimages (4).gif',
    'randomimages (4).jpg',
    'randomimages (4).png',
    'randomimages (5).gif',
    'randomimages (5).png',
    'randomimages (6).gif',
    'randomimages (6).png',
    'randomimages (7).gif',
    'randomimages (7).png',
    'randomimages (8).gif',
    'randomimages (8).png',
    'randomimages (9).gif',
    'randomimages (9).png',
    'randomimages.png'
];


// Function to randomly select an image
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return imageFolder + images[randomIndex];
}

// Set a random image to the img element when the page loads
document.addEventListener("DOMContentLoaded", () => {
    const randomImageElement = document.getElementById('randomImage');
    randomImageElement.src = getRandomImage();
});
