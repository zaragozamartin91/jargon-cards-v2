import UniqueSequence from "./UniqueSequence"

describe('UniqueSequence model test', () => {
    test('Cannot create sequence of larger size than original list', () => {
        const items = [1, 2, 3, 4, 5]
        const sequenceSize = items.length + 1
        expect(() => new UniqueSequence(items, sequenceSize)).toThrow('Not enough items')
    })

    test('Sequence of empty list results in empty list', () => {
        const sequence = new UniqueSequence([])
        expect(sequence.unique().items).toEqual([])
    })

    test('Apply gets the specified elements of the given list', () => {
        const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const sequenceSize = Math.floor(items.length / 2)
        const sequence = new UniqueSequence(items).slice(sequenceSize)

        const uniqueSequenceItems = sequence.unique().items
        const overlappingElements = items.filter(i => uniqueSequenceItems.includes(i))

        expect(uniqueSequenceItems.length).toBe(sequenceSize) // Sequence is of specified size
        expect(overlappingElements.length).toBe(sequenceSize) // Sequence holds elements of original array
        expect(new Set(uniqueSequenceItems)).toEqual(new Set(overlappingElements)) // Sequence holds overlapping elements
        expect(new Set(uniqueSequenceItems).size).toBe(sequenceSize) // Sequence holds unique elements
    })
})
