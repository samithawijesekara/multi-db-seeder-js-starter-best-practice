const {
  getEnvVariables,
  DATABASE_TYPE,
  SEED_INSERTION_TYPE,
} = require("multi-db-seeder");
const {
  FakeDataPool,
} = require("../seeds-nosql/fake-data-pool/fake-data-pool");
const {
  LocalDataPool,
} = require("../seeds-nosql/local-data-pool/local-data-pool");
const dotenv = require("dotenv");

// Load environment variables from .env file into process.env
dotenv.config();

const DATABASE_SEEDER_NOSQL = {
  DATABASE_TYPE: DATABASE_TYPE.MONGO_DB,
  SEED_INSERTION_TYPE: SEED_INSERTION_TYPE.INSERT_IF_EMPTY,
  NO_SQL_DB_CONNECTION_PROPS: {
    URI: process.env.MONGO_URI,
    DATABASE: process.env.MONGO_DATABASE,
  },
  LOCAL_DATA_POOL: LocalDataPool,
  IS_DISABLE_LOCAL_DATA_POOL: false,
  FAKE_DATA_POOL: FakeDataPool,
  IS_DISABLE_FAKE_DATA_POOL: false,
};

module.exports = { DATABASE_SEEDER_NOSQL };
