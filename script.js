const images = [
    { src: '1.jpg', hdSrc: '1.jpg', caption: 'Caption 1' },
    { src: 'i2.jpeg', hdSrc: 'images/image2_hd.jpg', caption: 'Caption 2' },
    { src: '3.jpg', hdSrc: 'images/image3_hd.jpg', caption: 'Caption 3' },
    { src: '4.jpg', hdSrc: 'images/image4_hd.jpg', caption: 'Caption 4' },
    { src: '5.jpg', hdSrc: 'images/image5_hd.jpg', caption: 'Caption 5' },
    { src: '6.jpg', hdSrc: 'images/image6_hd.jpg', caption: 'Caption 6' },
    { src: '7.jpg', hdSrc: 'images/image7_hd.jpg', caption: 'Caption 7' },
    { src: '8.jpg', hdSrc: 'images/image8_hd.jpg', caption: 'Caption 8' },
    { src: '9.jpg', hdSrc: 'images/image9_hd.jpg', caption: 'Caption 9' },
    { src: '10.jpg', hdSrc: 'images/image10_hd.jpg', caption: 'Caption 10' },
    { src: '11.jpg', hdSrc: 'images/image11_hd.jpg', caption: 'Caption 11' },
    { src: 'i2.jpg', hdSrc: 'images/image12_hd.jpg', caption: 'Caption 12' },
    { src: '13.jpg', hdSrc: 'images/image13_hd.jpg', caption: 'Caption 13' },
    { src: 'images/image14.jpg', hdSrc: 'images/image14_hd.jpg', caption: 'Caption 14' },
    { src: 'images/image15.jpg', hdSrc: 'images/image15_hd.jpg', caption: 'Caption 15' },
    { src: 'images/image16.jpg', hdSrc: 'images/image16_hd.jpg', caption: 'Caption 16' },
    { src: 'images/image17.jpg', hdSrc: 'images/image17_hd.jpg', caption: 'Caption 17' },
    { src: 'images/image18.jpg', hdSrc: 'images/image18_hd.jpg', caption: 'Caption 18' },
    { src: 'images/image19.jpg', hdSrc: 'images/image19_hd.jpg', caption: 'Caption 19' },
    { src: 'images/image20.jpg', hdSrc: 'images/image20_hd.jpg', caption: 'Caption 20' }
];

const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');

// Function to create gallery images dynamically
images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = `Image ${index + 1}`;
    img.dataset.hdSrc = image.hdSrc;
    img.dataset.caption = image.caption;
    gallery.appendChild(img);
});

// Event delegation to handle image clicks
gallery.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        lightboxImg.src = event.target.dataset.hdSrc;
        lightboxCaption.textContent = event.target.dataset.caption;
        lightbox.style.display = 'flex';
    }
});

// Event listener to hide the lightbox
lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
    lightboxCaption.textContent = '';
});
