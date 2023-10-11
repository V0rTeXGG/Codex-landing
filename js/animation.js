const styleAnimation = 'opacity: 1; transform: translateY(0)';


const header = document.querySelector('.header')
// inner
const innerImg = document.querySelector('.inner__img')
const innerBlock = document.querySelector('.inner__block')

const subtitles = document.querySelectorAll('.subtitle')
// advantages
const advantagesImg = document.querySelector('.advantages__img-wrapper');
const advantagesBlock = document.querySelector('.advantages__block');

// feature
const featuresItems = document.querySelectorAll('.feature__list-item');


// prices
const pricingBlock = document.querySelector('.pricing__block-btn ');
const pricesItems = document.querySelectorAll('.pricing__list-item')

// users
const featureTitle = document.querySelector('.feature__title');
const featureText = document.querySelector('.users__text')
const featureUsers = document.querySelectorAll('.users__card')

// news
const newsItems = document.querySelectorAll('.news__card')

document.addEventListener('DOMContentLoaded', () => {
    innerBlock.style = 'opacity: 1; transform: translateX(0)';
    innerImg.style = 'opacity: 1; transform: translateX(0)';
    header.style = styleAnimation;
})

window.addEventListener('scroll', function() {
    if(window.scrollY > 150) {
        advantagesImg.style = 'opacity: 1; transform: translateX(0)';
        advantagesBlock.style = 'opacity: 1; transform: translateX(0)'
    }
    if(window.scrollY > 1000) {
        featuresItems.forEach(item => {
            item.style = styleAnimation
        });
        subtitles[1].style = styleAnimation;
    }
    if(window.scrollY > 1600) {
        subtitles[2].style = styleAnimation;
        pricingBlock.style = styleAnimation;
        pricesItems.forEach(item => {
            item.style = styleAnimation
        });
    }
    if(window.scrollY > 2400) {
        subtitles[3].style = styleAnimation;
        featureText.style = styleAnimation;
        featureUsers.forEach(item => {
            item.style = styleAnimation
        });
    }
    if(window.scrollY > 3400) {
        subtitles[4].style = styleAnimation;
        newsItems.forEach(item => {
            item.style = 'opacity: 1; transform: translateX(0)';
        });
    }
});
