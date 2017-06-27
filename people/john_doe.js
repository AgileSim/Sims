'use strict';

let guy = {
  "id": "0000010001",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@soprasteria.com",
  "credentials": {
    "username": "johndoe",
    "password": "banktrix"
  },
  "products": {
    "accounts": ['personal', "family"],
    "cards": ['credit', 'prepaid'],
    "loans": ['mortgage']
  }
}

module.exports = require("../builder").process(guy);
