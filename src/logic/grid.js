import getMoveSequences from '../helpers/getMoveSequence'
import getBestMove from '../helpers/getBestMove'

class Grid {
    constructor(w, h, options) {
        if (typeof w === 'number' && typeof h === 'number') {
            this.width = w
            this.height = h
            this.grid = options && options.grid 
                ? options.grid 
                : this.setGridMatrix()
        }
    }

    copy = () => {
        const { width, height, grid } = this
        const gridCopy = new Array(height)
        for (let i = 0; i < height; i++) {
            gridCopy[i] = new Array(width)
            for (let j = 0; j < width; j++) {
                gridCopy[i][j] = grid[i][j]
            }
        }

        return new Grid(width, height, {
            grid: gridCopy
        })
    }

    setGridMatrix = () => {
        const { width, height } = this
        const grid = new Array(height)
        for (let i = 0; i < height; i++) {
            grid[i] = new Array(width)
            for (let j = 0; j < width; j++) {
                grid[i][j] = 0
            }
        }
        // console.log(`Grid initiated.\n${ grid }`)
        return grid
    }

    getSize = () => {
        const { width, height } = this
        return { width, height }
    }

    setItem = ({ x, y }, value = 1) => {
        this.grid[y][x] = value === 0 ? 1 : value
    }

    getItem = ({ x, y }) => {
        return this.grid[y][x]
    }

    getGrid = () => {
        return this.grid
    }

    checkMoves = () => {
        const { width, height } = this.getSize()
        // console.log(this.getGrid())
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                if (j < width - 1 && !this.getItem({ x: j, y: i }) && !this.getItem({ x: j + 1, y: i })) {
                    return true
                }
                if (i < height - 1 && !this.getItem({ x: j, y: i }) && !this.getItem({ x: j, y: i + 1 })) {
                    return true
                }
            }
        }
        return false
    }

    getMoves = () => {
        const moves = []
        const moveSequences = getMoveSequences({
            grid: this.copy(),
            moves
        })
        const bestMove = getBestMove(moveSequences)
        return bestMove
    }

    countFurtherMoves = () => {
        let result = 0
        const grid = this.copy()
        const { width, height } = grid.getSize()
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                if (j < width - 1 && !grid.getItem({ x: j, y: i }) && !grid.getItem({ x: j + 1, y: i })) {
                    grid.setItem({ x: j, y: i })
                    grid.setItem({ x: j + 1, y: i })
                    result++
                }
                if (i < height - 1 && !grid.getItem({ x: j, y: i }) && !grid.getItem({ x: j, y: i + 1 })) {
                    grid.setItem({ x: j, y: i })
                    grid.setItem({ x: j, y: i + 1 })
                    result++
                }
            }
        }
        return result
    }

    print = () => {
        console.log('Grid: [')
        for (let row of this.grid) {
            console.log(`[ ${ row } ]`)
        }
        console.log('].')
    }
}

export default Grid