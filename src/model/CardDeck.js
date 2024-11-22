// eslint-disable-next-line
import CardData from "./CardData"
import UniqueSequence from "./UniqueSequence"

export default class CardDeck {
    /** @type {CardData[]} */ cardDataItems = []

    /**
     * Creates a card data deck
     * @param {CardData[]} cardDataItems 
     */
    constructor(cardDataItems) {
        this.cardDataItems = cardDataItems
    }

    static empty() {
        return new CardDeck([])
    }

    get length() {
        return this.cardDataItems.length
    }

    /**
     * Slices and shuffles a deck
     * @param {number} count Number of items to slice and shuffle
     * @returns {CardDeck} New shuffle deck of size 'count'
     */
    sliceAndShuffle(count) {
        const sequence = new UniqueSequence(this.cardDataItems, count)
        const shuffledItems = sequence.unique().items
        return new CardDeck(shuffledItems)
    }
}
