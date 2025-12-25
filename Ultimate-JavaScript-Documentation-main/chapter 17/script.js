async function sleep(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    });
}

function sum(a,b,c){
    return a + b + c;
}

(async function main(){
    // let a = await sleep();
    // console.log(a);
    // let b = await sleep();
    // console.log(b);
})()

// let [a , b, ...rest] = [4, 5, 2, 6, 5, 4, 3,]
// console.log(a,b, rest)

const obj = {
    a:1,
    b:2,
    c:3,

}
let {a,b,c} = obj
console.log(a,b,c)
let arr = [1,2,3]
console.log(sum(...arr))


var a1 = 6;