const ADVANTAGES_SCROLL_THRESHOLD = 150;
const SERVICES_SCROLL_THRESHOLD = 1000;
const PRICING_SCROLL_THRESHOLD = 1600;
const FEATURE_SCROLL_THRESHOLD = 2400;
const NEWS_SCROLL_THRESHOLD = 3400;

const HEADER = document.querySelector('.header')
// inner
const INNER_IMG = document.querySelector('.inner__img')
const INNER_BLOCK = document.querySelector('.inner__block')

const SUBTITLES = document.querySelectorAll('.subtitle')
// advantages
const ADVANTAGES_IMG = document.querySelector('.advantages__img-wrapper');
const ADVANTAGES_BLOCK = document.querySelector('.advantages__block');

// services
const SERVICES_ITEM = document.querySelectorAll('.services__list-item');


// prices
const PRICES_BLOCK = document.querySelector('.pricing__block-btn ');
const PRICES_ITEMS = document.querySelectorAll('.pricing__list-item')

// users
const USERS_TEXT = document.querySelector('.users__text')
const USERS = document.querySelectorAll('.users__card')

// news
const NEWS_CARDS = document.querySelectorAll('.news__card')

function animateElementWithStyle(element, styleClass) {
    element.classList.add(styleClass);
}

// Функция для проверки и запуска анимаций при прокрутке
function handleScroll() {
    const scrollY = window.scrollY;

    if (scrollY > ADVANTAGES_SCROLL_THRESHOLD) {
        animateElementWithStyle(ADVANTAGES_IMG, 'animate-translateX');
        animateElementWithStyle(ADVANTAGES_BLOCK, 'animate-translateX');
    }
    if (scrollY > SERVICES_SCROLL_THRESHOLD) {
        SERVICES_ITEM.forEach(item => animateElementWithStyle(item, 'animate-translateY'));
        SUBTITLES[1].classList.add('animate-translateY');
    }
    if (scrollY > PRICING_SCROLL_THRESHOLD) {
        SUBTITLES[2].classList.add('animate-translateY');
        animateElementWithStyle(PRICES_BLOCK, 'animate-translateY');
        PRICES_ITEMS.forEach(item => animateElementWithStyle(item, 'animate-translateY'));
    }
    if (scrollY > FEATURE_SCROLL_THRESHOLD) {
        SUBTITLES[3].classList.add('animate-translateY');
        animateElementWithStyle(USERS_TEXT, 'animate-translateY');
        USERS.forEach(item => animateElementWithStyle(item, 'animate-translateY'));
    }
    if (scrollY > NEWS_SCROLL_THRESHOLD) {
        SUBTITLES[4].classList.add('animate-translateY');
        NEWS_CARDS.forEach(item => animateElementWithStyle(item, 'animate-translateX'));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    INNER_BLOCK.classList.add('animate-translateX');
    INNER_IMG.classList.add('animate-translateX');
    HEADER.classList.add('animate-translateY');
});

window.addEventListener('scroll', () => {
    requestAnimationFrame(handleScroll);
});
