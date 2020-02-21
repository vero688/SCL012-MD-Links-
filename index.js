const mdLinks = require('./md-links.js');
const process = require('process');
const pathNode = require('path');
const chalk = require('chalk');

let path = process.argv[2]
//path.resolve para poder convertir en absoluta
path = pathNode.resolve(path);
//pat.normalize es para normalizar path en caso de q hayan errores de semanticas 
path.normalize(path);

let options ={
    stats:false,
    validate:false,
}

process.argv.forEach(element =>{
if(element == "--stats" || element == "-s" ){
    option.validate = true
}
})

