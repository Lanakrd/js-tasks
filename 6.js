/*Task 1
You are writing a function that takes two sets of arguments of arbitrary length. The return value will be the sum of the values of all of the arguments.

The function should contain at least 1 argument per set.

calculate(1)(1) // should return 2
calculate(1,1)(1) // should return 3
calculate(1,1)(1,-1) // should return 2
calculate(2,4)(3,7,1) // should return 17
 */

function calculate(...args1) {
  
  return function(...args2) {
    
    return [...args1, ...args2].reduce((acc, val) => acc + val, 0);
  }
}

console.log(calculate(1)(1));

/* Task 2
Description Your task is to implement our beloved Array.prototype.map function from a scratch, and yes, it has to be inside the Array's prototype. Don't know what a 'prototype' is? This could help you a little as well as this kata.

Moving on, the defaults for Array.prototype.map, Array.prototype.reduce, Array.prototype.reduceRight and Array.prototype.forEach will be banned, in other words you'll have to create map from scratch.

var one_to_nine = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var multiply_by_two = function(x) { return x * 2 };
var one_to_nine_doubled = one_to_nine.map(multiply_by_two);
// Expected
[2, 4, 6, 8, 10, 12, 16, 18]
#What do I want? I want you to create this basic, yet, really important algorithm from scratch by yourself.

The Basics

Array.prototype.map is a function that takes a callback function and an object as 'context'
The callback function should receive the current item, it's index and array object itself
The context will be this inside the callback function
NOTE

You should take into account that an array created by [] and a new Array(length) are entirely different on the content they posses and you should take into account that at the moment of building your solution.
A better illustration for that:
[1, 2, 3]; // { '0': 1, '1': 2, '2': 3, length: 3 }
new Array(3); // { length: 3 }

[1, 2, 3].concat([4]); // { '0': 1, '1': 2, '2': 3, '3': 4, length: 4 }
new Array(3).concat([4]); // { '3': 4, length: 4 }
That said, you should only apply the callback function to the items that the array posses
That said, Have a happy Coding.

#Oh, I almost forgot Your implementation for this map function should not modify the current array

var base_array = [1, 2, 3, 4, 5];
var mapped_array = base_array.map(function(item) { return item + 2 });

console.log(base_array); // [1, 2, 3, 4, 5]
console.log(mapped_array); // [3, 4, 5, 6, 7]*/

Array.prototype.map = function (callback,context){
    const length = this.length
    const arr = new Array(length)
    for (let i=0; i<length; i++){
      if (i in this){
        arr[i] = callback.call (context, this[i], i, this)
      }
    }
    return arr
  }



/* Task 3
 Your Task Implement our beloved Array,prototype.filter from scratch.

Example of Filter

var one_to_nine = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var lower_than_six = (x) => x < 6
var one_to_five = one_to_nine.filter(lower_than_six);
// Expected
[1, 2, 3, 4, 5]
Not allowed:

Array.prototype.filter
Array.prototype.forEach
I can't disable forEach since console.log needs it and the Test Cases require console.log implicitly, but please don't use it since forEach does most of the work.
Array.prototype.reduce/reduceRight
#What do I want? I want you to create this basic, yet, really important algorithm from scratch by yourself.

The Basics

Array.prototype.fiter is a function that takes a predicate function and an object as a context
The predicate function receives the current item, the index and the array itself
The context will be this inside the predicate function
NOTE

As always, take into account that an array built with [] and new Array(elemn1, elem2...) is different in content than a new Array(length).
[1, 2]; // { '0': 1, '1': 2, length: 2}
new Array(1, 2); // { '0': 1, '1': 2, length: 2}
new Array(2); // { length: 2 }

[1, 2].push(3); // {'0': 1, '1': 2, '2': 3, length: 3}
new Array(1, 2).push(3);  // {'0': 1, '1': 2, '2': 3, length: 3}
new Array(2).push(3); // { '2': 3, length: 3 }
That said, Happy Coding!

Another Note

Your implementation should not modify the current array:

var base_array = [1, 2, 3, 4, 5];
var mapped_array = base_array.filter(function(item) { return item < 3 });

console.log(base_array); // [1, 2, 3, 4, 5]
console.log(mapped_array); // [1, 2]
*/
Array.prototype.filter = function (fun, that) {
    let out = [];
  
    if (that) {
      fun = fun.bind(that);
    }
  
    let t = this;
    let len = t.length;
    for (let i = 0; i < len; i++) {
      if (i in t) {
        if (fun(t[i], i, t)) {
          out.push(t[i]);
        }
      }
    }
    return out;
  };

  /*Task 4
  You probably know about Function.prototype.bind method in JavaScript. It returns a copy of the original function but this function will always be called in the specified context. The problem is that you can't rebind another context any more.

var func = function () {
  return this.prop;
};
var obj1 = {prop: 1},
    obj2 = {prop: 2};
    
func = func.bind(obj1);
func(); // Will produce 1

func = func.bind(obj2);
func(); // Will also produce 1 :(
Your task is override the native Function.prototype.bind method by a new one that will allow you to rebind context multiple times. In this kata you don't need to worry about currying, testing function will never get params. */

  Function.prototype.bind = function (ctx) {
    return (childContext = ctx) => this.call(childContext, childContext);
  };

  /*Task 5 
  We want to create a function, which returns an array of functions, which return their index in the array. For better understanding, here an example:

var callbacks = createFunctions(5); // create an array, containing 5 functions

callbacks[0](); // must return 0
callbacks[3](); // must return 3
We already implemented that function, but when we actually run the code, the result doesn't look like what we expected. Can you spot, what's wrong with it? A test fixture is also available
  */
  function createFunctions(n) {
    let callbacks = [];
    for (let i = 0; i < n; i++) {
      callbacks.push(function() {
        return i;
      });
    }
    return callbacks;
  }

  /* Task 6
  There's no such thing as private properties on a coffeescript object! But, maybe there are?

Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods

getSecret() which returns the secret
setSecret() which sets the secret
obj = createSecretHolder(5)
obj.getSecret() # returns 5
obj.setSecret(2)
obj.getSecret() # returns 2
   */

function createSecretHolder(secret) {
    let value = secret;
    return {
      setSecret: (newValue) => {
        value = newValue;
      },
      getSecret: () => {
        return value;
      }
    }
  }

  /*Task 7
  Task
You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

Note: the scores will always be unique (so no duplicate values)

Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
   */
function myLanguages(results) {
    let arr = []
    for (let key in results){
      if (results[key] >= 60){
        arr.push(key)
      }
    }  
    return arr.sort((a, b) => results[b] - results[a])
  }

  /* Task 8
  Run-length encoding (RLE) is a very simple form of data compression in which runs of data (that is, sequences in which the same data value occurs in many consecutive data elements) are stored as a single data value and count, rather than as the original run. Wikipedia

Task
Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original string by replicating the character sx ix times and concatening all those strings. Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.

Examples
As the article states, RLE is a very simple form of data compression. It's only suitable for runs of data, as one can see in the following example:

runLengthEncoding("hello world!")
 //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
It's very effective if the same data value occurs in many consecutive data elements:

runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
 // => [[34,'a'], [3,'b']]*/

  var runLengthEncoding = function(str){
    let arr = [];
    let sum = 1;
    for (let i=0; i<str.length; i++){
    if(str[i] !== str[i+1]){
      arr.push([sum,str[i]]);
      sum = 1
    }else{
    sum++
    }
    }
    return arr // << fix this
  }

/*Task 9
Implement the method find which takes in an two parameters object and path. The path will be a period-delimited string of properties that we will use to traverse through our object to find our target value.

Check out this Codecast to get started! https://codecast.qualified.io/interaction/594197b92f524d001c1ab790

Edge Cases And Further Consideration
Be sure to handle passing array indices. For example, if we have an object: { people: ['John', 'Dave', 'Lisa'] } and the path is 'people.1', the target value is 'Dave' which is the string at position 1 inside of the people array.

Also this method should handle invalid paths. If we have an object { user: { name: 'Dan' } } and the path is 'user.wallet.money', we should return undefined. Valid paths are exclusive to properties on the object which are not inherited, in other words it is specific to this object and does not need to look up the prototype chain.
 */

function find(object, path) {
  path = path.split(".");

  for (let i = 0; i < path.length; i++) {
    if (object.hasOwnProperty(path[i])) {
      object = object[path[i]];
    } else {
      return undefined;
    }
  }
  return object;
}



/*Task 10
 Story
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  // First, check if the entered code is correct
  if (enteredCode !== correctCode) {
    return false;
  }

  // Next, convert the current date and expiration date to Date objects
  const current = new Date(currentDate);
  const expiration = new Date(expirationDate);

  // Check if the expiration date has passed
  // We use the getTime() method to compare the dates as numbers
  if (expiration.getTime() < current.getTime()) {
    return false;
  }

  // If the code is correct and the expiration date has not passed, return true
  return true;
}

/*Task 11 
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1
*/

function unluckyDays(year){
  let unlucky = 0;
  for (var i = 0; i < 12; i++) {
    if(new Date(year, i, 13).getDay() === 5){
      unlucky++;
    }
  }
  return unlucky;
}

/*Task 12
Given a Date (in JS and Ruby) or hours and minutes (in C and Python), return the angle between the two hands of a 12-hour analog clock in radians.

Notes:
The minute hand always points to the exact minute (there is no seconds hand).
The hour hand does not "snap" to the tick marks: e.g. at 6:30 the angle is not 0 because the hour hand is already half way between 6 and 7.
Return the smaller of the angles ( <= π ).
Return π if the hands are opposite.
Examples
at noon the angle is: 0
at 3:00 the angle is: π/2 (90 degrees)
at 6:00 the angle is: π (180 degrees)
at 9:00 the angle is: π/2 (90 degrees)
 */

function handAngle (date) {
  let hour = date.getHours();
  let min = date.getMinutes();
  let pi = Math.PI;
  if (hour === 12) hour = 0;
  if (hour === 0 && min === 0) return 0.0;
  let h1 = (hour * 5) / 30 * pi;
  let h2 = ((hour + 1) * 5) / 30 * pi;
  let h = h1 + ((h2 - h1) / 60 * min);
  let m = min/30 * pi;
  let deg = Math.max(h,m)-Math.min(h,m);
  if (deg > pi) {
    deg = 2*pi - deg;
  }
	return deg;
}