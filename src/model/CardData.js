export default class CardData {
    /** @type {string} */   word
    /** @type {string} */   definition
    /** @type {string[]} */ synonyms
    /** @type {string} */   example
    /** @type {string[]} */ translations
    /** @type {string} */   definitionTranslation
    /** @type {string} */   exampleTranslation


    /**
     * Creates a card data item
     * @prop {string} word
     * @prop {string} definition
     * @prop {string[]} synonyms
     * @prop {string} example
     * @prop {string[]} translations
     * @prop {string} definitionTranslation
     * @prop {string} exampleTranslation
     */
    constructor({
        word = '',
        definition = '',
        synonyms = [],
        example = '',
        translations = [],
        definitionTranslation = '',
        exampleTranslation = '',
    }) {

        this.word = word ?? ''
        this.definition = definition ?? ''
        this.synonyms = synonyms ?? []
        this.example = example ?? ''
        this.translations = translations ?? []
        this.definitionTranslation = definitionTranslation ?? ''
        this.exampleTranslation = exampleTranslation ?? ''

    }

    static empty() {
        return new CardData({})
    }

    get mainTranslation() {
        return this.translations?.[0] ?? ''
    }

    get otherTranslations() {
        return this.translations?.slice(1) ?? []
    }
}