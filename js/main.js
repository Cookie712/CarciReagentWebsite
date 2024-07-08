import { initStickyNavbar } from './sticky'
import { initTypedEffect } from './typedEffect'
import { initOverlayCard } from './overlayCard'
import { translatePageToEnglish } from './translate'

window.addEventListener('scroll', () => initStickyNavbar())

let typed = initTypedEffect('.typing', false)

document.body.addEventListener('pointermove', () => applyOverlayMask)
initOverlayCard()

const changeLanguageButton = document.querySelector('#language-toggle')
changeLanguageButton.addEventListener('change', () => {
    if (changeLanguageButton.checked) {
        typed.destroy()
        typed = initTypedEffect('.typing', true)
        translatePageToEnglish()
    } else {
        window.location.reload()
    }
})
