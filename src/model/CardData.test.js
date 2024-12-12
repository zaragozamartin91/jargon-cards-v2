import CardData from "./CardData"

describe('Card Data test', () => {
    test('Undefined fields are returned as empty strings', () => {
        // create a random instance of cardData
        const cardData = new CardData({
            word: 'bättre',
            //example field intentionally left undefined
            translations: ['better'],
            definition: 'test'
        })
        
        expect(cardData.example).toBe('')
    })

    test('mainTranslation returns the first translation or empty if undefined', () => {
        // create a random instance of cardData
        const cardData = new CardData({
            word: 'erbjuda',
            definition: 'säga sig vilja ge, ha att ge',
            translations: ['offer'],
        })
        
        expect(cardData.mainTranslation).toBe('offer')
    })

    
    test('otherTranslations return the rest of the translations', () => {
        // create a random instance of cardData
        const cardData = new CardData({
            word: 'gedigen',
            definition: 'ren, äkta',
            translations: [
                "solid (of metals)",
                "genuine"
            ],
        })
        
        expect(cardData.mainTranslation).toBe('solid (of metals)')
        expect(cardData.otherTranslations).toEqual(['genuine'])
    })
})
