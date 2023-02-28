const products = [{id: 1, title: 'tomato'}, {id: 2, title: 'orange'}]
export const productsRepo = {
    findProducts(searchTerm?: string) {
        if (searchTerm) {
            const foundProducts = products.filter(el => el.title.indexOf(searchTerm) > -1)
            if (foundProducts.length > 0) {
                return foundProducts
            } else {
                return false
            }
        } else return products
    },
    findProduct(id:number){
        const  product = products.find(el => el.id ===id)
        if (product) {
        return product
    } else {
        // res.send('No products with this title')
      return false
    }
    },
    deleteProduct(id: number) {
        let index = products.findIndex(el => el.id === id)
        if (index > -1) {
            products.splice(index, 1)
            return true
        } else {
            return false
        }
    },
    updateProduct(id: number, title: string) {
        let product = products.find(el => el.id === id)
        if (product) {
            product.title = title
            return product
        } else {
            return false
        }
    },
    createProduct(title: string) {
        if (title) {
            let newProduct = {id: Date.now(), title}
            products.push(newProduct)
            return newProduct
        } else {
            return false
        }
    },
}