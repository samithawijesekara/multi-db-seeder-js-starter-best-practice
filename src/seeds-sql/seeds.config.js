const {
  getEnvVariables,
  DATABASE_TYPE,
  SEED_INSERTION_TYPE,
} = require("multi-db-seeder");
const { FakeDataPool } = require("../seeds-sql/fake-data-pool/fake-data-pool");
const {
  LocalDataPool,
} = require("../seeds-sql/local-data-pool/local-data-pool");
const dotenv = require("dotenv");

// Load environment variables from .env file into process.env
dotenv.config();

const DATABASE_SEEDER_SQL = {
  DATABASE_TYPE: DATABASE_TYPE.MY_SQL,
  SEED_INSERTION_TYPE: SEED_INSERTION_TYPE.INSERT_IF_EMPTY,
  SQL_DB_CONNECTION_PROPS: {
    HOST: process.env.MYSQL_HOST,
    USER: process.env.MYSQL_USER,
    PASSWORD: process.env.MYSQL_PASSWORD,
    DATABASE: process.env.MYSQL_DATABASE,
    PORT: process.env.MYSQL_PORT,
  },
  LOCAL_DATA_POOL: LocalDataPool,
  IS_DISABLE_LOCAL_DATA_POOL: false,
  FAKE_DATA_POOL: FakeDataPool,
  IS_DISABLE_FAKE_DATA_POOL: false,
};

module.exports = { DATABASE_SEEDER_SQL };
