const Router = require('express');
const router = new Router();
const registrationController = require('../controllers/registrationController');

router.post('/create', registrationController.createRegistration);
router.get('/all', registrationController.getRegistration);
router.get('/:id', registrationController.getRegistrationById);
router.put('/:id', registrationController.updateRegistration);
router.delete('/:id', registrationController.deleteRegistration);

module.exports = router;