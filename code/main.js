import './sass/style.scss';

const emailInput = document.getElementById('email');
const errorMessage = document.querySelector('.error-message');
const errorIcon = document.querySelector('.error-icon');

  emailInput.addEventListener('input', function () {
    const is1440px = window.innerWidth === 1440;
    if (emailInput.validity.valid || emailInput.value === '') {
      errorMessage.style.display = 'none';
      errorIcon.style.display = 'none'; 
    } else {
      errorMessage.style.display = 'block';

      if (is1440px) {
        errorIcon.style.display = 'block';
      } else {
        errorIcon.style.display = 'none';
      }
    }
  });