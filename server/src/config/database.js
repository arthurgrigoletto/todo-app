const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// DB Config
const db = require('./keys').mongoURI;

//Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch(error => {
    console.log(error);
  });
