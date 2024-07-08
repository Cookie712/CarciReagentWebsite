export function initStickyNavbar() {
    const navbar = document.querySelector('.navbar')
    if (window.scrollY > 20) {
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky')
    }

    const toTop = document.querySelector('.to-top')

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            toTop.classList.add('active')
        } else {
            toTop.classList.remove('active')
        }
    })
}
