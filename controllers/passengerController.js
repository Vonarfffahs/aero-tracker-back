const { Passenger } = require('../models/models');
const ApiError = require('../error/ApiError');

class PassengerController {
    async createPassenger(req, res) {
        const { passport_id, last_name, first_name, patronymic, wanted } = req.body;
        const passenger = await Passenger.create({ passport_id, last_name, first_name, patronymic, wanted });
        return res.json(passenger);
    }
    async getPassengers(req, res) {
        const passengers = await Passenger.findAll();
        return res.json(passengers);
    }
    async getPassengerById(req, res, next) {
        const { id } = req.params;
        const passport_id = id;
        const passenger = await Passenger.findOne({where: { passport_id }});
        if (!passenger) {
            return next(ApiError.badRequest('Passenger not found'));
        }
        return res.json(passenger);
    }
    async updatePassenger(req, res, next) {
        const { id } = req.params;
        const { last_name, first_name, patronymic, wanted } = req.body;
        const passport_id = id;

        let passenger = await Passenger.findByPk(passport_id);

        if (!passenger) {
            return next(ApiError.badRequest('Passenger not found'));
        }

        passenger.last_name = last_name;
        passenger.first_name = first_name; 
        passenger.patronymic = patronymic; 
        passenger.wanted = wanted;

        await passenger.save();

        return res.json(passenger);
    }
    async deletePassenger(req, res) {
        const { id } = req.params;
        const passport_id = id;

        let passenger = await Passenger.findByPk(passport_id);

        if (!passenger) {
            return next(ApiError.badRequest('Passenger not found'));
        }

        await passenger.destroy();

        return res.json(passenger);
    }
}

module.exports = new PassengerController();