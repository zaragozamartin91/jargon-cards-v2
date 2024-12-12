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
        // return await this.loadFreeDictFile(language)
        return await this.loadFolketsFile(language)
    }


    async loadFreeDictFile(language) {
        const jsonData = await import(`../data/${language.translationCode(Language.English)}-public.json`);

        const cardDataEntries = [];
        for (let i = 0; i < jsonData.length; i++) {
            // Example of entry {"i":12,"w":"Brittannien","t":["Britain","Great Britain"]}
            const entry = jsonData[i];
            const { /*i , */ w = '', t = [] } = entry;
            const word = w;
            const usage = ''; // TODO : Add usage somehow
            const translations = t;
            const synonyms = t.slice(1);
            const definition = synonyms.length > 0 ? `Synonyms: ${synonyms.join(' , ')}` : '';

            const cardData = new CardData({ word, usage, translations, definition });
            cardDataEntries.push(cardData);
        }

        const cardDataDeck = new CardDeck(cardDataEntries);
        CARD_DATA_DECK_CACHE[language] = cardDataDeck;
        return cardDataDeck;
    }

    async loadFolketsFile(language) {
        // For now its assumed that dest language is English
        const jsonData = await import(`../data/${language.translationCode(Language.English)}-folkets.json`);

        const cardDataEntries = [];
        for (let i = 0; i < jsonData.length; i++) {
            const entry = jsonData[i]
            const word = entry['w']
            const definition = entry['d']
            const synonyms = entry['s']
            const example = entry['e']
            const translations = entry['t']
            const definitionTranslation = entry['dt']
            const exampleTranslation = entry['et']

            const cardData = new CardData({
                word,
                definition,
                synonyms,
                example,
                translations,
                definitionTranslation,
                exampleTranslation
            })
            cardDataEntries.push(cardData)
        }

        const cardDataDeck = new CardDeck(cardDataEntries)
        CARD_DATA_DECK_CACHE[language] = cardDataDeck
        return cardDataDeck
    }

    /**
     * Loads a dummy card deck for testing purposes
     * @returns {Promise<CardDeck>} A promise that resolves to a CardDataDeck
     * @throws {Error} If the language is not supported
     */
    async loadDummy() {
        const cardDataEntries = []

        cardDataEntries.push(new CardData({
            word: 'fördömelse',
            usage: 'då jag är i samma fördömelse som du',
            translation: 'condemnation',
            definition: 'The act of condemning. The state of being condemned. Severe reproof; strong censure. A reason or occasion for condemning. The act of condemning or pronouncing to be wrong; censure; blame; disapprobation. Similar: censureblamedisapprobation The act of judicially condemning, or adjudging guilty, unfit for use, or forfeited; the act of dooming to punishment or forfeiture. The ground or reason of condemning.'
        }))

        cardDataEntries.push(new CardData({
            word: 'hjälte',
            usage: 'du är min hjälta',
            translation: 'hero',
            definition: 'In mythology and legend, a man, often of divine ancestry, who is endowed with great courage and strength, celebrated for his bold exploits, and favored by the gods.'
        }))

        const cardDataDeck = new CardDeck(cardDataEntries);
        return cardDataDeck
    }
}
