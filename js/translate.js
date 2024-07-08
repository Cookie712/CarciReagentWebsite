async function translateNode(node, apiKey) {
    if (node.nodeType === Node.TEXT_NODE) {
        const textToTranslate = node.textContent.trim()
        const response = await fetch(
            `https://translation.googleapis.com/language/translate/v2?key=${apiKey}&q=${textToTranslate}&source=pl&target=en`
        )
        const translatedData = await response.json()
        const translatedText =
            translatedData.data.translations[0].translatedText
        node.textContent = translatedText
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        for (const childNode of node.childNodes) {
            await translateNode(childNode, apiKey)
        }
    }
}
export async function translatePageToEnglish() {
    const apiKey = 'AIzaSyBmqUML95vmbWjUsjF57Gh7Eaxgx5qI1SE'
    await translateNode(document.body, apiKey)
}
