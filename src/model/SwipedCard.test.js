import SwipedCard from "./SwipedCard"
import Direction from "./Direction"
import CardData from "./CardData"

describe('SwipedCard test', () => {
    test('exhausted creates card with final card toggled on', () => {
        const card = new SwipedCard({
            swipeDirection: Direction.None,
            cardData: CardData.empty(),
            finalCard: false
        })

        expect(card.exhausted().finalCard).toBe(true)
    })

    test('swipedRight yields true if swipe direction is Right', () => {
        const card = new SwipedCard({
            swipeDirection: Direction.Right,
            cardData: CardData.empty(),
            finalCard: false
        })

        expect(card.swipedRight()).toBe(true)
    })

    test('Score tallies 1 if swiped right, 0 otherwise', () => {
        const cardSwipedRight = new SwipedCard({
            swipeDirection: Direction.Right,
            cardData: CardData.empty(),
            finalCard: false
        })

        expect(cardSwipedRight.score()).toBe(1)

        const cardSwipedLeft = new SwipedCard({
            swipeDirection: Direction.Left,
            cardData: CardData.empty(),
            finalCard: false
        })

        expect(cardSwipedLeft.score()).toBe(0)
    })

    test('Total score sums all swiped cards scores', () => {
        const swipedCards = [
            new SwipedCard({
                swipeDirection: Direction.Right,
                cardData: CardData.empty(),
                finalCard: false
            }),
            new SwipedCard({
                swipeDirection: Direction.Left,
                cardData: CardData.empty(),
                finalCard: false
            }),
            new SwipedCard({
                swipeDirection: Direction.Right,
                cardData: CardData.empty(),
                finalCard: false
            })
        ]

        const rightSwipes = swipedCards.filter(swipedCard => swipedCard.swipedRight())
        expect(SwipedCard.totalScore(swipedCards)).toBe(rightSwipes.length)
    })
})
