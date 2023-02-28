import {Request, Response, Router} from 'express';

const addresses = [{id: 1, value: 'Okeanskaya 67'}, {id: 2, value: 'Avilova 54'}]

export const addressesRouter = Router({})

addressesRouter.get('/', (req: Request, res: Response) => {
    res.send(addresses)
})
addressesRouter.get('/:id', (req: Request, res: Response) => {
    let address = addresses.find(el => el.id === +req.params.id)
    if (address) {
        res.send(address)
    } else {
        res.sendStatus(404)
    }
})