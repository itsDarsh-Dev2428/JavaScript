async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(455)
         },3500)
   })
}
async function getData() {
  let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  let data = await x.json()
   return data
}


async function main(){
    console.log("Loading Module..")


    console.log("do something else ")

    console.log("Load Data")

    let data =  await getData()
    console.log(data)

    console.log("process Data")

    console.log("task 2")
}
main()

// data.then((v) => {
    
// console.log("process Data")
// console.log("task 2")

    
// })
// console.log(data)
