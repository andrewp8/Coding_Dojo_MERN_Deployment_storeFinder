const mongoose = require('mongoose');
const username = process.env.DB_USERNAME;
const dbName = process.env.DB;
const pw = process.env.PASSWORD;
const dbUri = process.env.DB_URI;
const uri = `mongodb+srv://${username}:${pw}@${dbUri}/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Established a connection to the database"))
  .catch(err => console.log("Something went wrong when connecting to the database", err));