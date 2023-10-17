export default class JargonCard {
    /** @type{string} */ _front
    /** @type{string} */ _back
    /** @type{Array<CardTag>} */ _tags

    /**
     * @param {{front: string, back: string, tags: Array<CardTag>}} 
     */
    constructor({front, back, tags}) {
        this._front = front
        this._back = back
        this._tags = tags
    }

    
}