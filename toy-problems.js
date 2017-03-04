/* Make sure you do these last */

/*

Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

plusOneSum([1, 2, 3, 4]); // 14

*/

var arr = [1, 2, 3, 4];
function add(a, b) {
  return a + b;
}

function plusOneSum(arr) {
  var plus = arr.map(function(num) {
    return num + 1;
  });

  var total = plus.reduce(add);

  console.log("total is " + total);
}

plusOneSum(arr);

/*

Write a function that accepts a multi dimensional array and returns a flattened version.

flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

*/

function flatten(arr) {
  var newarr = [];
  for(var i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      var next = flatten(arr[i]);
      /*https://davidwalsh.name/merge-arrays-javascript*/
      Array.prototype.push.apply(newarr, next);
    } else {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}

var arr = [1, 2, [3, [4], 5, 6], 7];
myarr = flatten(arr);
console.log(myarr);

/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN]
convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/
var arr = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3', 'c4', 'd1', 'd2'];
console.log(arr);
function sorter(arr) {
  var obj = {};
  for(var i = 0; i < arr.length; i++) {
    var s = arr[i].split('');
    var pos = s[s.length-1];
    if(!Array.isArray(obj[pos])) {
      obj[pos] = [];
    }
    obj[pos].push(arr[i]);
  }

  var flat = [];
  for(key in obj) {
    for(var i = 0; i < obj[key].length; i++) {
      flat.push(obj[key][i]);
    }
  }
  return flat;
}

console.log(sorter(arr));

/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and
deleting a random element. Given these two arrays, find which element is missing in the second array.

*/

var numbers = [18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 30];

var getRandomArbitrary = function(seed) {
  if(seed === undefined) seed = 30;
  return Math.floor(Math.random() * (seed - 0) + 0);
}

function swap(arr, i, j) {
  var old = arr[i];
  arr[i] = arr[j];
  arr[j] = old;
  return arr;
}

function shuffle(arr) {
  var ran1 = getRandomArbitrary(arr.length);
  var ran2 = getRandomArbitrary(arr.length);
  if(ran1 !== ran2) {
    arr = swap(arr, ran1, ran2);
  }
  return arr;
}

function compare(arr1, arr2) {
  for(var i = 0; i < arr1.length; i++) {
    var index = arr2.indexOf(arr1[i]);
    if(index === -1) {
      return arr1[i];
    }
  }

  return -1;
}

function guessIt(arr) {
  console.log("before", arr);
  var newarr = [];
  Array.prototype.push.apply(newarr, arr); //clone array so we have different ones
  for(var i = 0; i < (newarr.length / 2); i++) {
    shuffle(newarr);
  }

  var ran = getRandomArbitrary(newarr.length);
  newarr.splice(ran, 1);

  console.log("after", newarr);
  console.log("missing", compare(arr, newarr));
}

guessIt(numbers);

/*

Write a function that returns the longest word(s) from a sentence. The function should not return any
duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

*/


/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of
these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/
function multiples() {
  var total = 0;
  for(var i = 1; i < 1000; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      total += i;
      console.log("num:" + i);
      if(i % 3 === 0) {
      console.log(".....divide by 3");
      }

      if(i % 5 === 0) {
      console.log('.....divide by 5');
      }
    }
  }
  console.log("total:" + total);
}

multiples();

/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/



/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/

/*
Create a function that goes through the numbers 1-100
if the number is divisible by 3, console log "Fizz"
if the number is divisible by 5, console log "Buzz"
if the number is divisible by both, console log "FizzBuzz"
otherwise, just console log the number
*/

function fizz() {
  for(var i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz..", i);
    } else if (i % 3 === 0) {
      console.log("Fizz..", i);
    } else if(i % 5 === 0) {
      console.log("Buzz..", i);
    } else {
      console.log(i);
    }
  }
}

fizz();


/*Check if string is palindrome*/
function palindrome(str) {
  str = str.split(' ').join('').toLower();
  var check = str.split('').reverse().join('');
  if(check === str) {
    return true;
  } else {
    return false;
  }

}

/*
condition1 //if this is truthy 'Savings'
condition2 //if this is truthy 'Debits'
condition3 //if this is truty 'Retirement'
*/
var ourArray = [];
var c1 = "Savings";
var c2 = "Debits";
var c3 = "Retirement";

function testConditions(condition1, condition2, condition3) {
  if(condition1 && ourArray.indexOf(c1) === -1) {
    ourArray.push(c1);
  }

  if(condition2 && ourArray.indexOf(c2) === -1) {
    ourArray.push(c2);
  }

  if(condition3 && ourArray.indexOf(c3) === -1) {
    ourArray.push(c3);
  }
}

testConditions(true, false, true);
document.write(ourArray);

var animals = [
  {
    name: 'lion',
    isMammal: true
  },
  {
    name: 'monkey',
    isMammal : true
  },
  {
    name: 'dragon',
    isMammal: false
  },
  {
    name:'shark',
    isMammal : false
  }
];

var noMammals = animals.filter(function(animal) {
  return !animal.isMammal;
});

animals.forEach(function(item) {
  item.isAnimal = true;
});

console.log(animals);
console.log(noMammals);

var cond1 = true;
var cond2 = false;
var cond3 = true;

var arr = [
  cond1 ? 'lion' : null, //cond1 && 'lion'
  cond2 ? 'shark' : null, //cond2 && 'shark'
  cond3 ? 'dragon' : null //cond3 && 'dragon'
].filter(function(item) {return item});
console.log(arr);


/*
http://www.programmerinterview.com/index.php/puzzles/25-horses-3-fastest-5-races-puzzle/
25 horses
 you can race 5 at a time
 find the 3 fastest horses in least amount of races

 5 --> 3
 5 --> 3  | 5 --> 3
 5 --> 3  | 5 --> 3 | 5 --> 3
 5 --> 3  | 5 --> 3 | 5 --> 3 | 5 --> 3
 5 --> 3  | 5 --> 3 | 5 --> 3 | 5 --> 3 | 5 --> 3

 X X X X X
 X X X X X
 X X X X X
 X X X X X
 X X X X X

 X X X X X
 X X X X
 X X X X
 X X X X
 X X X X

 X X X X X
 X X X
 X X X
 X X X
 X X X

 X X X X X
 X X
 X X
 X X
 X X

 X X X X X
 X X
 X
*/
