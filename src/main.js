import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import fetchRequest from './js/pixabay-api';
import drawMarkup from './js/render-functions';

const searchForm = document.forms.searchForm;
const inp = searchForm.elements.input;
const submitBtn = searchForm.elements.submitButton;
const outputList = document.querySelector('.general-list');

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  const inpVal = e.target.parentElement.elements.input.value.trim();
  if (!inpVal) {
    return;
  }
  outputList.innerHTML = '<span class="loader"></span>';
  submitBtn.disabled = true;

  const photosArr = fetchRequest(inpVal)
    .then(({ hits }) => {
      outputList.innerHTML = drawMarkup(hits);
    })
    .catch(error => {
      iziToast.error({
        message: error.message,
        position: 'topRight',
      });
      outputList.innerHTML = '';
    })
    .finally(() => {
      submitBtn.disabled = false;
      lightboxGallery.refresh();
    });
  });
  const lightboxGallery = new SimpleLightbox('.general-list a', {
    captionsData: "alt",
    captionDelay: 250,
  });