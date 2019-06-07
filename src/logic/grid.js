class Grid {
    constructor(w, h) {
        if (typeof w === 'number' && typeof h === 'number') {
            this.width = w
            this.height = h
            this.setGridMatrix()
        }
    }

    setGridMatrix = () => {
        const { width, height } = this
        this.grid = new Array(width)
        for (let i = 0; i < width; i++) {
            this.grid[i] = new Array(height)
            for (let j = 0; j < height; j++) {
                this.grid[i][j] = 0
            }
        }
    }

    getSize = () => {
        const { width, height } = this
        return { width, height }
    }

    setItem = ({x, y}) => {
        this.grid[y][x] = 1
    }

    getItem = ({x, y}) => {
        return this.grid[y][x]
    }

    getGrid = () => {
        return this.grid
    }

    checkMoves = () => {
        const { width, height } = this.getSize()
        for (let i = 0; i < width - 1; i++) {
            for (let j = 0; j < height - 1; j++) {
                if (!this.getItem({ x: j, y: i }) && !this.getItem({ x: j + 1, y: i })) {
                    return true
                }
                if (!this.getItem({ x: j, y: i }) && !this.getItem({ x: j, y: i + 1 })) {
                    return true
                }
            }
        }
        return false
    }
}

export default Grid