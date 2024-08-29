import Sequence from "./Sequence"

function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i;
    }
    return iterationCount;
}


describe('Sequence model test', () => {
    test('Apply gets the specified elements of the given list', () => {
        const generator = makeRangeIterator()
        const sequence = new Sequence(generator)
        const elements = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

        expect(sequence.apply(elements, 4)).toEqual(['a', 'b', 'c', 'd'])
    })

    test('Test generator function logic', () => {
        const generator1 = makeRangeIterator(0, 10, 2)
        expect([...generator1]).toEqual([0, 2, 4, 6, 8])

        const generator2 = makeRangeIterator(0,2,1)
        expect(generator2.next()).toEqual({ value: 0, done: false })
        expect(generator2.next()).toEqual({ value: 1, done: false })
        expect(generator2.next()).toEqual({ value: 2, done: true })
        expect(generator2.next()).toEqual({ value: undefined, done: true }) // exhausted generator
    })
})
