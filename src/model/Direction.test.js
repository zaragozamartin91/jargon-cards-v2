import Direction from "./Direction"

describe('Direction test', () => {
    test('fromString creates direction from string', () => {
        expect(Direction.fromString('up')).toBe(Direction.Up)
        expect(Direction.fromString('down')).toBe(Direction.Down)
        expect(Direction.fromString('left')).toBe(Direction.Left)
        expect(Direction.fromString('right')).toBe(Direction.Right)
        expect(Direction.fromString('none')).toBe(Direction.None)
        expect(Direction.fromString()).toBe(Direction.None)
        expect(Direction.fromString(null)).toBe(Direction.None)
        expect(Direction.fromString(undefined)).toBe(Direction.None)
        expect(Direction.fromString('')).toBe(Direction.None)
    })
})
