/* eslint-disable no-unused-vars */
'use.strict';

// Say Hello and ask for user name
var username = prompt('Hello! Thank you for visiting my profile! My name is Karina. What is your name?');
console.log('Username is ' + username);

// Ask user to play a guessing game
var playGame = confirm('Hi ' + username + '! It is so nice to meet you :) \nDo you want to play a little guessing game with me?');

// Start the Game
if (playGame) {
  confirm('Yay! Are you ready? Here comes the first question!');

  var point = 0;
  // Question 1 - Yes/No or Y/N

  var nationality = prompt('Q1. Was I orginally from Canada? Yes/No').toLowerCase();

  switch (nationality.charAt(0)) {
  case 'n':
    console.log('Q1. Nationality = correct');
    alert('You got it right!');
    point++;
    break;
  case 'y':
    console.log('Q1. Nationality = wrong');
    alert('Sorry that is not correct.');
    break;
  default:
    console.log('Invalid Input...');
    alert('Sorry that is not correct.');
    break;
  }


  // Questions 2 - Yes/No or Y/N
  var major = prompt('Q2. Did I major in Construction Management in college? Yes/No').toLowerCase();
  switch (major.charAt(0)) {
  case 'y':
    console.log('Q2. Major = correct');
    alert('You got it right!');
    point++;
    break;
  case 'n':
    console.log('Q2. Major = wrong');
    alert('Sorry that is not correct.');
    break;
  default:
    console.log('Invalud Input...');
    alert('Sorry that is not correct.');
    break;
  }


  // Question 3 - Yes/No or Y/N
  var moveTime = prompt('Q3. Did I move to USA 7 years ago? Yes/No').toLowerCase();
  if (moveTime.startsWith(0) === 'y') {
    console.log('Q3. Move Time to USA = wrong');
    alert('Sorry that is not correct.');
  }
  else {
    console.log('Q3. Move Time to USA = correct');
    alert('You got it right!');
    point++;
  }


  // Question 4 - Yes/No or Y/N
  var country = prompt('Q4. Have I ever been to Spain? Yes/No').toLowerCase();
  switch (country.charAt(0)) {
  case'y':
    console.log('Q4. Been to Spain = wrong');
    alert('Sorry that is not correct.');
    break;
  case'n':
    console.log('Q4. Been to Spain = correct');
    alert('You got it right!');
    point++;
    break;
  default:
    console.log('Invalid Input...');
    alert('Sorry that is not correct.');
  }


  // Question 5 - Yes/No or Y/N
  var fruit = prompt('Q5. Do I like to eat bananas? Yes/No').toLowerCase();
  switch (fruit.charAt(0)) {
  case 'n':
    console.log('Q5. Like Bananas = wrong');
    alert('Sorry that is not correct.');
    break;
  case 'y':
    console.log('Q5. Like Bananas = correct');
    alert('You got it right!');
    point++;
    break;
  default:
    console.log('Invalid Input...');
    alert('Sorry that is not correct.');
  }


  // Question 6 - Answer in a number. Has 4 attempts.
  var guessNumberOfCarsRight = false;
  var numCarGuesses = 0;
  for (var attempt = 1; attempt <= 4; attempt++) {
    numCarGuesses++;
    var toyCars = parseInt(prompt('Q6. I love toy cars so much! They are my favorite collections since I was 3! Guess how many toy cars I have?'));
    if (toyCars === 180) {
      point++;
      guessNumberOfCarsRight = true;
      console.log('Q6. Toy Cars Quantity = correct');
      break;
    }
    else if (toyCars > 180) {
      alert('Your answer is too high. Go lower!');
      console.log('Q6. Toy Cars Quantity = wrong');
    }
    else if (toyCars < 180) {
      alert('Your answer is too low. Go higher!');
      console.log('Q6. Toy Cars Quantity = wrong');
    }
    else {
      alert('Please answer a number.');
      console.log('Q6. Toy Cars Quantity = Not a number');
    }
  }
  alert('After ' + numCarGuesses + ' guesses, you are ' + guessNumberOfCarsRight);


  // Question 7 - Guess one of the elements in the array. Has 6 attempts.
  var itemForIsland = ['water', 'music', 'kleenex', 'lip balm', 'sunscreen', 'bug spray', 'coloring book', 'twizzer', 'photos', 'boyfriend'];

  var islandGuess = false;
  var numIslandGuesses = 1;

  while (islandGuess === false && numIslandGuesses <= 7) {

    var guessThing = prompt('Q7. Can you guess what things I would need if I were on a deserted island?\nYou have 6 times to get a correct answer for one of the 10 items :)');

    for (var i = 0; i < itemForIsland.length; i++) {

      if (guessThing.toLowerCase() === itemForIsland[i]) {
        alert('Wow you guess it right!');
        point++;
        console.log('Q7. Things Needed for a Deserted Island = correct');
        islandGuess = true;
        break;
      }

    }

    if (!islandGuess) {
      alert('That is not one of the things I need. Try again!');
      console.log('Q7. Things Needed for a Deserted Island = wrong, user answered: ' + guessThing);
    }

    numIslandGuesses++;

  }

  alert('These are the things I would need:\n' + itemForIsland);

  // Count Home Many Correct Answers
  alert('Thank you for playing this game with me ' + username + '! You got ' + point + 'out of 7 questions right! Hope you had fun!');
  console.log('User got ' + point + ' out of 10 correct.');
}
else {
  alert('Aww I really wanted to play this game with you! Maybe next time!');
}

var howMany = function() {



  var count = prompt ('PLEASE ENTER YOUR BIRTH YEAR BELOW:');



  while ( isNaN(count) ) {



    count = prompt('PLEASE ENTER A YEAR - 4 DIGIT NUMBER');



  }



  return Number(count);

};



var today = new Date();



var date1 = today.getFullYear();



var date2 = howMany();



var date3 = date1 - date2;



if ( date3 > 18) {



  alert (username + '! Welcome to my site');



} else {



  alert (username +'! Bye bye');



  window.location = 'https://media.wired.com/photos/5bd262d4b1e96429a704ba17/master/w_942,c_limit/bloodyhand_top-1036615756.jpg';



}

