const express = require('express');
const PORT = 5500;
const app = express();
const cors = require('cors');
const videoRoute = require

app.use(express.static('./public/images'))

app.use(cors());

app.use(express.json());

app.use('/api/v1/videos', videoRoute);

app.listen(PORT, () => {
    console.log('Example app is listening on port 5500.')
});