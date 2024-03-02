//  OS modules 
//  General Setup

const os = require('os'); 

//  info about current user 
const user = os.userInfo(); 
console.log(user); 

// method returns the system uptime in seconds 
console.log(`The System Yotime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(), 
    release:os.release(), 
    totalMe:os.totalmem(), 
    freeMem:os.freemem()
}

console.log(currentOS); 