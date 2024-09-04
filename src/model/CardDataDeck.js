// eslint-disable-next-line
import CardData from "./CardData"

export default class CardDataDeck {
    cardDataItems = []

    /**
     * Creates a card data deck
     * @param {CardData[]} cardDataItems 
     */
    constructor(cardDataItems) {
        this.cardDataItems = cardDataItems
    }

    static empty() {
        return new CardDataDeck([])
    }

    get length() {
        return this.cardDataItems.length
    }
}
