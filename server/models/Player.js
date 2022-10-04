const mongoose = require('mongoose');

const playerSchema = new mongoose.schema({

    player: {
        email: String,
        order_id: String,
        numbers: [Number], 
        createdAt: { type: Date, default: Date.now },
    } 
})

const Player = mongoose.model('Player', playerSchema);

const handleError = (err) => console.log(err);

module.exports = Player;