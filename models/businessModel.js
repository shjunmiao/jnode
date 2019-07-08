const mongoose = require('mongoose');


const businessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }
  rating: Number,
});

const Business = mongoose.model('Business', businessSchema);

module.exports = Business;