import { initStickyNavbar } from './sticky'
import { initScrollButton } from './scroll'
import { initDarkNavbar } from './navbar'

const handleScroll = () => {
    initStickyNavbar()
    initScrollButton()
    initDarkNavbar()
}

export const setupScrollEventListener = () => {
    window.addEventListener('scroll', handleScroll)
}
