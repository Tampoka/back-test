"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = require("express");
const products_repo_1 = require("../repositories/products-repo");
exports.productsRouter = (0, express_1.Router)({});
exports.productsRouter.get('/', (req, res) => {
    var _a;
    const searchTerm = (_a = req.query.title) === null || _a === void 0 ? void 0 : _a.toString();
    const result = products_repo_1.productsRepo.findProducts(searchTerm);
    if (result) {
        res.send(result);
    }
    else {
        res.sendStatus(404);
    }
});
exports.productsRouter.delete('/:id', (req, res) => {
    let result = products_repo_1.productsRepo.deleteProduct(+req.params.id);
    if (result) {
        res.sendStatus(200);
    }
    else {
        res.sendStatus(404);
    }
});
exports.productsRouter.post('/', (req, res) => {
    const result = products_repo_1.productsRepo.createProduct(req.body.title);
    if (result) {
        res.status(201).send(result);
    }
    else {
        res.sendStatus(404);
    }
});
exports.productsRouter.put('/:id', (req, res) => {
    const result = products_repo_1.productsRepo.updateProduct(+req.params.id, req.body.title);
    if (result) {
        res.send(result);
    }
    else {
        res.sendStatus(404);
    }
});
exports.productsRouter.get('/:id', (req, res) => {
    const result = products_repo_1.productsRepo.findProduct(+req.params.id);
    if (result) {
        res.send(result);
    }
    else {
        res.sendStatus(404);
    }
});
