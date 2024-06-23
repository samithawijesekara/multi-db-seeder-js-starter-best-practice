const techStacksData = require("./techstacks-seed-data.json");
const userRolesData = require("./userroles-seed-data.json");

const LocalDataPool = {
  seeds: [techStacksData, userRolesData],
};

module.exports = { LocalDataPool };