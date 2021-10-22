const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
.then(() => console.log("MongoDB has been connected"))
.catch((error) => console.log(err))

module.exports = mongoose.connection;
