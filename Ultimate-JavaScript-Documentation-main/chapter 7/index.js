let arr = [1, 2, 3, 4, 5];
//  Index  0, 1, 2, 3, 4
arr[0] = 23;
// console.log(arr, typeof arr);
// console.log(arr.length);
// arr[1] = "Harry"
// arr[3] = 4.532
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

console.log(arr.toString());

console.log(arr.join(" - "));

let a = [1, 2, 3, 4, 5, 6];
console.log(a.pop()); // Removes the last element and returns it
console.log(a);

let a1 = [1,2,3];
let a2 = [4,5,6];
let a3 = [9, 8, 7];

let a4 = a.concat(a1, a2, a3);
console.log(a4);

console.log(a4.slice(2)); // Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.       