const express = require("express");
const {connectToMongoDB} = require("./connect");
const urlRoute = require('./routes/url');

const app = express();
const port = 3001;

connectToMongoDB("mongodb://localhost:2701/short-url")

app.use('/url',urlRoute);
app.listen(port,()=>console.log(`Server started at port:${port}`));

