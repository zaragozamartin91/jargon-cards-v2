// Enum model from https://masteringjs.io/tutorials/fundamentals/enum
export default class Language {
    static Swedish = new Language('swedish', 'swe')
    static English = new Language('english', 'eng')
    static None = new Language('none')

    constructor(name, code = name) {
        this.name = name
        this.code = code
    }

    toString() {
        return `Language.${this.name}`
    }

    static fromString(language = 'none') {
        const lang = language || 'none'

        switch (lang.toLowerCase()) {
            case 'swe':
            case 'swedish': return Language.Swedish
            case 'eng': return Language.English
            default: return Language.None
        }
    }

    isNone() {
        return this === Language.None
    }

    /**
     * Generates a translation code string by combining the language code of the current instance
     * with the language code of another Language instance.
     *
     * @param {Language} other - The other Language instance whose code will be combined.
     * @returns {string} A string in the format "code1-code2", where code1 is the code of the
     *                   current instance and code2 is the code of the other instance.
     */
    translationCode(other) {
        return `${this.code}-${other.code}`
    }
}
