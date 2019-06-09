import Game from '../logic/game'
let game

export const handleGame = (app) => {
    app.post('/game', (req, res) => {
        //add new game
        game = new Game()
        res.status(200).send(`OK. Game identifier: ${ game.id }`)
    })

    app.get('/game', (req, res) => {
        // retrieve game identifier
        if (game) {
            return res.status(200).send(`Game identifier: ${ game.id }`)
        }
        return res.status(400).send('No game initialized yet.')
    })

    app.post('/game/players', (req, res) => {
        //add player to the game
        if (game) {
            const { name } = req.body
            if (name && name.length) {
                try {
                    const result = game.addPlayer(name)
                    return res.status(200).send(result)
                } catch (e) {
                    return res.status(400).send(e)
                }
            }
            return res.status(400).send('Player name is required.')
        }
        return res.status(400).send('No game initialized yet.')
    })

    app.get('/game/players', (req, res) => {
        //get players in the game
        if (game) {
            return res.status(200).send(game.getPlayers())
        }
        return res.status(400).send('No game initialized yet.')
    })

    app.post('/game/start', (req, res) => {
        //start the game
        if (game && game.getPlayers().length) {
            const { width, height } = req.body
            if (width && height) {
                game.start(width, height)
                return res.status(200).send({
                    msg: 'Game started. Grid initialized.',
                    grid: game.getGrid()
                })
            }
            return res.status(400).send({
                msg: 'Please specify the width and the height of the game field.'
            })
        }
        return res.status(400).send('Initialize the game first.')
    })

    app.get('/grid', (req, res) => {
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

    app.post('/grid/domino', ({ body }, res) => {
        // put a domino in position
        // const { position: { x, y }, idPlayer, vertical } = req.body
        try {
            const { grid, full } = game.putDomino(body)
            game.addMove(body)
            game.getPossibleMoves()
            return res.status(200).send({
                msg: full ? 'Bitch, it\'s over!' : 'Success.',
                grid: grid
            })
        } catch (e) {
            console.error(e)
            return res.status(400).send({
                msg: e.message
            })
        }
    }) 
}