//var generateName = require("sillyname");
import generateName from "sillyname";
import superheroes from "superheroes";
const sillyName = generateName();
const superName = superheroes.random();

console.log(`My secret identity is ${sillyName}.`);
console.log(`And my super hero name is ${superName}.`);
