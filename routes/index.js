const Router = require('express');
const router = new Router();
const passengerRouter = require('./passengerRouter');
const flightRouter = require('./flightRouter');
const registrationRouter = require('./registrationRouter');

router.use('/passenger', passengerRouter)
router.use('/flight', flightRouter)
router.use('/registration', registrationRouter)

module.exports = router;