const { readFileSync, writeFileSync } = require('fs'); 
/* Same Thing as  
const fileSystem = require('fs'); 
fileSystem.readFileSync; 
fileSystem.writeFileSync
*/
const first = readFileSync('./content/first.txt', 'utf-8'); 
const second = readFileSync('./content/second.txt','utf-8');

console.log(first); 
console.log(second); 

writeFileSync('./content/result-sync.txt',`Here is the result : ${first} -- ${second}`,{flag:'a'});
