const db = require('../models/jobModels.js');

const jobController = {};

// Get all jobs
jobController.getJobs = (req, res, next) => {
  db.query('SELECT * FROM job_listing')
    .then(((results) => {
      res.locals.jobs = results
      next();
    }
    ));
};

// Post a new job
jobController.postJob = (req, res, next) => {
  next();
};

// Put (update) a job
jobController.updateJob = (req, res, next) => {
  next();
};

// Delete a job
jobController.deleteJob = (req, res, next) => {
  next();
};

module.exports = jobController;
