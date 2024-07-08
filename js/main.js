import { initOverlayCard } from './overlayCard'
import {
    handleLanguageChange,
    initLanguageSettings,
    setupI18nextListeners
} from './language'
import { setupScrollEventListener } from './scrollEvents'

document.addEventListener('DOMContentLoaded', () => {
    initOverlayCard()
    setupScrollEventListener()

    const changeLanguageButton = document.querySelector('#language-toggle')
    initLanguageSettings(changeLanguageButton)

    changeLanguageButton.addEventListener('change', () => {
        handleLanguageChange(changeLanguageButton)
    })

    setupI18nextListeners()
})
