const fs = require('fs');
const marked = require ('marked');
const fetch = require('node-fetch');



//leer archivo .md
const readMd = (path=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(path,'utf-8',(err,data)=>{
            if (err){
                reject (new Error ("No hemos encontrado el archivo " + path))

            }
            resolve(data)
            console.log(data)
    })
})
})

        
  