import SymmetryBot from './SymmetryBot'
import HorizontalBot from './HorizontalBot'

const BotFactory = (game) => {
    if (!game) {
        return
    }
    
    const { width, height } = game.getGrid().getSize()
    return new SymmetryBot(game)
}

export default BotFactory