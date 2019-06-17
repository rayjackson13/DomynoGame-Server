import * as tf from '@tensorflow/tfjs'
import generateRandomMatrixInput from '../helpers/generateRandomMatrixInput'

class Model {
    constructor() {
        this.model = tf.sequential()
    }

    addLayer({ units, batchInputShape }) {
        this.model.add(tf.layers.dense({ 
            units, 
            batchInputShape,
            activation: 'sigmoid'
        }))
    }

    compile = () => {
        this.model.compile({
            loss: 'meanSquaredError',
            optimizer: 'sgd'
        })
    }

    train = async(callback) => {
        for (let i = 1; i < 10; i++) {
            const grid = generateRandomMatrixInput()
            const move = grid.getMoves()
            // console.log(grid)
            const xs = tf.tensor2d(grid.getGrid())
            // console.log(move.position.x, move.position.y, move.vertical ? 1 : 0)
            const ys = tf.tensor1d([ move.position.x, move.position.y, move.vertical ? 1 : 0 ])
            const h = await this.model.fit(xs, ys, {
                batchSize: 4,
                epochs: 3
            })
            // console.log(h.history.loss[0])
        }
        callback && callback()
    }

    predict = (tensor) => {
        const result = this.model.predict(tensor)
        result.print()
        return result
    }
}

export default Model


// model = tf.sequential()
// model.add(tf.layers.dense({ 
//     units: 1, 
//     batchInputShape: [ 3, 4 ],
//     activation: 'sigmoid'
// }))
// model.compile({
//     loss: 'meanSquaredError',
//     optimizer: 'sgd'
// })
// // train the model
// for (let i = 1; i < 10; i++) {
//     const grid = generateRandomMatrixInput()
//     const move = grid.getMoves()
//     console.log(grid)
//     const xs = tf.tensor2d(grid.getGrid())
//     const ys = tf.tensor1d([ move.position.x, move.position.y, move.vertical ? 1 : 0 ])
//     model.fit(xs, ys, {
//         // batchSize: 4,
//         // epochs: 3
//     }).then((h) => console.log(h.history.loss[0]))
// }