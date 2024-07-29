export default class CardData {
    /** @type{string} */ word 
    /** @type{string} */ usage 
    /** @type{string} */ translation
    /** @type{string} */ definition 

    /** @param {{word: string, usage: string, translation: string, definition: string}} */
    constructor({word, usage, translation, definition}) {
        this.word = word ?? ''
        this.usage = usage ?? ''
        this.translation = translation ?? ''
        this.definition = definition ?? ''
    }
}