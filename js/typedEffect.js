import Typed from 'typed.js'

export function initTypedEffect(selector, isEnglish) {
    if (isEnglish) {
        return new Typed(selector, {
            strings: [
                'easy to use',
                'rapid Detection',
                'convenient use',
                'low costs'
            ],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        })
    } else {
        return new Typed(selector, {
            strings: [
                'prosta obsługa',
                'szybkie wykrywanie',
                'wygodne użycie',
                'niskie koszty'
            ],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        })
    }
}
