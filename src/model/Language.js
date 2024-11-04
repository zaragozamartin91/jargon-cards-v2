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
}