// app/punManager

var fs = require('fs')

function get(puntype) { 
  puns = []
  if (puntype == "animal") {
  	puns = fs.readFileSync('./puns/animal_puns.txt').toString().split("\n");

  } else if (puntype == "computer") {
  	puns = fs.readFileSync('./puns/computer_puns.txt').toString().split("\n");

  } else if (puntype == "battery") {
  	puns = fs.readFileSync('./puns/battery_puns.txt').toString().split("\n");

  } else if (puntype == "elevator") {
  	puns = fs.readFileSync('./puns/elevator_puns.txt').toString().split("\n");

  } else if (puntype == "food") {
  	puns = fs.readFileSync('./puns/food_puns.txt').toString().split("\n");

  } else if (puntype == "space") {
  	puns = fs.readFileSync('./puns/space_puns.txt').toString().split("\n");
  }
  return puns
}

module.exports.get = get  