// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      gas: 470000,
      // network_id: '*' // Match any network id
      network_id: 42 // kovan
    }
  }
}
