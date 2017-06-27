'use strict';

let guy = {
  "id": "0000010002",
  "firstName": "Jane",
  "lastName": "Dove",
  "email": "jane.dove@soprasteria.com",
  "credentials": {
    "username": "janedove",
    "password": "banktrix"
  },
  "products": {
    "accounts": ['savings',],
    "cards": ['Daily', 'Internet'],
  }
}

module.exports = require("../builder").process(guy);
