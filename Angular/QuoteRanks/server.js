const express = require('express');
const routes = require('./server/routes');
const path = require('path');

const app = routes(express());
app.use(express.static(__dirname + "/public/dist/public"))
app.all("*", (req,res,next)=>{
    res.sendFile(path.resolve("./public/dist/index.html"))
})
app.listen(8000, errs=> errs?console.log(errs):console.log('listening on 8000'))