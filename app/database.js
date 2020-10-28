const mongoose = require('mongoose');

const localDBname = 'testDb';
const MONGODB_URI = `mongodb://localhost/${localDBname}`;

const promise = mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(function(db) {
    console.log(`DATABASE CONNECTED!`, MONGODB_URI);
  })
  .catch(function(err) {
    console.log(`CONNECTION ERROR`, err);
  });
