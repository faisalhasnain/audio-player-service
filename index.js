'use strict';

const express = require('express');

const songs = require('./songs');

const app = express();

app.use(express.json());

app.use('/songs', songs);

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server listening on localhost:${PORT}`));