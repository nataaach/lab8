const images = [
  { preview: './images/1.png', original: './images/1.png', description: 'Зображення 1' },
  { preview: './images/2.png', original: './images/2.png', description: 'Зображення 2' },
  { preview: './images/3.png', original: './images/3.png', description: 'Зображення 3' },
  { preview: './images/4.png', original: './images/4.png', description: 'Зображення 4' },
  { preview: './images/5.png', original: './images/5.png', description: 'Зображення 5' },
  { preview: './images/6.png', original: './images/6.png', description: 'Зображення 6' },
  { preview: './images/7.png', original: './images/7.png', description: 'Зображення 7' },
  { preview: './images/8.png', original: './images/8.png', description: 'Зображення 8' },
  { preview: './images/9.png', original: './images/9.png', description: 'Зображення 9' },
];

// Знаходимо ul.gallery
const gallery = document.querySelector('.gallery');

// Створюємо розмітку для галереї
const galleryMarkup = images
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery-item">
        <img 
          src="${preview}" 
          data-original="${original}" 
          alt="${description}" 
          class="gallery-image"
        />
      </li>`
  )
  .join('');

// Додаємо розмітку до галереї
gallery.innerHTML = galleryMarkup;

// Додаємо слухача подій для відкриття модального вікна
gallery.addEventListener('click', event => {
  event.preventDefault(); // Відключаємо стандартну поведінку
  const { target } = event;

  // Перевірка, що клік був по зображенню
  if (target.nodeName !== 'IMG') return;

  const originalImageSrc = target.dataset.original;

  // Створюємо модальне вікно з бібліотекою basicLightbox
  const instance = basicLightbox.create(`
    <img src="${originalImageSrc}" alt="${target.alt}" style="max-width: 90%; max-height: 90%; border-radius: 5px;" />
  `);

  // Відкриваємо модальне вікно
  instance.show();

  // Додаємо закриття модального вікна по клавіші Escape
  const onEscKeyPress = (e) => {
    if (e.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', onEscKeyPress);
    }
  };

  window.addEventListener('keydown', onEscKeyPress);
});
