export default class CardTag {
    /** @type{string} */ _key
    /** @type{string} */ _value


    get key() {
        return this._key
    }

    get value() {
        return this._value
    }

    /**
     * @param {{key: string, value: string}} KeyValuePair 
     */
    constructor({ key, value }) {
        this._key = key
        this._value = value
    }


    /**
     * @param {{key: string, value: string}} KeyValuePair 
     * @returns True if key value matches
     */
    matches({ key, value }) {
        return this._key == key && this._value == value
    }
}