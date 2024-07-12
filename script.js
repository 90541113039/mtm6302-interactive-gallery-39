const images = [
    { src: 'images/1.jpg', hdSrc: 'images/1_hd.jpg', caption: 'Caption 1' },
    { src: 'images/2.jpeg', hdSrc: 'images/2_hd.jpeg', caption: 'Caption 2' },
    { src: 'images/3.jpg', hdSrc: 'images/3_hd.jpg', caption: 'Caption 3' },
    { src: 'images/4.jpg', hdSrc: 'images/4_hd.jpg', caption: 'Caption 4' },
    { src: 'images/5.jpg', hdSrc: 'images/5_hd.jpg', caption: 'Caption 5' },
    { src: 'images/6.jpg', hdSrc: 'images/6_hd.jpg', caption: 'Caption 6' },
    { src: 'images/7.jpg', hdSrc: 'images/7_hd.jpg', caption: 'Caption 7' },
    { src: 'images/8.jpg', hdSrc: 'images/8_hd.jpg', caption: 'Caption 8' },
    { src: 'images/9.jpg', hdSrc: 'images/9_hd.jpg', caption: 'Caption 9' },
    { src: 'images/10.jpg', hdSrc: 'images/10_hd.jpg', caption: 'Caption 10' },
    { src: 'images/11.jpg', hdSrc: 'images/11_hd.jpg', caption: 'Caption 11' },
    { src: 'images/12.jpg', hdSrc: 'images/12_hd.jpg', caption: 'Caption 12' },
    { src: 'images/13.jpg', hdSrc: 'images/13_hd.jpg', caption: 'Caption 13' },
    { src: 'images/14.jpg', hdSrc: 'images/14_hd.jpg', caption: 'Caption 14' },
    { src: 'images/15.jpg', hdSrc: 'images/15_hd.jpg', caption: 'Caption 15' },
    { src: 'images/16.jpg', hdSrc: 'images/16_hd.jpg', caption: 'Caption 16' },
    { src: 'images/17.jpg', hdSrc: 'images17_hd.jpg', caption: 'Caption 17' },
    { src: 'images/18.jpg', hdSrc: 'images/18_hd.jpg', caption: 'Caption 18' },
    { src: 'images/19.jpg', hdSrc: 'images/19_hd.jpg', caption: 'Caption 19' },
    { src: 'images/20.jpg', hdSrc: 'images/20_hd.jpg', caption: 'Caption 20' }
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
