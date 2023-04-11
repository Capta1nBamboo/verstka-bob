
document.addEventListener('DOMContentLoaded', function () {
const popupOpen = document.querySelector('.popup-open');
const popupClose = document.querySelector('.popup-close');
const popupFade = document.querySelector('.popup-fade');

popupOpen.addEventListener('click', function (event) {
  event.preventDefault();
  document.body.style.overflow = 'hidden';
  popupFade.style.display = 'block';
});

popupClose.addEventListener('click', function (event) {
  event.preventDefault();
  document.body.style.overflow = 'auto';
  popupFade.style.display = 'none';
});

popupFade.addEventListener('click', function (event) {
  if (event.target === popupFade) {
    document.body.style.overflow = 'auto';
    popupFade.style.display = 'none';
  }
});

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    document.body.style.overflow = 'auto';
    popupFade.style.display = 'none';
  }
});
});
