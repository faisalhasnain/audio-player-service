
const express = require('express');

const app = express();

app.use(express.json());

const { PORT } = process.env;

app.listen(PORT, () => `Server listening on localhost:${PORT}`);