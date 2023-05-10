const { urlencoded, json } = require('express')
const express = require('express');
const app = express();
const port = 4000;
const router = require('./src/router');
const cors = require('cors')

app.use(urlencoded({ extended: true }));
app.use(json())
app.use(cors());
app.use('/api', router);
app.use(express.static('public'));

app.listen(port,   () => {
    return console.log(`app running at port ${port}`);
});