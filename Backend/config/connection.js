const mongoose = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
mongoose.connect('mongodb://localhost:27017/lotteryplayersDB', {
  useNewUrlParser: true,
})

// Export connection 
module.exports = mongoose.connection;