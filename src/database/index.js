const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('url', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  console.log('MongoDB is connected')
}).catch(error => console.log(`Failed to connect to MongoDB ${error}`));