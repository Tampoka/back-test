"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRepo = void 0;
const products = [{ id: 1, title: 'tomato' }, { id: 2, title: 'orange' }];
exports.productsRepo = {
    findProducts(searchTerm) {
        if (searchTerm) {
            const foundProducts = products.filter(el => el.title.indexOf(searchTerm) > -1);
            if (foundProducts.length > 0) {
                return foundProducts;
            }
            else {
                return false;
            }
        }
        else
            return products;
    },
    findProduct(id) {
        const product = products.find(el => el.id === id);
        if (product) {
            return product;
        }
        else {
            // res.send('No products with this title')
            return false;
        }
    },
    deleteProduct(id) {
        let index = products.findIndex(el => el.id === id);
        if (index > -1) {
            products.splice(index, 1);
            return true;
        }
        else {
            return false;
        }
    },
    updateProduct(id, title) {
        let product = products.find(el => el.id === id);
        if (product) {
            product.title = title;
            return product;
        }
        else {
            return false;
        }
    },
    createProduct(title) {
        if (title) {
            let newProduct = { id: Date.now(), title };
            products.push(newProduct);
            return newProduct;
        }
        else {
            return false;
        }
    },
};
