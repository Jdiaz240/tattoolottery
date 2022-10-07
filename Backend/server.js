//imports the information from the env file
require('dotenv').config();

const express = require('express');
//imports the mongoose library
const mongoose = require('mongoose');
const db = require('./config/connection');

//establishes the which port the server runs on
const PORT = process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
  });
 
db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`🌍 Now listening on localhost:${PORT}`);
    })
})