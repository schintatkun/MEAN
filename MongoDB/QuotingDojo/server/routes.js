
const bp = require('body-parser');
const controller = require('./controllers');
module.exports = function(app){
    app.set('views', __dirname + '/views'); 
    app.set('view engine', "ejs");
    app.use(bp.urlencoded({extended:true}))

    app.get('/',controller.index)
    app.get('/quotes', controller.getAll)
    app.post('/quotes', controller.createQuote)

    return app;
}