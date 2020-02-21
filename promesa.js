const fetch = require('fetch');
const fs =require('fs');
const fetchUrl = fetch.fetchUrl;


let primeraProme = Promise.resolve('esta es mi primera promesa')
//console.log(primeraProme)

primeraProme
.then(resultado=>{
    console.log('este el resultado', resultado)
})

let segundaProm = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(5),3000)
})
.then(resultado =>{
    console.log('segundo resultado', resultado +10)
})

let terceraProm = (url)=>{
    return new Promise((resolve,reject)=>{
        fetchUrl(url,(error,meta,body)=>{
            if (error){
                reject(error)
            }else{
                resolve(meta.status)
            }
        })
    })
}
terceraProm('http://www.google.com123')
.then(resultado=>{
    console.log(resultado)
})
.catch(error=>{
    console.log(error)
})