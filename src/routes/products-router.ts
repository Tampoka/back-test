import {Request, Response, Router} from 'express';
import {productsRepo} from '../repositories/products-repo';
import {body, validationResult} from 'express-validator';
import {inputValidationMiddleware} from '../middleware/input-validation-middleware';

export const productsRouter = Router({})

productsRouter.get('/', (req: Request, res: Response) => {
    const searchTerm = req.query.title?.toString()
    const result = productsRepo.findProducts(searchTerm)
    if (result) {
        res.send(result)
    } else {
        res.sendStatus(404)
    }
})
productsRouter.delete('/:id', (req: Request, res: Response) => {
    let result = productsRepo.deleteProduct(+req.params.id);
    if (result) {
        res.sendStatus(200)
    } else {
        res.sendStatus(404)
    }
})
let titleValidation = body('title').trim().isLength({
    min: 3,
    max: 10
}).withMessage('Title should be from 3 to 10 symbols');

productsRouter.post('/', titleValidation, inputValidationMiddleware,
    (req: Request, res: Response) => {

        const result = productsRepo.createProduct(req.body.title)
        return res.status(201).send(result)
        // if (result) {
        //     res.status(201).send(result)
        // } else {
        //     res.sendStatus(404)
        // }
    })
productsRouter.put('/:id', titleValidation, inputValidationMiddleware, (req: Request, res: Response) => {
    const result = productsRepo.updateProduct(+req.params.id, req.body.title)
    if (result) {
        res.send(result)
    } else {
        res.sendStatus(404)
    }
})
productsRouter.get('/:id', (req: Request, res: Response) => {
    const result = productsRepo.findProduct(+req.params.id)
    if (result) {
        res.send(result)
    } else {
        res.sendStatus(404)
    }
})
