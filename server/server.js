const dotenv = require('dotenv').config();
const path = require('path');
const express = require('express');
const jobRouter = require('./routes/job');

const app = express();
const port = process.env.PORT || 3000;

/* We might need this static /dist thing later later.. */
// app.use(express.static(path.resolve(__dirname, '../dist')));

// Parsing Stuff Here
app.use(express.json());

// Route handlers
app.use('/job', jobRouter);

// 404 Handler
app.use((req, res) => res.status(404).send('404 - Requested resource not found'));

// Glober Error Handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.error(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// set port & start listening
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
module.exports = server;
