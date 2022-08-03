import { createRequire } from "module";
const require = createRequire(import.meta.url); //need this to run import and require together
//require is a functionObject

//set "type":"module" in package.json
//ECMAScript modules only - JSmodule pattern - uses import
import { franc } from "franc";
const langs = require("langs"); //2 lines on top
const colors = require("colors"); //object with properties/methods

//(object.property).method()
const input = global.process.argv[2]; //array[2] of arguments passed in
console.dir(input); //string
//console.dir(colors) //Object with methods/properties
//console.dir(franc); //functionObject
// console.dir(langs) //Obeject with methods

//using first module/package = functionObject(string-arugment)
const langCode = franc(input);
//langaugeCode === undetermined
if (langCode === "und") {
  console.log(colors.green("Needs bigger length string"));
} else {
  //using second module/package = object of methods
  const language = langs.where("3", langCode); //Object.method(arg1,arg2)

  console.dir(language.name); //object.property
}

//npm start "small" 
//npm start "words in english"
//passing in arguments