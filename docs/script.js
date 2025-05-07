const larrow = document.querySelector('.larrow');
const rarrow = document.querySelector('.rarrow');
const carousel = document.querySelector('.carousel');

let carousel_left = 0;

rarrow.addEventListener('click', function () {
    carousel_left -= 387;
    carousel.style.marginLeft = carousel_left + 'px';
});
larrow.addEventListener('click', function () {
    carousel_left += 387;
    carousel.style.marginLeft = carousel_left + 'px';
});