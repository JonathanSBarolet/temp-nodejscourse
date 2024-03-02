// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only sharing what we want)
const names = require('./4-names'); 
const sayHi = require('./5-utiles'); 
const data = require('./6-alternative-flavor'); 
require('./7-mind-grenade'); 

console.log(data); 

sayHi(names.john); 
sayHi(names.peter); 
