import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { handleGame } from './modules/game'

const app = express()
app.use(bodyParser.json())
app.use(express.json())
const htmlFile = path.join(__dirname, 'template.html')

const PORT = 1700

app.get('/', (req, res) => { 
    console.log(`${ req.ip } ${req.method}: ${ req.path }`)
    res.sendFile(htmlFile)
})

handleGame(app)

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

app.listen(PORT)
// console.clear()
console.log('Server started on port %o.', PORT)