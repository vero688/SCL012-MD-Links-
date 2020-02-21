const fs = require('fs');
const marked = require('marked');
const FileHound = require('filehound');
const fetchUrl = require('fetch').fetchUrl;
const pathMd =require('path');


//filehound nos ayuda a encontrar archivo md dentro de un directorio 
const mdLin = (path => {
    return new Promise((resolve, reject) => {
        FileHound.create()
            .paths(path)
            .ext('md')
            .find()
            .then(
                file => {
                    if (file.length !== 0) {
                        resolve(file)
                        console.log(file)
                    }
                }
            )
            .catch(err => {
                reject(new Error("Esta ruta no existe"))
            })
    })
})

//lee los archivos

const readMdFile = (path => {
    return new Promise ((resolve, reject) => {
      fs.readFile(path, 'utf-8',(error, file) => {
        if(error){
          reject(new Error("Hubo un error en el archivo " + pathMd));
        };
        resolve(file);
      });
    });
  });
  
  //obtiene links de un  archivo 
  const mdLinks = (pathMd => {
    const links = [];
    return new Promise ((resolve, reject) => {
      readMdFile(pathMd)
      .then(res =>{
        const renderer = new marked.Renderer();
        renderer.link = function(href, title, text) {
          links.push({
              //encuentra la url 
            href: href,
            //el texto que tiene el link
            text: text,
            //ruta del archivo donde encuenra el limk
            file: pathMd,
          });
       
        };
        marked(res, { renderer: renderer });
        console.log(links)
        const statusProms = links.map(link => linkStatus(link.href));
        Promise.all(statusProms)
        .then(linksRes => {
          resolve(linksRes)
        });
      })
      .catch(err => {
        reject(err)
      } )
    })
  })
  
  let foundLinks = mdLinks(pathMd).then(console.log)
  const linkStatus = (url) => {
    return new Promise((resolve,reject) => {
      fetchUrl(url, (error, meta, body) => {
        if (error) {
            reject(error)
          }else {
            resolve(meta.status)
          }
            })
    })
  }


  mdLin(process.argv[2])
module.exports = {
    mdLinks,
    mdLin,
    foundLinks,
}