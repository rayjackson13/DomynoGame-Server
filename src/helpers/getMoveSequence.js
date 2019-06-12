/**
 * Get an array of all possible moves
 */
const getMoveSequences = ({ grid, aiMove = false }) => {
    const moves = []
    if (!grid.checkMoves()) {
        return moves
    }
    const { width, height } = grid.getSize()
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {            
            if (j < width - 1 && !grid.getItem({ x: j, y: i }) && !grid.getItem({ x: j + 1, y: i })) {
                const copyGrid = grid.copy()
                copyGrid.setItem({ x: j, y: i })
                copyGrid.setItem({ x: j + 1, y: i })
                moves.push({
                    position: { x: j, y: i },
                    vertical: false,
                    grid: copyGrid,
                    aiMove
                })
            }
            if (i < height - 1 && !grid.getItem({ x: j, y: i }) && !grid.getItem({ x: j, y: i + 1 })) {
                const copyGrid = grid.copy()
                copyGrid.setItem({ x: j, y: i })
                copyGrid.setItem({ x: j, y: i + 1 })
                moves.push({
                    position: { x: j, y: i },
                    vertical: true,
                    grid: copyGrid,
                    aiMove
                })
            }
        }
    }
    return moves
}

export default getMoveSequences