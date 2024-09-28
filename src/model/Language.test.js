import Language from "./Language"

describe('Language test', () => {
    test('fromString creates Language from string', () => {
        expect(Language.fromString('swe')).toBe(Language.Swedish)
        expect(Language.fromString('eng')).toBe(Language.English)
        expect(Language.fromString('none')).toBe(Language.None)
        expect(Language.fromString('SWE')).toBe(Language.Swedish)
        expect(Language.fromString('ENG')).toBe(Language.English)
        expect(Language.fromString('NONE')).toBe(Language.None)
        expect(Language.fromString('')).toBe(Language.None)
        expect(Language.fromString(null)).toBe(Language.None)
    })

    test('isNone returns true if language is none', () => {
        expect(Language.None.isNone()).toBe(true)
    })
})
