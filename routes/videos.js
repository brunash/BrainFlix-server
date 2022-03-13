const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const res = require('express/lib/response');
const { title } = require('process');

function readVideos() {
    const videosData = fs.readFileSync('data/videos.json');
    const parsedVideos = JSON.parse(videosData);
    return parsedVideos;
}

function writeVideos(data) {
    const stringifiedVideos = JSON.stringify(data);
    fs.writeFileSync('./data/videos.json', stringifiedVideos);
}

router.get('/', (req, res) => {
    const videos = readVideos();
    const videosArray = videos.map(video => {
        return {
            id: video.id,
            title: video.title,
            image: video.image,
            channel: video.channel
        }
    })
    res.status(200).json(videosArray);
});

router.get('/:id', (req, res) => {
    const videos = readVideos();
    const individualVideo = videos.find((video) => video.id === req.params.id);
    if (!individualVideo) {
        return res.status(404).send('Video not found');
    }
    res.json(individualVideo);
});

router.post('/', (req, res) => {
    const videos = readVideos();

    const { title, channel, image, description, views, likes, duration, video, timestamp, comments  } = req.body;

    if (!title) {
        return res.status(400).json({
            messsage: 'Title is required',
        });
    }
    if (!description) {
        return res.status(400).json({
            messsage: 'Description is required'
        });
}

const newVideo = {
    id: uuidv4(),
    channel: "Nikola Tesla",
    image: "http://localhost:5500/images/tesla.jpg",
    title,
    description,
    views,
    likes: '0',
    duration: "3:12", 
    video: "",
    timestamp: new Date(),
    comments
};

videos.push(newVideo);

writeVideos(videos);

res.status(201).json(newVideo)
});



module.exports = router;