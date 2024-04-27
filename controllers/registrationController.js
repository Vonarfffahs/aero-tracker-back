const { Registration } = require('../models/models');
const ApiError = require('../error/ApiError');

class RegistrationController {
    async createRegistration(req, res) {
        const { tiket, visa, baggage, flight_permission, passengerPassportId, flightId } = req.body;
        const registration = await Registration.create({ tiket, visa, baggage, flight_permission, passengerPassportId, flightId });
        return res.json(registration);
    }
    async getRegistration(req, res) {
        const registrations = await Registration.findAll();
        return res.json(registrations);
    }
    async getRegistrationById(req, res, next) {
        const { id } = req.params;
        const registration = await Registration.findOne({ where: { id } });
        if (!registration) {
            return next(ApiError.badRequest('Record not found'));
        }
        return res.json(registration);
    }
    async updateRegistration(req, res, next) {
        const { id } = req.params;
        const { tiket, visa, baggage, flight_permission, passengerPassportId, flightId } = req.body;

        let registration = await Registration.findByPk(id);

        if (!registration) {
            return next(ApiError.badRequest('Record not found'));
        }

        registration.tiket = tiket;
        registration.visa = visa;
        registration.baggage = baggage;
        registration.flight_permission = flight_permission;
        registration.passengerPassportId = passengerPassportId;
        registration.flightId = flightId;

        await registration.save();

        return res.json(registration);
    }
    async deleteRegistration(req, res, next) {
        const { id } = req.params;
        let registration = await Registration.findByPk(id);

        if (!registration) {
            return next(ApiError.badRequest('Record not found'));
        }

        await registration.destroy();

        return res.json(registration);
    }
}

module.exports = new RegistrationController();