const { runDatabaseSeeder } = require("multi-db-seeder");
const { DATABASE_SEEDER_SQL } = require("./seeds-sql/seeds.config");
const { DATABASE_SEEDER_NOSQL } = require("./seeds-nosql/seeds.config");

// =====================================================================================================================
// If you are using SQL Database use below approach
// =====================================================================================================================
// Function to run the database seeder
const runSeedSql = async () => {
  await runDatabaseSeeder(DATABASE_SEEDER_SQL);
};
// Execute the seed function
runSeedSql();

// =====================================================================================================================
// If you are using NoSQL Database use below approach
// =====================================================================================================================
// Function to run the database seeder
const runSeedNoSql = async () => {
  await runDatabaseSeeder(DATABASE_SEEDER_NOSQL);
};
// Execute the seed function
runSeedNoSql();
