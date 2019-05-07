require('dotenv').config;
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)

// Add routes, both API and view
app.use(routes);

mongoose.set('useCreateIndex', true);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/djdashboard', {
  useNewUrlParser: true,
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
