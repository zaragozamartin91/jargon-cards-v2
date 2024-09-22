// eslint-disable-next-line
import CardData from "./CardData"
import Sequence from '../model/Sequence'

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
     * @returns New shuffle deck of size 'count'
     */
    sliceAndShuffle(count) {
        const sequence = Sequence.unique(this.length)
        const shuffledItems = sequence.apply(this.cardDataItems, count)
        return new CardDeck(shuffledItems)
    }
}
