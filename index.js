'use strict';

const express = require('express');

const app = express();

app.use(express.json());

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server listening on localhost:${PORT}`));