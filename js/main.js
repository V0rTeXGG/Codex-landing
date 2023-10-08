const  prices = document.querySelectorAll('.pricing__list-price');
const costsMonth = [10, 30, 49];
const costsYear = [120, 360, 590];
const button = document.querySelector('.pricing__block-btn__toggle')
const textPrice = document.querySelectorAll('.pricing__block-btn__text')
prices.forEach((item, index) => {
    item.textContent = `$${costsMonth[index]}/mo`
})

function yearPrice(price) {
    price.forEach((item, index) => {
        item.textContent = `$${costsYear[index]}/mo`
    })
    textPrice[textPrice.length-1].classList.remove('blur')
    textPrice[0].classList.add('blur')
}

function monthPrice(price) {
    price.forEach((item, index) => {
        item.textContent = `$${costsMonth[index]}/mo`
    })
    textPrice[textPrice.length-1].classList.add('blur')
    textPrice[0].classList.remove('blur')
}

button.addEventListener('change', function() {
    if (this.checked) {
        yearPrice(prices)
    } else {
        monthPrice(prices)
    }
});






