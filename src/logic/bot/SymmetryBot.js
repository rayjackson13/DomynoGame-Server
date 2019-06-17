class SymmetryBot {
    constructor(game) {
        this.game = game
    }

    makeMove() {
        console.log('makeMove')
        const { game, symmetryMove, centerTouched } = this
        const moves = game.getMoves()
        const grid = game.getGrid()
        const { width, height } = grid.getSize()
        const { position: lastPos, vertical } = moves[moves.length - 1]
        console.log('centerTouched', centerTouched(grid, vertical, lastPos))
        if ((width % 2 === 0 && height % 2 === 0) || !centerTouched(grid, vertical, lastPos)) {
            return symmetryMove(vertical, lastPos, grid.getMoves)
        }
        return grid.getMoves()
    }

    centerTouched(grid, vertical, lastPos) {
        const { floor } = Math
        const { width, height } = grid.getSize()
        if (vertical) {
            if (lastPos.x === floor(width / 2)) {
                return lastPos.y === floor(height / 2) || lastPos.y + 1 === floor(height / 2)
            }
        }

        if (lastPos.y === floor(height / 2)) {
            return lastPos.x === floor(width / 2) || lastPos.x + 1 === floor(width / 2)
        }

        return false
    }

    isEmpty(grid, position, vertical) {
        const { x, y } = position

        if (grid.getItem(position)) {
            return false
        }

        if (vertical) {
            return !grid.getItem({ x, y: y + 1 })
        }

        return !grid.getItem({ x: x + 1, y })
    }

    symmetryMove = (vertical, lastPos, fallback) => {
        const grid = this.game.getGrid()
        const { width, height } = grid.getSize()
        const position = {
            x: vertical 
                ? width - lastPos.x - 1 
                : width - lastPos.x - 2,
            y: vertical
                ? height - lastPos.y - 2
                : height - lastPos.y - 1
        }

        if (this.isEmpty(grid, position, vertical)) {
            return {
                position,
                vertical
            }
        }
        
        return fallback()
    }
}

export default SymmetryBot
