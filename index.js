import { createRequire } from "module";
const require = createRequire(import.meta.url); //need this to run import and require together
//require is a functionObject

//set "type":"module" in package.json
//ECMAScript modules only - JSmodule pattern - uses import
import { franc } from "franc";
const langs = require("langs"); //2 lines on top

//(object.property).method()
const arrArguments = global.process.argv.slice(2); //array of arguments passed in
console.dir(arrArguments); //array
// console.dir(franc); //functionObject
//console.dir(langs) //Obeject


