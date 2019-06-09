const getMoveSequence = ({ moves, grid, position, vertical = false, aiMove }) => {
    grid.print()
    console.log(position, vertical, aiMove, '\n')
    const furtherMoves = grid.getMoves()
    if (furtherMoves.length) {
        moves.push(furtherMoves)
    }
    return moves
}

export default getMoveSequence