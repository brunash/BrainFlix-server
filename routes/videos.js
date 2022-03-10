const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

function readVideos() {

    const videosData = fs.readFileSync('../data/videos.json');

    const parsedVideos = JSON.parse(videosData);
    return parsedVideos;
}

function writeVideos(data) {
    const stringifiedVideos = JSON.stringify(data);
    fs.writeFileSync('./data/videos.json', stringifiedVideos);
}

router.get('./', (req, res) => {
    const videos = readVideos();
    let filteredVideos = videos;

    if (req.query.id) {
        filteredVideos = shoes.filter((id) => video.id === req.query.id);
    }
    
    res.status(200).json(filteredVideos);
});

router.get('/:videoId', (req, res) => {
    const videos = readVideos();

    // Find the individual shoe that was requested
    // (The shoe whose id matches the id from the URL req.params.shoeId)
    const individualVideo = videos.find((video) => video.id === req.params.videoId);

    // If it doesn't exist, send a 404 not found
    if (!individualVideo) {
        return res.status(404).send('Shoe not found');
    }

    // Respond with that individual shoe
    res.json(individualVideo);
});