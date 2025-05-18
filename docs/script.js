const larrow = document.querySelector('.larrow');
const rarrow = document.querySelector('.rarrow');
const carousel = document.querySelector('.carousel');

let carousel_index = 0; // 현재 몇 번째 이미지가 맨 왼쪽에 있는지

function update_carousel() {
    // 여기에 코드 추가
    // rarrow.disabled = true; 등 활용
    carousel.style.marginLeft = carousel_index * -387 + 'px';
    
    if (carousel_index === 0) {
        larrow.disabled = true;
    } else if (carousel_index === 4) {
        rarrow.disabled = true;
    } else { rarrow.disabled = false; larrow.disabled = false; }
}

rarrow.addEventListener('click', function () {
    carousel_index += 1;
    update_carousel();
});
larrow.addEventListener('click', function () {
    carousel_index -= 1;
    update_carousel();
});

update_carousel();


// rarrow.addEventListener('click', function () {
//     if (carousel_index >= 4)
//         return;
//     carousel_index += 1;
//     update_carousel();
// });
// larrow.addEventListener('click', function () {
//     if (carousel_index > 0) {
//         carousel_index -= 1;
//         update_carousel();
//     }
// });


