import i18next from './i18n'

export default function updateContent() {
    if (!i18next.isInitialized) {
        return
    }

    const elements = document.querySelectorAll('[data-i18n-key]')

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n-key')
        const translation = i18next.t(key)

        if (element.hasAttribute('data-i18n-placeholder')) {
            element.placeholder = translation
        } else {
            element.innerHTML = translation
        }
    })
}
