import * as tf from '@tensorflow/tfjs'
import Game from '../logic/game'
import Model from '../logic/model'
let game

export const handleGame = (app) => {
    app.post('/game', (req, res) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        const { name: playerName, width, height } = req.body
        try {
            game = new Game()
            if (!playerName || !playerName.length) {
                throw {
                    message: 'Player name should be provided and should not be empty.'
                }
            }
            game.addPlayer(playerName)
            if (!width || !height) {
                throw {
                    message: 'Please specify the width and the height of the field.'
                }
            }
            if (width < 3 || width > 50 || height < 3 || height > 50) {
                throw {
                    message: 'The size of the field is either too small or too large.'
                }
            }
            game.start(width, height)
            return res.status(200).send({
                msg: 'Game started. Grid initialized.',
                grid: game.getGrid(),
                players: game.getPlayers()
            })
        } catch (e) {
            return res.status(400).send({
                msg: e.message
            })
        }
    })
    
    app.get('/game', (req, res) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        // retrieve game identifier
        if (game) {
            return res.status(200).send(`Game identifier: ${ game.id }`)
        }
        return res.status(400).send('No game initialized yet.')
    })

    app.get('/game/players', (req, res) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        //get players in the game
        if (game) {
            return res.status(200).send(game.getPlayers())
        }
        return res.status(400).send('No game initialized yet.')
    })

    app.get('/grid', (req, res) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        // get the grid properties.
        const grid = game ? game.getGrid() : null
        if (!grid) {
            return res.status(400).send('No grid specified.')
        }
        const { x, y } = req.query
        if (x && y) {
            return res.status(200).send({ 
                item: grid.getItem({ x: Number(x), y: Number(y) })
            })
        }
        return res.status(200).send({
            size: grid.getSize(),
            grid
        })
    })

    app.post('/game/domino', ({ body }, res) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        try {
            const { full, grid } = game.putDomino(body)
            game.addMove(body)
            if (full) {
                throw {
                    status: 200,
                    message: 'Game\'s over!',
                    grid: grid
                }
            }
            const aiMove = game.getPossibleMoves()
            aiMove.idPlayer = -1
            const { grid: newGrid, full: isFinished } = game.putDomino(aiMove)
            game.addMove(aiMove)

            return res.status(200).send({
                msg: isFinished ? 'Game\'s over!' : 'Success.',
                grid: newGrid
            })
        } catch ({ status = 400, message, grid }) {
            console.error({ status, message, grid })
            return res.status(status).send({
                msg: message,
                grid: grid
            })
        }
    }) 

    // app.post('/game/ai', () => {
    //     const model = new Model()
    //     model.addLayer({ units: 1, batchInputShape: [ 3, 4 ] })
    //     model.compile()
    //     model.train(() => {
    //         model.predict(tf.tensor2d(game.getGrid().getGrid()))
    //     })
    // })
}