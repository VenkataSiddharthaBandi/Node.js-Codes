/* Modules are similar to Libraries they can be imported to our programs
There are three types of modules in Node.js
1)Built in Modules
2)User defined modules
3)External modules
*/

// Built in Modules
// There are mainly four built in modules in Node.js
// Filesystem module(fs),Http module,OS module

const os = require("os");

console.log(os.type());