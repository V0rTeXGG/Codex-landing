export function initializationAnimation() {
    const HEADER = document.querySelector('.header')
    const INNER_IMG = document.querySelector('.inner__img')
    const INNER_BLOCK = document.querySelector('.inner__block')
    const SUBTITLES = document.querySelectorAll('.subtitle')
    const SERVICES_ITEM = document.querySelectorAll('.services__list-item');
    const PRICES_ITEMS = document.querySelectorAll('.pricing__list-item')
    const USERS = document.querySelectorAll('.users__card')
    const NEWS_CARDS = document.querySelectorAll('.news__card')

    const controller = new ScrollMagic.Controller();

    INNER_BLOCK.classList.add('animate-translateX');
    INNER_IMG.classList.add('animate-translateX');
    HEADER.classList.add('animate-translateY');

    function addClassToElement(element, className) {
        element.classList.add(className);
    }

    new ScrollMagic.Scene({
        triggerElement: '.advantages__img-wrapper, .advantages__block',
        triggerHook: 0.9,
    })
        .on('enter', (event) => {
            addClassToElement(event.target.triggerElement(), 'animate-translateX');
        })
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.advantages__block',
        triggerHook: 0.9,
    })
        .on('enter', (event) => {
            addClassToElement(event.target.triggerElement(), 'animate-translateX');
        })
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.users__text',
        triggerHook: 0.9,
    })
        .on('enter', (event) => {
            addClassToElement(event.target.triggerElement(), 'animate-translateY');
        })
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.pricing__block-btn',
        triggerHook: 0.9,
    })
        .on('enter', (event) => {
            addClassToElement(event.target.triggerElement(), 'animate-translateY');
        })
        .addTo(controller);

    SUBTITLES.forEach((card) => {
        new ScrollMagic.Scene({
            triggerElement: card,
            triggerHook: 0.9,
        })
            .on('enter', (event) => {
                addClassToElement(event.target.triggerElement(), 'animate-translateY');
            })
            .addTo(controller);
    });

    SERVICES_ITEM.forEach((item) => {
        new ScrollMagic.Scene({
            triggerElement: item,
            triggerHook: 0.9,
        })
            .on('enter', (event) => {
                addClassToElement(event.target.triggerElement(), 'animate-translateY');
            })
            .addTo(controller);
    });

    PRICES_ITEMS.forEach((card) => {
        new ScrollMagic.Scene({
            triggerElement: card,
            triggerHook: 0.9,
        })
            .on('enter', (event) => {
                addClassToElement(event.target.triggerElement(), 'animate-translateY');
            })
            .addTo(controller);
    });

    USERS.forEach((item) => {
        new ScrollMagic.Scene({
            triggerElement: item,
            triggerHook: 0.9,
        })
            .on('enter', (event) => {
                addClassToElement(event.target.triggerElement(), 'animate-translateY');
            })
            .addTo(controller);
    });

    NEWS_CARDS.forEach((card) => {
        new ScrollMagic.Scene({
            triggerElement: card,
            triggerHook: 0.9,
        })
            .on('enter', (event) => {
                addClassToElement(event.target.triggerElement(), 'animate-translateX');
            })
            .addTo(controller);
    });

}





