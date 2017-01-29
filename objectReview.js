document.write("<h2>Object Review</h2>")

//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday.
//Have the values to those keys be your favorite thing in that category.

function Favorite(band, food, person, book, movie, holiday) {
    this.band = band;
    this.food = food;
    this.person = person;
    this.book = book;
    this.movie = movie;
    this.holiday = holiday;
}
Favorite.prototype.log = function() {
  document.write("<ul>")
    document.write("<li>" + this.band + "</li>");
    document.write("<li>" + this.food + "</li>");
    document.write("<li>" + this.person + "</li>");
    document.write("<li>" + this.book + "</li>");
    document.write("<li>" + this.movie + "</li>");
    document.write("<li>" + this.holiday + "</li>");
    if(this.hasOwnProperty("car")) {
      document.write("<li>" + this.car.brand + " " + this.car.make + "</li>");
    }
    document.write("</ul>");
}

function Car(make, brand) {
  this.make = make;
  this.brand = brand;
}

var favoriteThings = new Favorite("Ritchie", "Cake", "Calvin", "Anything", "With Kids", "Valentines");
document.write("Initialize<br>");
favoriteThings.log();

//After you've made your object, add another key named 'car' with the value being your favorite car and then
//another key named 'brand' with the value being your favorite brand.

favoriteThings.car = new Car("Chevy", "Impala");
document.write("Add Car<br>");
favoriteThings.log();

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your
//favoriteThings object to be '50 Shades of Gray'.
document.write("Change It<br>");

favoriteThings.food = "Lettuce";
favoriteThings.book = "50 Shades of Gray";

favoriteThings.log();

//Now, alert your favorite person, then alert your favorite book.

document.write("My favorite person is " + favoriteThings.person + "<br>");
document.write("My favorite book is " + favoriteThings.book  +"<br>");


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

user.log = function() {
  document.write("<ul>");
  for(key in this) {
    if(this.hasOwnProperty(key)) {
      document.write("<li>" + key + " " +this[key] + "</li>");
    }
  }
  document.write("</ul>");
}

//Above you're given a user object. Loop through the user object checking to make sure
//that each value is truthy. If it's not truthy, remove it from the object. hint: 'delete'.
document.write("<p>Nullify<br>");
user.log();
for(key in user) {
  if (!user[key]) {
    delete user[key];
  }
}

document.write("updated user:")
user.log();

document.write("</p>");

//Once you get your truthy object, Change the remaining values in the object to be
//specific to you (name: 'your name', username: 'your username'), rather than my information.

document.write("changed user:");
user.name = "Becky";
user.email = "mail@gmail.com";
user.username = "becky.hall";

//Now console.log your object and make sure it looks right.

user.log();

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//create an empty object called methodCollection.

var methodCollection = {
  alertHello : function() {
    alert("hello");
  },
  logHello : function() {
    console.log("hello");
  }
};

//Now add two methods (functions that are properties on objects) to your methodCollection object.
//One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello'
//to the console.

  //Now call your alertHello and logHello methods.

  // methodCollection.alertHello();
  methodCollection.logHello();

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//write a function called voweler that accepts a string, and returns an object with the
//keys being all the vowels in that string, and the values being how many times that particular
//vowel was in the string.
function voweler(str) {
  var stripped = str.match(/[aeiou]/gi);
  var counter = {};

  for(var i = 0; i < stripped.length; i++) {
      if(counter.hasOwnProperty(stripped[i])) {
          counter[stripped[i]] += 1;
      } else {
          counter[stripped[i]] = 1;
      }

  }

  document.write("<h3>" + str + "</h3>");
  document.write("<ul>");
  for(key in counter) {
    document.write("<li>" + key + "-->" + counter[key] + "</li>");
  }
  document.write("</ul>");
}

document.write("<p>Voweler Counter");
voweler("This is a test") //--> {i: 2, a: 1, e: 1};

var theOdyssey = "function expression or function declaration? Tis an obvious choice";
voweler(theOdyssey);
document.write("</p>");
