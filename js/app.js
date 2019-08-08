'use.strict';

// Say Hello and ask for user name
var username = prompt('Hello! Thank you for visiting my profile! My name is Karina. What is your name?');
console.log('Username is ' + username);

// Ask user to play a guessing game
var playGame = confirm('Hi '+ username +'! It is so nice to meet you :) \nDo you want to play a little guessing game with me?');

// Start the Game
if (playGame) {
  confirm('Yay! Are you ready? Here comes the first question!');

  var point = 0;
  // Question 1 - Yes/No or Y/N
  var nationality = prompt('Q1. Was I orginally from Canada? Yes/No').toLowerCase();
  if (nationality[0] === 'y') {
    console.log('Q1. Nationality = wrong');
  }
  else {
    console.log('Q1. Nationality = correct');
  }

  if (nationality[0] === 'n') {
    alert('You got it right!');
    point++;
  }
  else {
    alert('Sorry that is not correct.');
  }

  // Questions 2 - Yes/No or Y/N
  var major = prompt('Q2. Did I major in Construction Management in college? Yes/No').toLowerCase();
  if (major[0] === 'y') {
    console.log('Q2. Major = correct');
  }
  else {
    console.log('Q2. Major = wrong');
  }
  if (major[0] === 'y'){
    alert('You got it right!');
    point++;
  }
  else {
    alert('Sorry that is not correct.');
  }

  // Question 3 - Yes/No or Y/N
  var moveTime = prompt('Q3. Did I move to USA 7 years ago? Yes/No').toLowerCase();
  if (moveTime[0] === 'y') {
    console.log('Q3. Move Time to USA = wrong');
  }
  else {
    console.log('Q3. Move Time to USA = correct');
  }
  if (moveTime[0] === 'n'){
    alert('You got it right!');
    point++;
  }
  else {
    alert('Sorry that is not correct.');
  }

  // Question 4 - Yes/No or Y/N
  var country = prompt('Q4. Have I ever been to Spain? Yes/No').toLowerCase();
  if (country[0] === 'y') {
    console.log('Q4. Been to Spain = wrong');
  }
  else {
    console.log('Q4. Been to Spain = correct');
  }
  if (country[0] === 'n'){
    alert('You got it right!');
    point++;
  }
  else {
    alert('Sorry that is not correct.');
  }

  // Question 5 - Yes/No or Y/N
  var fruit = prompt('Q5. Do I like to eat bananas? Yes/No').toLowerCase();
  if (fruit[0] === 'y') {
    console.log('Q5. Like Bananas = wrong');
  }
  else {
    console.log('Q5. Like Bananas = correct');
  }
  if (fruit[0] === 'n'){
    alert('You got it right!');
    point++;
  }
  else {
    alert('Sorry that is not correct.');
  }

  // Question 6 - Answer in a number. Has 4 attempts.
  for (var attempt = 1; attempt <= 4; attempt++) {
    var guessRight = false;
    var toyCars = parseInt(prompt('Q6. I love toy cars so much! They are my favorite collections since I was 3! Guess how many toy cars I have?'));
    if (toyCars === 180) {
      alert('You guessed it right!');
      point++;
      guessRight = true;
      console.log('Q6. Toy Cars Quantity = correct');
    }
    else if (toyCars > 180) {
      alert('Your answer is too high. Go lower!');
      console.log('Q6. Toy Cars Quantity = wrong');
    }
    else if (toyCars <180) {
      alert('Your answer is too low. Go higher!');
      console.log('Q6. Toy Cars Quantity = wrong');
    }
    else {
      alert('Please answer a number.');
      console.log('Q6. Toy Cars Quantity = Not a number');
    }
    if(guessRight) {
      break;
    }
  }

  // Question 7 - Guess one of the elements in the array. Has 6 attempts.
  var itemForIsland = ['water', 'music', 'kleenex', 'lip balm', 'sunscreen', 'bug spray', 'coloring book', 'twizzer', 'photos', 'boyfriend'];

  var guessWrong = false;
  var rightItem = false;
  for (var x = 1; x < 7; x++) {
    for (var p = 0; p < itemForIsland.length; p++) {
      var guessThing = prompt('Q7. Can you guess what things I would need if I were on a deserted island?\nYou have 6 times to get a correct answer for one of the 10 items :)');
      if (guessThing.toLowerCase() === itemForIsland[p]) {
        alert('Wow you guess it right!');
        point++;
        console.log('Q7. Things Needed for a Deserted Island = correct');
        rightItem = true;
      }
      else {
        alert('That is not one of the things I need. Try again!');
        console.log('Q7. Things Needed for a Deserted Island = wrong, user answered: ' + guessThing);
        guessWrong = true;
      }
      if (rightItem) {
        break;
      }
    }
    if (rightItem) {
      break;
    }
  }
  alert('These are the things I would need:\n' + itemForIsland);

  // Count Home Many Correct Answers
  alert('Thank you for playing this game with me ' + username +'! You got ' + point + 'out of 7 questions right! Hope you had fun!');
  console.log('User got ' + point + ' out of 10 correct.');
}
else {
  alert('Aww I really wanted to play this game with you! Maybe next time!');
}
