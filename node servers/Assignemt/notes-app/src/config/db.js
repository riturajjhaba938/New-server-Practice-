const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/notes_app';

module.exports = async function connectDb() {
  return mongoose.connect(MONGO_URI);
};
