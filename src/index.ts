import express, {Request, Response} from 'express'
import bodyParser from 'body-parser';
import {productsRouter} from './routes/products-router';
import {addressesRouter} from './routes/addresses-router';

const app = express()
const port = process.env.PORT || 3010
app.use(bodyParser())


app.use('/products', productsRouter)
app.use('/addresses', addressesRouter)
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})