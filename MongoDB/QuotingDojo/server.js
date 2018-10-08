//require express module
const express = require('express');
const routes= require('./server/routes');
const app = routes(express());

app.listen(8000, (errs)=>errs?console.log(errs):console.log('listening on port 8000'));