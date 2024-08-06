export function initDarkNavbar() {
    const navbar = document.querySelector('.navbar')
    const footer = document.querySelector('footer')

    if (!navbar || !footer) return

    let lastKnownScrollPosition = 0
    let ticking = false

    function handleScroll() {
        const footerTop = footer.getBoundingClientRect().top
        const navbarHeight = navbar.offsetHeight

        if (footerTop <= navbarHeight) {
            navbar.classList.add('dark-background')
        } else {
            navbar.classList.remove('dark-background')
        }
    }

    window.addEventListener('scroll', function () {
        lastKnownScrollPosition = window.scrollY

        if (!ticking) {
            window.requestAnimationFrame(function () {
                handleScroll()
                ticking = false
            })

            ticking = true
        }
    })
}
