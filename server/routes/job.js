const express = require('express');

const jobController = require('../controllers/jobController');

const router = express.Router();

// @desc get all jobs
// @URL GET /job
router.get('/',
  jobController.getJobs,
  (req, res) => res.status(200).json(res.locals));

// @desc post a job
// @URL POST /job
router.post('/',
  jobController.postJob,
  (req, res) => res.status(200).json(res.locals));

// @desc update a job
// @URL PUT /job/<id>
router.put('/:id',
  jobController.updateJob,
  (req, res) => res.status(200).json(res.locals));

// @desc delete a job
// @URL DELETE /job/<id>
router.delete('/:id',
  jobController.deleteJob,
  (req, res) => res.status(200).json(res.locals));

module.exports = router;
