
/**
 * Returns a generator that yields unique random numbers between 0 (inclusive) and maxValue (exclusive).
 * More on generator functions here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators#generator_functions
 * 
 * @param {number} maxValue - The maximum value (exclusive) that can be generated.
 * @returns {Generator} - A generator that yields unique random numbers between 0 (inclusive) and maxValue (exclusive).
 */
function* uniqueGenerator(maxValue) {
    const set = new Set()

    while (true) {
        const value = Math.floor(Math.random() * maxValue)
        if (!set.has(value)) {
            set.add(value)
            yield value
        }
    }
}

export default class Sequence {
    /**
     * @constructor
     * @param {Generator<number, number, unknown>} numberGenerator - a generator function that yields numbers
     */
    constructor(numberGenerator) {
        this.numberGenerator = numberGenerator
    }

    static unique(maxValue) {
        const generator = uniqueGenerator(maxValue)
        return new Sequence(generator)
    }

    /**
     * Apply the sequence to the given elements
     *
     * @param {Array} elements - Array of elements to apply the sequence to
     *
     * @example
     * const sequence = new Sequence([1, 0, 2])
     * const elements = [10, 20, 30, 40, 50]
     * console.log(sequence.apply(elements)) // [20, 10, 40]
     */
    apply(elements, count) {
        if (count > elements.length) throw new Error('Not enough elements')

        const result = []
        const iterator = this.numberGenerator
        for (let i = 0; i < count; i++) result.push(elements[iterator.next().value])

        return result
    }
}