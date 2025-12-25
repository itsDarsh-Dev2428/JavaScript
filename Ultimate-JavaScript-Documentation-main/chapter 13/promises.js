console.log('This is Promises');

let prom1 = new Promise((resolve, reject) =>{
    let a = Math.random();
    if(a < 0.5){
        reject("No random number was not supporing you")
    }
    else{
          setTimeout(() => {
        console.log("Yes I am done")
        resolve("Harry")
    }, 3000);

 }
})

let prom2 = new Promise((resolve, reject) =>{
    let a = Math.random();
    if(a < 0.5){
        reject("No random number was not supporing you")
    }
    else{
          setTimeout(() => {
        console.log("Yes I am done")
        resolve("Harry")
    }, 3000);

 }
})

let P3 = Promise.all([prom1, prom2])
P3.then((a) => {
    console.log(a)
}).catch(err=>{
    console.log(err)
})

