// import express
// const express = require('express');
import express from 'express';

// import CORS
// const cors = require('cors')
import cors from 'cors';

// import body-parser
// const bodyParser = require('body-parser');
import bodyParser from 'body-parser';

// init app
const app = express();

// use cors
app.use(cors());

// use body parser
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// define port untuk url
const port = 3008;

// route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
