const BODY = document.body;
const MENU_BTN = document.querySelector('.header__btn-menu')
const NAV = document.querySelector('.header__menu');

export function trackWindowScroll(header) {
    if (window.innerWidth > 850) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 150) {
                header.classList.add('scroll')
            } else {
                header.classList.remove('scroll')
            }
        })
    }
}

export function logoScrollTop(logo) {
    logo.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
}

export function MobileMenu() {
    MENU_BTN.addEventListener('click', function () {
        MENU_BTN.classList.toggle('active')
        BODY.classList.toggle('lock')
        NAV.classList.toggle('active')
    })
}

function closeMenu() {
    MENU_BTN.classList.remove('active')
    BODY.classList.remove('lock')
    NAV.classList.remove('active')
}

export function navigationLinks(links) {
    links.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {

                const offset = targetElement.getBoundingClientRect().top + window.scrollY - 150;
                window.scrollTo({
                    top: offset,
                    behavior: "smooth"
                });
                if (window.innerWidth <= 850) {
                    closeMenu()
                }
            }
        });
    });
}


