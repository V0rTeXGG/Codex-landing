export function trackWindowScroll(header) {
    if(window.innerWidth > 850) {
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

export function addClassMenuButton(button, body, nav) {
    button.addEventListener('click', function () {
        if (!button.classList.contains('active')) {
            button.classList.add('active')
            body.classList.add('lock')
            nav.classList.add('active')
        } else {
            button.classList.remove('active')
            body.classList.remove('lock')
            nav.classList.remove('active')
        }
    })
}


