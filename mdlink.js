const fs = require('fs');
const marked = require ('marked');
const fetch = require('node-fetch');

// const mdFromato = ( path =>{
//     if (path.slice(-3) == '.md'){
//         return true;
//     }else {
//         return false;
//     }
// })


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

//obtener links de archivo 

// const searchLink = (path =>{
//     return new Promise((resolve,reject)=>{
//         readMd(path).then(result =>{
//             let links =[];
//             const renderer = new marked.Renderer();
//             renderer.links =function(href, title, text){
                
//                 link.push({
//                     //que encuentre url
//                     href: href,
//                     //el texto que esta en el link
//                     text:text,
//                     //ruta del archivo donde encuentre el link
//                     file : path })

//             }
//             //nos muestra el resultado y devulve un links
//             marked(result,{renderer:renderer});
//             resolve(link)
//             console.log(link)

//          })
//          .catch(error=>{
//              reject(error)
//          })
//      })
//     })

// searchLink(process.argv[2])
// module.exports= {
//     mdLinks
// }
        