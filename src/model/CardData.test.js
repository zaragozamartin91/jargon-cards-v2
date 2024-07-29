import CardData from "./CardData"

describe('Card Data test', () => {
    test('Undefined fields are returned as empty strings', () => {
        // create a random instance of cardData
        const cardData = new CardData({
            word: 'test',
            //usage field intentionally left undefined
            translation: 'test',
            definition: 'test'
        })
        
        expect(cardData.usage).toBe('')
    })
})
