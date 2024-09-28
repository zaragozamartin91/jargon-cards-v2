
// TODO : rewrite to use  Fisher–Yates (aka Knuth) Shuffle
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export default class UniqueSequence {
    items = []
    size = 0

    /**
     * @param {Array} items Base items
     * @param {number} size Expected sequence size
     */
    constructor(items = [], size = items.length) {
        if (size > items.length) { throw new Error('Not enough items') }

        this.items = items
        this.size = size
    }

    slice(newSize) {
        return new UniqueSequence(this.items, newSize)
    }

    unique() {
        if (this.items.length === 0) { return new UniqueSequence() }

        // Copy this.items array
        const items = this.items.slice()
        const newItems = []

        for (let i = this.items.length; i > 0 && newItems.length < this.size; i--) {
            const index = Math.floor(Math.random() * i)
            const newItem = items.splice(index, 1)[0]
            newItems.push(newItem)
        }

        return new UniqueSequence(newItems, this.size)
    }
}