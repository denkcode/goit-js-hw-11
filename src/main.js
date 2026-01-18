import { getImagesByQuery } from './js/pixabay-api.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { showLoader, hideLoader, clearGallery, createGallery } from './js/render-function.js';

const searchForm = document.querySelector('.form');

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const query = event.currentTarget.searchtext.value.trim();

  if (query === '') {
    iziToast.warning({
      message: 'Введіть слово для пошуку!'
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {

      if (data.hits.length === 0) {
        hideLoader();
        iziToast.warning({
          message: 'Нічого не знайдено. Спробуйте інший запит.'
        });
        return;
      }

      setTimeout(() => {
         createGallery(data.hits);

         hideLoader(); // <-- ховаємо лоадер після 2 секунд

         iziToast.success({
           message: `Знайдено ${data.hits.length} зображень`
         });
      }, 2000);
    })
    .catch(() => {
      hideLoader();
      iziToast.error({
        message: 'Помилка сервера. Спробуйте пізніше'
      });
    });

searchForm.reset();
});


