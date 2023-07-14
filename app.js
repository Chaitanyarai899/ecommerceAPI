const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());

// Use the initialised routes from routes.js file
app.use('/', routes);

// Starting the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
