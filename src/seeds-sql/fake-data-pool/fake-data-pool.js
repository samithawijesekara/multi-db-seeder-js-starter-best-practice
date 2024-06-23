const { v4: uuidv4 } = require("uuid");
const { faker } = require("@faker-js/faker");
const { generateFakeData } = require("multi-db-seeder");

const FakeDataPool = {
  seeds: [
    {
      ENTITY_NAME: "Product",
      DATA: generateFakeData(
        {
          id: () => uuidv4(), // This should be use in SQL databases seeds
          name: faker.commerce.product,
          price: faker.commerce.price,
        },
        10
      ),
    },
    {
      ENTITY_NAME: "Users",
      DATA: generateFakeData(
        {
          id: () => uuidv4(), // This should be use in SQL databases seeds
          name: faker.name.fullName,
          email: faker.internet.email,
          address: faker.address.streetAddress,
        },
        5
      ),
    },
  ],
};

module.exports = { FakeDataPool };
