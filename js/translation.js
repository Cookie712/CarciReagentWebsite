import i18next from './i18n'

export default function updateContent() {
    document.querySelectorAll('[data-i18n-key]').forEach(element => {
        const key = element.getAttribute('data-i18n-key')
        element.innerHTML = i18next.t(key)
    })
}
