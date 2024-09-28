// Enum model from https://masteringjs.io/tutorials/fundamentals/enum
export default class Direction {
    static Up = new Direction('up')
    static Down = new Direction('down')
    static Left = new Direction('left')
    static Right = new Direction('right')
    static None = new Direction('none')

    constructor(name) {
        this.name = name
    }
    toString() {
        return `Direction.${this.name}`
    }

    static fromString(direction = 'none') {
        const d = direction || 'none'

        switch (d) {
            case 'up': return Direction.Up
            case 'down': return Direction.Down
            case 'left': return Direction.Left
            case 'right': return Direction.Right
            default: return Direction.None
        }
    }
}
