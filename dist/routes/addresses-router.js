"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressesRouter = void 0;
const express_1 = require("express");
const addresses = [{ id: 1, value: 'Okeanskaya 67' }, { id: 2, value: 'Avilova 54' }];
exports.addressesRouter = (0, express_1.Router)({});
exports.addressesRouter.get('/', (req, res) => {
    res.send(addresses);
});
exports.addressesRouter.get('/:id', (req, res) => {
    let address = addresses.find(el => el.id === +req.params.id);
    if (address) {
        res.send(address);
    }
    else {
        res.sendStatus(404);
    }
});
