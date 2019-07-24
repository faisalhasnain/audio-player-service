## Audio Player Service

Backend service for audio player app exposed as JSON based REST API

## Technologies Used
1. Node.js
2. Express

## Getting Started

0. Prerequisites: Node.js >= 10.16.0 and NPM >= 6.9.0
1. Clone the repo and cd into dir
2. Rename/copy `default.env` to `.env` which contains config like server PORT number
3. Install all npm deps: `npm i`
4. Start server: `npm start`
5. HTTP server listening on: `localhost:5000` 🎉

## REST API

### Songs

1. Get all songs with optional pagination
```
GET /songs

Query: {
  skip: Number,
  limit: Number
}

Response: {
  id: String,
  title: String,
  filename: String
}
```
2. Get song audio by filename
```
GET /audio/{song-filename.mp3}
```

### Notes
- Songs meta data is being stored in JSON file at the moment. Its not optimal to insert, update and delete individual song records in real world use cases. This will be replaced with proper database in future :)