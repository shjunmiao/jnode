const express = require('express');
const controller = require('../controllers/businessControllers');
const router = express.Router();


const callApi =  (req, res) => {
  res.status(200).json({
    status: 'business'
  })
};

router.route('/').get(callApi);

module.exports = router;

