const { Sequelize } = require('sequelize');
const sequelize = new Sequelize ('bus_booking', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();


module.exports = sequelize;



