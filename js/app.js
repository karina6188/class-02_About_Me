'use.strict';

var name = prompt('Hello! Thank you for visiting my profile! My name is Karina. What is your name?');
var playGame = confirm('Hi '+ name +'! It is so nice to meet you :) \nDo you want to play a little guessing game with me?');

if (playGame) {
  confirm('Yay! Are you ready? Here comes the first question!');

  var nationality = prompt('Q1. Was I orginally from Canada? Yes/No').toLowerCase();
  if (nationality[0] === 'y') {
    console.log('Q1. Nationality = wrong');
  }
  else {
    console.log('Q1. Nationality = correct');
  }

  if (nationality[0] === 'n') {
    alert('You got it right!');
  }
  else {
    alert('Sorry that is not correct.');
  }

  var major = prompt('Q2. Did I major in Construction Management in college? Yes/No').toLowerCase();
  if (major[0] === 'y') {
    console.log('Q2. Major = correct');
  }
  else {
    console.log('Q2. Major = wrong');
  }
  if (major[0] === 'y'){
    alert('You got it right!');
  }
  else {
    alert('Sorry that is not correct.');
  }

  var moveTime = prompt('Q3. Did I move to USA 7 years ago? Yes/No').toLowerCase();
  if (moveTime[0] === 'y') {
    console.log('Q3. Move Time to USA = wrong');
  }
  else {
    console.log('Q3. Move Time to USA = correct');
  }
  if (moveTime[0] === 'n'){
    alert('You got it right!');
  }
  else {
    alert('Sorry that is not correct.');
  }

  var country = prompt('Q4. Have I ever been to Spain? Yes/No').toLowerCase();
  if (country[0] === 'y') {
    console.log('Q4. Been to Spain = wrong');
  }
  else {
    console.log('Q4. Been to Spain = correct');
  }
  if (country[0] === 'n'){
    alert('You got it right!');
  }
  else {
    alert('Sorry that is not correct.');
  }

  var fruit = prompt('Wow! You made it to the last question.\nQ5. Do I like to eat bananas? Yes/No').toLowerCase();
  if (fruit[0] === 'y') {
    console.log('Q5. Like Bananas = wrong');
  }
  else {
    console.log('Q5. Like Bananas = correct');
  }
  if (fruit[0] === 'n'){
    alert('You got it right!');
  }
  else {
    alert('Sorry that is not correct.');
  }

  confirm ('Thank you for playing this game with me ' + name +'! Hope you had fun! Now I\'m taking you to my profile so you can know more about me.');
}
else {
  alert('Aww I really wanted to play this game with you! Maybe next time!');}
