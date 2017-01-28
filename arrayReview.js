// Array.prototype.write = function() {
//   document.write("<ul>");
//   this.forEach(function(element, index) {
//     document.write("<li"> + index + element + "</li>");
//   })
//   document.write("</ul>");
// }

document.write("<h1>Javascript Review</h1>" + "<p>Click F12 to show console</p>");

document.write("<h2>Array Review</h2>");
var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

function last(array) {
  return array[array.length-1];
}

var mylast = last(threeItems);
document.write("Last Num:" + mylast + "<br>");

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//Loop through evenArray removing all values that aren't even
var evenArray = [1,2,3,6,22,98,45,23,22,12];

function findEven(arr) {
  return arr.filter(function(value, i, array) {
    return (value % 2 === 0);
  })
}
// evenArray.join().match(/\w?(\d+)*[24680]/g)
document.write("Even Array:" + findEven(evenArray) + "<br>");

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//below you're given a function that will return a random number between 0 and 30 and an array
//full or numbers 'randomArray'. Your job is to write a function that will get a random number,
//then loop through the array to see if that random number is in the array. If it is, alert true,
//if it's not, alert false
var getRandomArbitrary = function(seed) {
  if(seed === undefined) seed = 30;
  return Math.floor(Math.random() * (seed - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

function guessMyNumber() {
  var random = getRandomArbitrary(30);
  var index = randomArray.indexOf(random);
  if(index === -1) {
    document.write(random + " wasn't found<br>");
  } else {
    document.write("<b>" + random + " was found<br></b>");
  }
}

document.write("<p>Random Array = " + randomArray + "<br>");
for(var i = 0; i < 10; i++) {
  guessMyNumber();
}
document.write("</p>");

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run
//this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

function clone(arr1) {
  var clone = [];
  arr1.forEach(function(element, index) {
    clone.push(element);
  })
  return clone;
}

second = clone(first);
second.push(6, 7);

document.write("<p>Clone Array:<br>");
document.write(first + "<br>") //[1,2,3,4,5];
document.write(second) //[1,2,3,4,5,6,7];

document.write("</p>");

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

  document.write("<p>Longest Word for --" + sentence + "--</br>");

function longestWord(str) {
  var arr = str.split(" ");
  var word = "";
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].length > word.length) {
      word = arr[i];
    }
  }
  return word;
}

document.write("<b>" + longestWord(sentence) + "</b>");

  document.write("</p>");


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//write a function called capitalize that takes in the myPoem variable and capitalizes every word
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

function capWord(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalize(str) {
  var arr = str.split(" ");
  arr = arr.map(capWord);
  return arr.join(" ");
}

  document.write("<p>Capitalize:<br>");
  document.write(capitalize(myPoem));
  document.write("</p>");

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns
//how many vowels are in that string

function matchVowels(str) {
  return str.match(/[aeiou]/gi).length;
}

document.write("<p>");
document.write(theOdyssey + " has " + matchVowels(theOdyssey));
document.write("</p>");
