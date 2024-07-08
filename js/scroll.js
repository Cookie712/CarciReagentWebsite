export function initScrollButton() {
    const scrollThreshold = 100
    const activeClass = 'active'
    const toTop = document.querySelector('.to-top')

    if (!toTop) {
        return
    }

    toTop.classList.toggle(activeClass, window.scrollY > scrollThreshold)
}
