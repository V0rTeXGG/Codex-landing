export default function trackWindowScroll(header) {
    window.addEventListener('scroll', function() {
        if(window.scrollY > 150) {
            header.classList.add('scroll')
        } else {
            header.classList.remove('scroll')
        }
    })
}


