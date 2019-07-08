const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const businessRouter = require('./routers/businessRouter');
const appointmentRouter = require('./routers/appointmentRouter');
const app = express();

app.use('/api/v1/business', businessRouter);
app.use('/api/v1/appointment', appointmentRouter);
// app.use('/api/vi/employee', employeeRouter);
// app.use('/api/vi/reviews', reviewRouter);
// app.use('/api/v1/appointment', appointmentRouter);
module.exports = app;
