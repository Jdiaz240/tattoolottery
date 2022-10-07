const mongoose = require('mongoose');
const Schema = mongoose.Schema

const playerSchema = new mongoose.schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    order_id: String,
    numbers: {
        type: [Number],
        required: true
    },

}, { timestamps: true })

const Player = mongoose.model('Player', playerSchema);


module.exports = Player;