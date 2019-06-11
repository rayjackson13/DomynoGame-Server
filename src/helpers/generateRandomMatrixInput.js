import Grid from '../logic/grid'

const generateRandomMatrixInput = () => {
    const width = 4//Math.floor(Math.random() * 3) + 3
    const height = 3//Math.floor(Math.random() * 3) + 3
    const grid = new Grid(width, height)
    grid.setItem({ x: 1, y: 1 })
    grid.setItem({ x: 1, y: 2 })
    return grid
}

export default generateRandomMatrixInput