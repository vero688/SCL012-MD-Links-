const mdLinks = require('./mdlink.js');
const path = require('path');

// absorve las rutas por el usuario en consola 
let routFile = process.argv[2];
//convertir rutas absoluta  (path resolve)

routFile =path.resolve(routFile);

// normaliza los errores de escritura para leerlo con existo (path.normalize)

routFile =path.normalize(routFile);







 