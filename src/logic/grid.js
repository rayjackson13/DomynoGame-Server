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
        for (let i = 0; i <= width; i++) {
            this.grid[i] = new Array(height)
            for (let j = 0; j <= height; j++) {
                this.grid[i][j] = 0
            }
        }
    }

    getSize = () => {
        const { width, height } = this
        return { width, height }
    }

    setItem = ({x, y}) => {
        this.grid[x][y] = 1
    }

    getItem = ({x, y}) => {
        return this.grid[x][y]
    }

    getGrid = () => {
        return this.grid
    }
}

export default Grid