import SymmetryBot from './SymmetryBot'

class HorizontalBot extends SymmetryBot {
    constructor(game) {
        super(game)
    }

    makeMove() {
        const { game } = this
        const moves = game.getMoves()
        const { width } = game.getGrid().getSize()
        const { position: lastPos, vertical } = moves[moves.length - 1]
        const position = {
            x: vertical 
                ? width - lastPos.x - 1 
                : width - lastPos.x - 2,
            y: lastPos.y
        }
        
        return {
            position,
            vertical
        }
    }
}

export default HorizontalBot