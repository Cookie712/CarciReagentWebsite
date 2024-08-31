import debounce from './debounce'

export function initScrollButton() {
    const scrollThreshold = 100
    const activeClass = 'active'
    const toTop = document.querySelector('.to-top')

    if (!toTop) {
        return
    }

    const handleScroll = () => {
        const shouldBeActive = window.scrollY > scrollThreshold
        if (toTop.classList.contains(activeClass) !== shouldBeActive) {
            toTop.classList.toggle(activeClass, shouldBeActive)
        }
    }
    const debouncedHandleScroll = debounce(handleScroll)
    window.addEventListener('scroll', debouncedHandleScroll)
}
