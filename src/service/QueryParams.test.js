import QueryParams from "./QueryParams"

describe('Query params test suite', () => {
    test('Query params should be parsed from URL', () => {
        const queryParams = new QueryParams('https://example.com?word=word&def=def&usage=usage')

        expect(queryParams.searchParams).toEqual({ word: 'word', def: 'def', usage: 'usage' })
    })

    test('Query params load no data if no query params available', () => {
        const queryParams = new QueryParams('https://example.com')

        expect(queryParams.searchParams).toEqual({})
    })
})
