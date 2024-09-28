import CardData from '../model/CardData';
import CardDeck from '../model/CardDeck';
import Language from '../model/Language';

const CARD_DATA_DECK_CACHE = {}

export default class CardDeckService {
    language = Language.None

    /**
     * @param {Language} language 
     */
    constructor(language = Language.None) {
        if (language.isNone()) { throw new Error('No language provided') }
        this.language = language
    }

    /**
     * Loads a card data deck from a JSON file
     * @returns {Promise<CardDeck>} A promise that resolves to a CardDataDeck
     * @throws {Error} If the language is not supported
     */
    async loadFromJson() {
        const language = this.language

        if (language in CARD_DATA_DECK_CACHE) {
            // Returning loaded data from cache
            return CARD_DATA_DECK_CACHE[language]
        }

        // Reading JSON file: https://stackoverflow.com/questions/37649695/how-can-i-parse-through-local-json-file-in-react-js
        const jsonData = await import(`../data/${language.code}-${Language.English.code}.json`)

        const cardDataEntries = []
        for (let i = 0; i < jsonData.length; i++) {
            // Example of entry {"i":12,"w":"Brittannien","t":["Britain","Great Britain"]}
            const entry = jsonData[i]
            const { /*i , */ w = '', t = [] } = entry
            const word = w
            const usage = '' // TODO : Add usage somehow
            const translation = t[0]
            const synonyms = t.slice(1)
            const definition = synonyms.length > 0 ? `Synonyms: ${synonyms.join(' , ')}` : ''

            const cardData = new CardData({ word, usage, translation, definition })
            cardDataEntries.push(cardData)
        }

        const cardDataDeck = new CardDeck(cardDataEntries);
        CARD_DATA_DECK_CACHE[language] = cardDataDeck
        return cardDataDeck
    }
}
