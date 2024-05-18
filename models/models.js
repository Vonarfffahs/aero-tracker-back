const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Passenger = sequelize.define('passenger', {
    passport_id: {type: DataTypes.STRING, primaryKey: true},
    last_name: {type: DataTypes.STRING, allowNull: false},
    first_name: {type: DataTypes.STRING, allowNull: false},
    patronymic: {type: DataTypes.STRING, allowNull: false},
    wanted: {type: DataTypes.ENUM('no','yes','interpol'), allowNull: false}
});

const Flight = sequelize.define('flight', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    terminal: {type: DataTypes.ENUM('A','B'), allowNull: false},
    direction: {type: DataTypes.STRING, allowNull: false},
    capacity: {type: DataTypes.INTEGER, allowNull: false},
    date:  {type: DataTypes.DATE, allowNull: false}
});

const Registration = sequelize.define('registration', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    tiket: {type: DataTypes.INTEGER, unique: true, allowNull: false},
    visa: {type: DataTypes.BOOLEAN},
    baggage:  {type: DataTypes.DOUBLE},
    flight_permission: {type: DataTypes.BOOLEAN, allowNull: false},
});

Passenger.hasMany(Registration, { onDelete: 'CASCADE', hooks: true });
Registration.belongsTo(Passenger);

Flight.hasMany(Registration, { onDelete: 'CASCADE', hooks: true });
Registration.belongsTo(Flight);

module.exports = {
    Passenger, 
    Flight,
    Registration
}