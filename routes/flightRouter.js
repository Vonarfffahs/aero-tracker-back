const Router = require('express');
const router = new Router();
const flightController = require('../controllers/flightController');

router.post('/create', flightController.createFlight);
router.get('/all', flightController.getFlight);
router.get('/:id', flightController.getFlightById);
router.put('/:id', flightController.updateFlight);
router.delete('/:id', flightController.deleteFlight);

module.exports = router;