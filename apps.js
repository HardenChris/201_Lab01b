console.log("mike check 1,2,1,2");

let newUser = prompt("what is your first name?");
console.log("the users name is " + newUser + ".");
alert("Welcome " + newUser + "!");


let masterName = prompt("Is my name Chris, yes or no?")
if (masterName === "yes" || masterName === "y") {
  alert("That is correct!");
} else if (masterName === "no" || masterName === "n") {
  alert("That is Incorrect");
}
console.log("The user answered " + masterName + " to question number one.");

let childCount = prompt("Do I have two children?");
if (childCount === "no" || childCount === "n") {
  alert("That is correct!");
} else if (childCount === "yes" || childCount === "y") {
  alert("That is Incorrect");
}
console.log("The user answered " + childCount + " to question number two.");

masterName.toLowerCase();
