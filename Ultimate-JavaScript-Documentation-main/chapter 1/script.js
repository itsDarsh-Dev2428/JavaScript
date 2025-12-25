alert("Hello world");

console.log("Code is running!");

var a = prompt("Enter your number");
var isTrue = confirm("Are you sure you wanto leave this page? and blast your computer?")
if(isTrue){
    console.log("Blasting your computer now!");
}
else{
    console.log("You chose not to blast your computer.");
}
console.log("You entered number: " + a,);
document.title = "JavaScript Alert Example";
// document.body.style.backgroundColor = "lightblue";