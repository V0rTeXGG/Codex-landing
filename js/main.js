import trackWindowScroll from "./header";
import {yearPrice, monthPrice} from "./prices";

const header = document.querySelector('.header')
const prices = document.querySelectorAll('.pricing__list-price');
const costsMonth = [10, 30, 49];
const costsYear = [120, 360, 590];
const toggleButton = document.querySelector('.pricing__checkbox')
const textPrice = document.querySelectorAll('.pricing__block-btn__text')

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

trackWindowScroll(header)










