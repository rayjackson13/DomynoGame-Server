const getBestMoveSequence = (moves) => {
    const winningMoves = moves.filter(val => isWinning(val))
    console.log('Winning moves:')
    console.table(winningMoves)

    const bestMove = getBestMove(winningMoves)
    console.log('Best move:', bestMove)
    return bestMove
}

const isWinning = ({ furtherMoves, aiMove }) => {
    // get to the last node of the tree
    
    if (furtherMoves && furtherMoves.length) {
        const filtered = furtherMoves.filter(val => isWinning(val))
        return filtered && filtered.length ? true : false
    }
    return aiMove
}

const getBestMove = (moves) => {
    let bestMove = JSON.parse(JSON.stringify(moves[0]))
    let node
    for (node = bestMove; node.furtherMoves.length; node = node.furtherMoves[0]) {
        node.furtherMoves = [ node.furtherMoves[0] ]
    }
    console.log(bestMove)
    return bestMove
}

export default getBestMoveSequence