'use strict';
let decache = require('decache');

let self = {
  process: function(sim) {
    if(sim.products) {
      Object.keys(sim.products).forEach(_category => {
        let collection = [];
        sim.products[_category].forEach(_item => {
          let file = `./products/${_category}/${_item}`;
          decache(file)
          console.log("loading..." + file)
          let item = require(file);
          collection.push(item)
        })
        sim.products[_category] = collection;
      })
    }
    return sim;
  }
}

module.exports = self;
