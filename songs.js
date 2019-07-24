'use strict';

const router = require('express').Router();
const fs = require('fs');
const { promisify } = require('util');

async function find(req, res) {
  const songs = await promisify(fs.readFile)('./data/songs.json');
  res.type('json').send(songs);
};

router.get('/', find);

module.exports = router;
