const express = require('express');
const routes = require('./server/routes');
const app = routes(express());

//set static folder where angular index.html is
app.use(express.static( __dirname + '/public/dist/public' ));
app.listen(8000,(errs)=>errs?console.log(errs):console.log('Listening on port 8000'));