import {trackWindowScroll, logoScrollTop, addClassMenuButton} from "./header.js"
import {yearPrice, monthPrice} from "./prices.js";

const body = document.body;
const nav = document.querySelector('.header__menu');
const menuBtn = document.querySelector('.header__btn-menu')
const header = document.querySelector('.header');
const logo = document.querySelector('.header__logo');
const prices = document.querySelectorAll('.pricing__list-price');
const costsMonth = [10, 30, 49];
const costsYear = [120, 360, 590];
const toggleButton = document.querySelector('.pricing__checkbox')
const textPrice = document.querySelectorAll('.pricing__block-btn__text');

trackWindowScroll(header)

addClassMenuButton(menuBtn, body, nav)

logoScrollTop(logo)

prices.forEach((item, index) => {
    item.textContent = `$${costsMonth[index]}/mo`
})

toggleButton.addEventListener('change', function () {
    if (this.checked) {
        yearPrice(prices, costsYear, textPrice)
    } else {
        monthPrice(prices, costsMonth, textPrice)
    }
});










