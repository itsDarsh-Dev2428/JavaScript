let a = prompt("Enter a number: ")

let b = prompt("Enter one more number: ")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed, you're hacker!")
}

let sum = parseInt(a) + parseInt(b)

function main() {
    let x = 1;
    try {
        console.log("The sum is", sum * x)
        return true
    }

    catch (error) {
        console.log("Error aa gaya bhai")
        return false
    }

    finally {
        console.log("This is the end of the program")
    }

}
let c = main()
console.log(c)