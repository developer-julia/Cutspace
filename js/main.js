/*============ form active ============*/
const form = document.querySelector('.form');
const input = document.querySelector('.form__input');
const button = document.querySelector('.form__button');

input.addEventListener('focus', function () {
    form.classList.add('form_active');
})
input.addEventListener('blur', function () {
    form.classList.remove('form_active');
})

input.addEventListener('focus', function () {
    button.classList.add('button_active');
})
input.addEventListener('blur', function () {
    button.classList.remove('button_active');
})

// /*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 70) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== page scroll ==========================*/
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

/*================== mobile menu - burger menu ================*/

let headerBurger = document.querySelector('.header-burger');
let headerMenu = document.querySelector('.header__nav');
let headerBody = document.querySelector('.body');

headerBurger.addEventListener('click', function () {
    headerMenu.classList.toggle('header__nav_active');
    headerBurger.classList.toggle('header-burger_active');
    headerBody.classList.toggle('body-lock');
})