import CardData from "./CardData"

export default class SwipedCard {
    swipeDirection = ''
    cardData = CardData.empty()
    finalCard = false

    constructor({ swipeDirection = '', cardData = CardData.empty(), finalCard = false }) {
        this.swipeDirection = swipeDirection
        this.cardData = cardData
        this.finalCard = finalCard
    }

    exhausted() {
        return new SwipedCard({
            swipeDirection: this.swipeDirection,
            cardData: this.cardData,
            finalCard: true
        })
    }
}
