// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/classifieds_dev',
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/classifieds_test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/app/migrations'
    },
    seeds: {
      directory: __dirname + '/app/seeds'
    }
  }
};
