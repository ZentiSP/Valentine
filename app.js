const letter = document.querySelector('.letter');
const target = document.querySelector('.container');
const dotall = document.querySelector('.dotall');
const hero = document.querySelector('.sec-hero');

letter.addEventListener('click', function () {

    target.classList.add('container-show');
    letter.classList.add('fade-away');
    dotall.classList.add('show');
    hero.classList.add('bg-black');
});
