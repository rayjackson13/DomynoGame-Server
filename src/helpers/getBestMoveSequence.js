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

const getBestMove = moves => {
    const bestNode = getBestNode(moves)

    return bestNode
}

const getBestNode = moves => {
    const { bestNode } = arrayMinDepth(moves)

    if (!bestNode) {
        return
    }

    if (!bestNode.furtherMoves || !bestNode.furtherMoves.length) {
        return bestNode
    }

    let currentChildren = bestNode.furtherMoves.splice(0, bestNode.furtherMoves.length)
    bestNode.furtherMoves = [ getBestNode(currentChildren) ]
    return bestNode
}

const minimumDepth = root => {
    if (!root) {
        return 0
    }

    if (!root.furtherMoves.length) {
        return 1
    }

    let childrenDepths = []
    for (let node of root.furtherMoves) {
        childrenDepths.push(minimumDepth(node))
    }

    return Math.min(...childrenDepths) + 1
}

const arrayMinDepth = array => {
    let minDepth = Infinity
    let bestNode
    for (let tree of array) {
        const treeDepth = minimumDepth(tree)
        if (treeDepth < minDepth) {
            minDepth = treeDepth
            bestNode = tree
        }
    }
    return { minDepth, bestNode }
}

export default getBestMoveSequence