import express, {NextFunction, Request, Response} from 'express'
import {productsRouter} from './routes/products-router';
import {addressesRouter} from './routes/addresses-router';

const app = express()
const port = process.env.PORT || 3010
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
let requestCounter = 0
let blablaMiddleware = (req: Request, res: Response, next: NextFunction) => {
    //@ts-ignore
    req.blabla = "KUKU"
    next()
};
let authGuardMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (req.query.token === '123') {
        next()
    } else {
        res.send(401)
    }
};
let requestCounterdMiddleware = (req: Request, res: Response, next: NextFunction) => {
    requestCounter++
    next()
};
app.use(blablaMiddleware)
app.use(requestCounterdMiddleware)
app.use(authGuardMiddleware)
app.get('/kuku', (req: Request, res: Response) => {
    //@ts-ignore
    const blabla = req.blabla
    res.send({value: blabla + '!!!' + requestCounter})
})


app.use('/products', productsRouter)
app.use('/addresses', addressesRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})