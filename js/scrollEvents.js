import { initStickyNavbar } from './sticky'
import { initScrollButton } from './scroll'

const handleScroll = () => {
    initStickyNavbar()
    initScrollButton()
}

export const setupScrollEventListener = () => {
    window.addEventListener('scroll', handleScroll)
}
