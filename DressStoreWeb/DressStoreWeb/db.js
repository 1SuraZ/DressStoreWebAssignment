// db.js

const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/DressStore';


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Alert! Error ! MongoDB connection error:', err);
  });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Succesfully Connected to MongoDB');
});

module.exports = mongoose;
