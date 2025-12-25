// obj = {
//     a: 1,
//     b: "harry"
// }
// console.log(obj)

// let animal = {
//     eats: true
// }

// // let rabbit = {
// //     jump: true
// // }

// // rabbit.__proto__ = animal;
// console.log(rabbit.eats);


class Animal{
    constructor(name){
        this.name = name;
        console.log("Object is created..")
    }
    eats(){
        console.log('Animal eats');
        
    }
    jumps(){
        console.log("Animal jumps");
    }
}

class Lion extends Animal{
    constructor(name){
        super(name);
    }
}

let a = new Animal("Bunny");
console.log(a)

let l = new Lion("Simba");
console.log(l);