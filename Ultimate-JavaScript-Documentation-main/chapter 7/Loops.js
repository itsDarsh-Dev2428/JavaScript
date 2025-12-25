let arr = [1, 3, 5, 6, 88];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element)
    
// }

// arr.forEach((value, index, arr)=>{
//     console.log(value, index, arr)
// });

// let obj= {
//     a:1,
//     b:2,
//     c:3
// }

// for (const key of Object.keys(obj)) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key, element);
//     }
// }


for (const iterator of arr) {
    console.log(iterator);
    if(iterator === 5){
        console.log(arr.push(45))
    }
}