
document.write("<h2>Callback Review</h2>");

/* Declare and Define the functions here that will make the function calls below work properly */

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function first(arr, cb) {
  return cb(arr[0]);
}

first(names, function(firstName){
  document.write('The first name in names is ', firstName + "<br>");
});


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function last(arr, cb) {
  return cb(arr[arr.length-1]);
}

last(names, function(lastName){
  document.write('The last name in names is ', lastName + "<br>");
});


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//have the contains function return a boolean value for if the name is in the array or not.

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function contains(value, arr, cb) {
  var index = arr.indexOf(value);
  cb(index !== -1)
}

contains('Colt', names, function(yes){
  if(yes){
    document.write('Colt is in the array<br>');
  } else {
    document.write('Colt is not in the list<br>');
  }
});

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var numbers = [1,2,3,4,5];
//Produces a new array of values by mapping each value in list through a transformation function

function map(arr, cb) {
  return arr.map(cb);
}

document.write(numbers + "<br>");

var double = map(numbers, function(num){
  return num * 2; //returns an array of [2,4,6,8,10]
});

document.write(double + "<br>");

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function unique(arr, cb) {
  var newarr = [];
  for(var i = 0; i < arr.length; i++) {
    var index = newarr.indexOf(arr[i]);
    if(index === -1) {
      newarr.push(arr[i]);
    }
  }
  return cb(newarr);
}

document.write(names,"<br>");
unique(names, function(uniqArr){
  document.write('The new names array with all the duplicate items removed is ', uniqArr, '<br>');
});

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function each(arr, cb) {
  arr.forEach(cb);
}

each(names, function(item, indice){
  document.write('The item in the ' + indice + ' position is ' + item + "<br>")
});

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

function getUserById(id, arr, cb) {
  var index = 0;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].id === id) {
      index = i;
    }
  }

  cb(arr[index]);
}

getUserById('16t', users, function(user){
  document.write('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address);
});


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//Looks through each value in the list, returning the first one that passes a truth test
var numbers  = [1, 2, 3, 4, 5, 6];

function find(arr, cb) {
  return arr.filter(cb);
}

find(numbers, function(num){
  return num % 2 == 0; //should return 2
})
