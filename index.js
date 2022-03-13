require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const videoRoute = require('./routes/videos');


app.use(express.static('./public'))

app.use(cors());

app.use(express.json());

app.use('/videos', videoRoute);

const SERVER_PORT = process.env.PORT || 8080;

app.listen(SERVER_PORT, () => {
    console.log('Example app is listening on port 5500.')
});

