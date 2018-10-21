const bp = require('body-parser');
const api = require('./controller');

module.exports = function(app){
    app.use(bp.json())
    app.get('/authors', api.getAllAuthors)
    app.post('/authors',api.createAuthor)
    app.get('/authors/:author_id', api.getOneAuthor)
    app.put('/authors/:author_id', api.updateAuthor)
    app.post('/quotes', api.createQuote)
    app.patch('/quotes/:quote_id',api.updateQuote)
    app.delete('/quotes/:quote_id',api.deleteQuote)

    return app
}