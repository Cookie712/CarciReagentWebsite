import i18next from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
    .use(Backend)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'pl',
        debug: false,
        backend: {
            loadPath: '/locales/{{lng}}/translation.json'
        },
        interpolation: {
            escapeValue: false
        },
        lng: localStorage.getItem('language') || 'pl',
        initImmediate: false,
        preload: ['pl']
    })

export default i18next
