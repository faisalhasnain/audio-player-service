## Audio Player Service

Backend service for audio player app exposed as REST API

### Technologies Used
1. Node.js
2. Express

### Getting Started

0. Prerequisites: Node.js >= 10.16.0 and NPM >= 6.9.0
1. Clone the repo and cd into dir
2. Rename/copy `default.env` to `.env` which contains config like server PORT number
3. Install all npm deps: `npm i`
4. Start server: `npm start`
5. HTTP server listening on: `localhost:5000` 🎉

### Notes
- Songs meta data is being stored in JSON file at the moment. Its not optimal to insert, update and delete individual song records in real world use cases. This will be replaced with proper database in future :)