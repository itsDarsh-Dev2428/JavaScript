function nice(name) {
    console.log("Hey " + name + ", nice to meet you!");
    console.log("Hey " + name + ", you are awesome!");
    console.log("Hey " + name + ", have a great day!");
    console.log("Remember to check the documentation for any functions you use.");
    console.log("Good luck with your coding!");
    console.log("Don't forget to test your code thoroughly.");
};

function sum(a, b, c = 3) {
    // console.log(a+ b);
    return a + b + c;
}

// sum(5, 6);
result1 = sum(6, 9);
result2 = sum(10, 15);
result3 = sum(20, 30, 1);
console.log("The sum of these numbers is: ", result3);
console.log("The sum of these numbers is: ", result2);
console.log("The sum of these numbers is: ", result1);

nice("Darsh");
nice("Alice");

const func1 = (x) => {
    console.log("I am an arrow function", x)
}
func1(34);
func1(66);
func1(48);