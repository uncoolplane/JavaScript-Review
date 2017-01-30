//Create a Animal Constructor that has the following parameters. species, name, legs, color, food
//(which is an array of foods they can eat).
document.write("<h2>Constructor Review</h2>");

function Animal(species, name, legs, color, food) {
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
}

//Now create a person function that creates an object and returns it (not in constructor form)
//that has the following parameters. name, age, height, gender

function Person(name, age, height, gender) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.gender = gender;
}

//Create a animal array and a person array.

var animals = [];
var persons = [];

//Create two instances of Animal and push those into your animal array
//species, name, legs, color, food
var a1 = new Animal("dog", "Spot", 4, "brown", ["beef", "chicken"]);
var a2 = new Animal("duck", "Daffy", 2, "white", ["bugs", "rocks"]);
animals.push(a1);
animals.push(a2);

//Create two instances of person and push those into your person array.
//name, age, height, gender

var u1 = new Person("Bob", 23, 80, "M");
var u2 = new Person("Sue", 82, 72, "F");

persons.push(p1);
persons.push(p2);

//Now we want every instance of Animal to have a eat method. This method will choose a random item in \
//that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".



//At this point, if we wanted to add something to every istance of person could we?

  //Yes or no? and why or why not?



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  2) What's a good way to describe the keyword 'this'
  3) Can a normal function which creates an object and then returns that object use the prototype?
  4) What happens if you forget to use 'new' when calling a constructor?
*/
