const Router = require('express');
const router = new Router();
const passengerController = require('../controllers/passengerController');

router.post('/create', passengerController.createPassenger);
router.get('/all', passengerController.getPassengers);
router.get('/:id', passengerController.getPassengerById);
router.put('/:id', passengerController.updatePassenger);
router.delete('/:id', passengerController.deletePassenger);

module.exports = router;