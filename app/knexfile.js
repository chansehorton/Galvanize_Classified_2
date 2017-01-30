// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/classifieds_dev'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/classifieds_test'
  },
  production: {
    client: 'pg',
    connection: 'postgres://immpttxlvtilxe:efc889f8fa42685cc2e1b37f9d62bc938cbeb9ef86953052b99ae1a5dc4b4e65@ec2-54-163-240-7.compute-1.amazonaws.com:5432/d4ihfd9b86cuvm'
  },

};
