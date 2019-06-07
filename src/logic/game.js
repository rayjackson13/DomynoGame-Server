import Player from './player'
import Grid from './grid'
import { MAX_PLAYERS } from '../helpers/errorMessages'

class Game {
    constructor() {
        this.id = 0
        this.moves = []
        this.isOver = false
        this.players = []
        this.grid = null
    }

    addPlayer = name => {
        const { players } = this
        if (players.length < 4) {
            const player = new Player(players.length, name)
            players.push(player)
            return player
        }
        throw MAX_PLAYERS
    }

    getPlayers = () => {
        return this.players
    }
    
    start = (width, height) => {
        this.grid = new Grid(width, height)
    }

    getGrid = () => {
        return this.grid
    }

    addMove = ({ position, idPlayer, vertical = false }) => {
        const player = this.players.filter(val => val && val.id === idPlayer)[0]
        this.moves.push({
            player,
            position,
            vertical
        })
    }

    putDomino = ({ position, idPlayer, vertical = false }) => {
        const grid = this.getGrid()
        const { width, height } = grid.getSize()
        const { x, y } = position

        // calculate the second position
        let secPos
        if (vertical) {
            secPos = y + 1 !== height ? { x, y: y + 1 } : { x, y: y - 1 }
        } else {
            secPos = x + 1 !== width ? { x: x + 1, y } : { x: x - 1, y }
        }
       
        // check if places are empty
        if (grid.getItem(position) || grid.getItem(secPos)) {
            throw new Error('Fuck you!')
        }

        grid.setItem(position)
        grid.setItem(secPos)

        // TODO: check if there are other possible combinations
        const gameEnded = !grid.checkMoves()
        return {
            grid: grid.getGrid(),
            full: gameEnded
        }
    }
}

export default Game