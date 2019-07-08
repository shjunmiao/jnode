const express = require('express');
const router = express.Router();

const callApi = (req, res, next) => {
  res.status(200).json({
    status: 'appointment'
  })
};

router.route('/').get(callApi);


module.exports = router;