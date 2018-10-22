const bp = require('body-parser');
const api = require('./controller');

module.exports = function(app){
    app.use(bp.json())
    app.get('/api/products', api.getAllProducts)
    app.post('/api/products',api.createProduct)
    app.get('/api/products/:product_id', api.getOneProduct)
    app.put('/api/products/:product_id', api.updateProduct)
    // app.post('/quotes', api.createQuote)
    // app.patch('/quotes/:quote_id',api.updateQuote)
    app.delete('/api/products/:product_id',api.deleteProduct)

    return app
}