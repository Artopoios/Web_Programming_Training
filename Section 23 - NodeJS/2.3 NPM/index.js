// import { randomSuperhero } from "superheroes";
// const name = randomSuperhero();

//var generateName = require('sillyname');
import generateName from "sillyname";
import superheroes, { randomSuperhero } from "superheroes";

console.log(randomSuperhero());
var sillyName = generateName();
console.log(`My name is ${sillyName}.`);