import {trackWindowScroll, logoScrollTop, MobileMenu, navigationLinks} from "./header.js"
import {yearPrice, monthPrice} from "./prices.js";


const HEADER_LINKS = document.querySelectorAll('.header__nav-link');
const FOOTER_LINKS = document.querySelectorAll('.resource-link')
const HEADER = document.querySelector('.header');
const LOGO = document.querySelector('.header__logo');
const PRICES = document.querySelectorAll('.pricing__list-price');
const COSTS_MONTH = [10, 30, 49];
const COSTS_YEAR = COSTS_MONTH.map(item => (90 * (item * 12)) / 100)
const TOGGLE_BUTTON = document.querySelector('.pricing__checkbox')
const TEXT_PRICE = document.querySelectorAll('.pricing__block-btn__text');

trackWindowScroll(HEADER)

MobileMenu()

logoScrollTop(LOGO)

navigationLinks(HEADER_LINKS)
navigationLinks(FOOTER_LINKS)

PRICES.forEach((item, index) => {
    item.textContent = `$${COSTS_MONTH[index].toFixed(2)}/mo`
})

console.log(PRICES)

TOGGLE_BUTTON.addEventListener('change', function () {
    if (this.checked) {
        yearPrice(PRICES, COSTS_YEAR, TEXT_PRICE)
    } else {
        monthPrice(PRICES, COSTS_MONTH, TEXT_PRICE)
    }
});










