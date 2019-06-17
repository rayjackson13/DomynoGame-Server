const getBestMove = (moves) => {
    let bestCount = Infinity
    let bestMove
    for (let move of moves) {
        const { grid } = move
        const moveCount = grid.countFurtherMoves()
        if (moveCount % 2 === 0 && moveCount < bestCount) {
            bestCount = moveCount
            bestMove = move
        }
    }
    // console.log(bestMove, bestCount)
    if (!bestMove) {
        return moves[0]
    }
    return bestMove
}

export default getBestMove