const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

function readVideos() {

    const videosData = fs.readFileSync('data/videos.json');

    const parsedVideos = JSON.parse(videosData);
    return parsedVideos;
}

// function writeVideos(data) {
//     const stringifiedVideos = JSON.stringify(data);
//     fs.writeFileSync('./data/videos.json', stringifiedVideos);
// }

router.get('/', (req, res) => {
    
    
    const videos = readVideos();
    let filteredVideos = videos;

    if (req.query.id) {
         filteredVideos = shoes.filter((id) => video.id === req.query.id);
     }
    
     res.status(200).json(filteredVideos);
});

router.get('/:id', (req, res) => {
    const videos = readVideos();

    const individualVideo = videos.find((video) => video.id === req.params.id);

  
    if (!individualVideo) {
        return res.status(404).send('Video not found');
    }

    res.json(individualVideo);
});


module.exports = router;