import i18next from './i18n'
import updateContent from './translation'

export const handleLanguageChange = changeLanguageButton => {
    const newLanguage = changeLanguageButton.checked ? 'en' : 'pl'
    localStorage.setItem('language', newLanguage)
    i18next.changeLanguage(newLanguage).then(() => {
        updateContent()
    })
}

export const initLanguageSettings = changeLanguageButton => {
    const savedLanguage = localStorage.getItem('language') || 'pl'
    i18next.changeLanguage(savedLanguage).then(() => {
        changeLanguageButton.checked = savedLanguage === 'en'
        updateContent()
    })
}

export const setupI18nextListeners = () => {
    i18next.on('initialized', updateContent)
    i18next.on('languageChanged', updateContent)
}
