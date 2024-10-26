import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import fetchRequest from './js/pixabay-api';

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
  outputList.innerHTML = 'Loading images, please wait...';
  submitBtn.disabled = true;

  fetchRequest(inpVal)
    .then(result => {
      outputList.innerHTML = 'Done';
      console.log(result);
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
    });
});
