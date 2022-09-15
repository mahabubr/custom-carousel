const images = [
    'image/pic-1.jpg',
    'image/pic-2.jpg',
    'image/pic-3.jpg',
    'image/pic-4.jpg',
    'image/pic-5.jpg',
    'image/pic-6.jpg',
    'image/pic-7.jpg',
]

let imgIndex = 0;

const image = document.getElementById('slider-img');

setInterval(() => {
    if(imgIndex === images.length) {
        imgIndex = 0
    }
    const imgLink = images[imgIndex]
    image.setAttribute('src', imgLink)
    imgIndex++
}, 1000)