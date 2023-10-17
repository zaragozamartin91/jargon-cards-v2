import CardTag from "./CardTag"

describe('Card Tag test', () => {
    test('matches yields true on matching key value pairs', () => {
        const key = 'foo'
        const value = 'bar'
        const cardTag = new CardTag({ key, value })
        
        expect(cardTag.matches({key, value})).toBeTruthy()
    })
})