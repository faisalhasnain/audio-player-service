'use strict';

const router = require('express').Router();
const fs = require('fs');
const { promisify } = require('util');

async function fetchSongs(skip, limit) {
  const contents = await promisify(fs.readFile)('./data/songs.json');
  const songs = JSON.parse(contents);
  const end = skip + limit;
  return songs.slice(skip, end);
}

async function find(req, res) {
  const { skip = '0', limit = '25' } = req.query;
  const songs = await fetchSongs(Number(skip), Number(limit));
  res.send(songs);
};

router.get('/', find);

module.exports = router;
