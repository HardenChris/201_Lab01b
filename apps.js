'use strict';

console.log('mike check 1,2,1,2');

let newUser = prompt('what is your first name?');
console.log('the users name is ' + newUser + '.');
alert('Welcome ' + newUser + '!');

let masterName = prompt('Is my name Chris, yes or no?');
if (masterName.toLowerCase() === 'yes' || masterName.toLowerCase() === 'y') {
  alert('That is correct!');
} else if (masterName.toLowerCase() === 'no' || masterName.toLowerCase() === 'n') {
  alert('That is Incorrect');
}
//console.log('The user answered ' + masterName + ' to question number one.');

let childCount = prompt('Do I have two children, yes or no?');
if (childCount.toLowerCase() === 'no' || childCount.toLowerCase() === 'n') {
  alert('That is correct!');
} else if (childCount.toLowerCase() === 'yes' || childCount.toLowerCase() === 'y') {
  alert('That is Incorrect');
}
//console.log('The user answered ' + childCount + ' to question number two.');

let birthState = prompt('Was I born in the great state of Texas, yes or no?');
if (birthState.toLowerCase() === 'yes' || birthState.toLowerCase() === 'y') {
  alert('That is correct!');
} else if (birthState.toLowerCase() === 'no' || birthState.toLowerCase() === 'n') {
  alert('That is Incorrect');
}
//console.log('The user answered ' + birthState + ' to question number tthree.');

let broniBro = prompt('Is one of my hobbies include being a Broni, yes or no?');
if (broniBro.toLowerCase() === 'no' || broniBro.toLowerCase() === 'n') {
  alert('That is correct!');
} else if (broniBro.toLowerCase() === 'yes' || broniBro.toLowerCase() === 'y') {
  alert('That is Incorrect');
}
//console.log('The user answered ' + broniBro + ' to question number four.');

let happyWife = prompt('Am i happily married?, yes or no?');
if (happyWife.toLowerCase() === 'yes' || happyWife.toLowerCase() === 'y') {
  alert('That is correct!');
} else if (happyWife.toLowerCase() === 'no' || happyWife.toLowerCase() === 'n') {
  alert('That is Incorrect');
}
//console.log('The user answered ' + happyWife + ' to question number five.');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
console.log(getRandomInt(20));
// Generate a (random number


//Track guesses left

prompt('Guess a number between 1 & 20.');
//User makes a guess


//system verfies if number is correct


//if number is incorrect

alert('Your guess was below the correct number. Guess again');
//inform user the number is too low

alert('Your guess was above the correct number. Guess again');
//inform user the number is to high

prompt('Guess a number between 1 & 20.' );
//user guesses again

alert('That is the correct.');
// if user is correct the loop breaks and moves on to the next question




let i = 0;
while (i < 3) {
  i++;
}

for (let i = 0; i < 3; i++){
  console.log('I hav run ' + i + 'times.');
}

let guessNumber = prompt('Guess a number out of 20.');




let favCar = 'Mustang';

switch (favCar) {
case 'Mustang':
  console.log('no');
  break;
case '4Runner':
  console.log('yes');
  break;
case 'Escalade':
  console.log('no');
  break;
case 'Camry':
  console.log('no');
  break;
case 'Hellcat':
  console.log('no');
  break;
case 'M3':
  console.log('no');
  break;
default:
  console.log('Not recognized');
}
