const { Flight } = require('../models/models')
const ApiError = require('../error/ApiError');

class FlightController {
    async createFlight(req, res) {
        const { terminal, direction, capacity, date } = req.body;
        const flight = await Flight.create({ terminal, direction, capacity, date });
        return res.json(flight);
    }
    async getFlight(req, res) {
        const flights = await Flight.findAll();
        return res.json(flights);
    }
    async getFlightById(req, res, next) {
        const { id } = req.params;
        const flight = await Flight.findOne({ where: { id } });
        if (!flight) {
            return next(ApiError.badRequest('Flight not found'));
        }
        return res.json(flight);
    }
    async updateFlight(req, res, next) {
        const { id } = req.params;
        const { terminal, direction, capacity, date } = req.body;

        let flight = await Flight.findByPk(id);

        if (!flight) {
            return next(ApiError.badRequest('Flight not found'));
        }

        flight.terminal = terminal;
        flight.direction = direction;
        flight.capacity = capacity;
        flight.date = date;

        await flight.save();

        return res.json(flight);
    }
    async deleteFlight(req, res, next) {
        const { id } = req.params;
        let flight = await Flight.findByPk(id);

        if (!flight) {
            return next(ApiError.badRequest('Flight not found'));
        }

        await flight.destroy();

        return res.json(flight);
    }
}

module.exports = new FlightController();