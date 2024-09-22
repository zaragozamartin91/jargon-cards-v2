// eslint-disable-next-line
import CardData from "./CardData"

export default class CardDeck {
    cardDataItems = []

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
}
