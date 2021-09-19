'use strict';

//Mic Check
console.log('mic check 1,2,1,2');

let correctAnswers = 0;

//Functions:
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
//console.log(getRandomInt(10));

function isNCor() {
  alert('That is Incorrect');
}

function isCor() {
  alert('That is Correct');
  correctAnswers++;
}

//Page Code
let newUser = prompt('what is your first name?');
console.log('the users name is ' + newUser + '.');
alert('Welcome ' + newUser + '!');

let masterName = prompt('Is my name Chris, yes or no?');
if (masterName.toLowerCase() === 'yes' || masterName.toLowerCase() === 'y') {
  isCor();
} else if (
  masterName.toLowerCase() === 'no' ||
  masterName.toLowerCase() === 'n'
) {
  isNCor();
}
//console.log('The user answered ' + masterName + ' to question number one.');

let childCount = prompt('Do I have two children, yes or no?');
if (childCount.toLowerCase() === 'no' || childCount.toLowerCase() === 'n') {
  isCor();
} else if (
  childCount.toLowerCase() === 'yes' ||
  childCount.toLowerCase() === 'y'
) {
  isNCor();
}
//console.log('The user answered ' + childCount + ' to question number two.');

let birthState = prompt('Was I born in the great state of Texas, yes or no?');
if (birthState.toLowerCase() === 'yes' || birthState.toLowerCase() === 'y') {
  isCor();
} else if (
  birthState.toLowerCase() === 'no' ||
  birthState.toLowerCase() === 'n'
) {
  isNCor();
}
//console.log('The user answered ' + birthState + ' to question number tthree.');

let broniBro = prompt('Is one of my hobbies include being a Broni, yes or no?');
if (broniBro.toLowerCase() === 'no' || broniBro.toLowerCase() === 'n') {
  isCor();
} else if (broniBro.toLowerCase() === 'yes' || broniBro.toLowerCase() === 'y') {
  isNCor();
}
//console.log('The user answered ' + broniBro + ' to question number four.');

let happyWife = prompt('Am i happily married?, yes or no?');
if (happyWife.toLowerCase() === 'yes' || happyWife.toLowerCase() === 'y') {
  isCor();
} else if (
  happyWife.toLowerCase() === 'no' ||
  happyWife.toLowerCase() === 'n'
) {
  isNCor();
}
//console.log('The user answered ' + happyWife + ' to question number five.');

//Number Guessing game w/ random # generator
let mysteryNum = getRandomInt(10);
for (let i = 0; i < 4; i++) {
  let userGuess = prompt('Guess a number between 1 - 10.');
  let numberOFGuesses = i;
  if (userGuess > mysteryNum.toString()) {
    alert('Your guess was above the correct number. Guess again');
  } else if (userGuess < mysteryNum.toString()) {
    alert('Your guess was below the correct number. Guess again');
  } else if (userGuess === mysteryNum.toString()) {
    alert('That is Correct');
    correctAnswers++;
    break;
  }
  if (numberOFGuesses === 3) {
    alert('You are out of guesses. The Correct number was ' + mysteryNum + '.');
  }
  //console.log('I have run ' + i + 'times.');
  //console.log(mysteryNum);
}

// Fav Car Question
for (let i = 0; i < 6; i++) {
  let favCar = prompt(
    'Which Car do you think is my favorite?' +
      ' \nMustang ' +
      ' \n4Runner ' +
      ' \nEscalade ' +
      ' \nCamry ' +
      ' \nHellcat ' +
      ' \nBMW M3 '
  );
  let numberOFGuesses = i;
  if (numberOFGuesses === 5) {
    alert('You are out of guesses. The Correct answer was 4Runner');
  }

  const notFavCar = ['Mustang', 'Escalade', 'Camry', 'Hellcat', 'BMW M3'];
  console.log(notFavCar);
  

  //switch (favCar) {
  //case 'Mustang':
  //  alert('That is incorrect guess again.');
  //  //console.log('no');
  //  break;
  //case '4Runner':
  //  alert('That is Correct');
  //  correctAnswers++;
  //  console.log('yes');
  //  break;
  //case 'Escalade':
  //  alert('That is incorrect guess again.');
  //  console.log('no');
  //  break;
  //case 'Camry':
  //  alert('That is incorrect guess again.');
  //  console.log('no');
  //  break;
  //case 'Hellcat':
  //  alert('That is incorrect guess again.');
  //  console.log('no');
  //  break;
  //case 'BMW M3':
  //  alert('That is incorrect guess again.');
  //  console.log('no');
  //  break;
  //default:
  //  console.log('Not recognized');
  //  console.log('I have run ' + i + 'times.');
  //}
}

let finalResult = alert('Your final score is ' + correctAnswers + '/7.');
console.log(finalResult);
