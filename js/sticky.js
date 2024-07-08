export function initStickyNavbar() {
    const stickyThreshold = 20
    const stickyClass = 'sticky'
    const navbar = document.querySelector('.navbar')

    if (!navbar) {
        return
    }

    navbar.classList.toggle(stickyClass, window.scrollY > stickyThreshold)
}
