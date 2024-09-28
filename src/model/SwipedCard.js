import CardData from "./CardData"
import Direction from "./Direction"

export default class SwipedCard {
    swipeDirection = Direction.None
    cardData = CardData.empty()
    finalCard = false

    constructor({ swipeDirection = Direction.None, cardData = CardData.empty(), finalCard = false }) {
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

    swipedRight() {
        return this.swipeDirection === Direction.Right
    }

    score() {
        return this.swipedRight() ? 1 : 0
    }

    /**
     * Computes total score for a collection of swiped cards.
     * @param {SwipedCard[]} swipedCards Swiped cards
     * @returns 
     */
    static totalScore(swipedCards) {
        return swipedCards.map(swipedCard => swipedCard.score()).reduce((acc, score) => acc + score, 0)
    }
}
