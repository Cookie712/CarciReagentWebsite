import {
    handleLanguageChange,
    initLanguageSettings,
    setupI18nextListeners
} from './language'
import { setupScrollEventListener } from './scrollEvents'
import defineLazyLoading from './lazyLoading'

document.addEventListener('DOMContentLoaded', () => {
    setupScrollEventListener()

    const changeLanguageButton = document.querySelector('#language-toggle')

    initLanguageSettings(changeLanguageButton)

    changeLanguageButton.addEventListener('change', () => {
        handleLanguageChange(changeLanguageButton)
    })

    setupI18nextListeners()
    defineLazyLoading()
})
