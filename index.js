'use strict';

const express = require('express');

const songs = require('./songs');

const app = express();

app.use(express.json());

// serve static audio files
app.use('/audio', express.static('data/songs', { extensions: ['mp3'] }));

// route for song resource
app.use('/songs', songs);

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server listening on localhost:${PORT}`));