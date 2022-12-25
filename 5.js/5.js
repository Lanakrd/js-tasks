/* Task1
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!*/

function removeEveryOther(arr){
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        result.push(arr[i]);
      }
    }
    return result;
  }

/* Task 2
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */

function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
      }
    }
    return sum;
  };

  /*Task 3
  You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */

function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 };

  /* Task 4
  Complete the method that takes a sequence of objects with two keys each: country or state, and capital. Keys may be symbols or strings.

The method should return an array of sentences declaring the state or country and its capital.

Examples
state_capitals = [{state: 'Maine', capital: 'Augusta'}]
capital(state_capitals)[0] // returns "The capital of Maine is Augusta"

country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
capital(country_capitals)[0]  // returns "The capital of Spain is Madrid"

mixed_capitals: [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]
capital(mixed_capitals)[1] // returns "The capital of Spain is Madrid"*/

  function capital(seq) {
    return seq.map(function(obj) {
      let entity = 'state';
      if (obj.country) {
        entity = 'country';
      }
      return `The capital of ${obj[entity]} is ${obj.capital}`;
    });
  };

  /* Task 5
  Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"] */
  function fizzbuzz(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result.push("FizzBuzz");
      } else if (i % 3 === 0) {
        result.push("Fizz");
      } else if (i % 5 === 0) {
        result.push("Buzz");
      } else {
        result.push(i);
      }
    }
    return result;
  }


  /* Task 6
  Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.*/

  function findShort(str){
    let words = str.split(' ');
    let shortestWordLength = Infinity;
    for (let i = 0; i < words.length; i++) {
      let wordLength = words[i].length;
      if (wordLength < shortestWordLength) {
        shortestWordLength = wordLength;
      }
    }
    return shortestWordLength;
  }

  /*Task 7 
  In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
  */

function squareDigits(num){
    return +((num+'').split('').map(value=>value*value).join(''))
     
   };


  /*Task 8
  Create function inter getting 2 sets as arguments and returning a new Set as result of intersection of these 2 sets.

Examples:
A = new Set([1,2]);
B = new Set([2,3]);

C = inter(A,B) // -> {2} */

function inter(set1, set2) {
    let result = new Set();
    set1.forEach(function(element) {
      if (set2.has(element)) {
        result.add(element);
      }
    });
    return result;
  };

  /*Task 9
  Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

Return as a number.
   */
  function sumMixedArr(arr){
    let sum =0;
    arr.map(function(element){
        sum += parseInt(element);
    })
    return sum;
  }



  /*Task 10
  Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

  */

  function findOdd(A) {
    let count = {};
    A.forEach(v => {
      count[v] = count[v] ? count[v] + 1 : 1;
    });
    return +Object.keys(count).find(key => count[key] % 2 === 1);
  };
 
  /*Task 11
  You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number) */

  function findOutlier(int){
    let even = int.filter(a=>a%2==0);
    let odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
  };

  /* Task 12
  zipWith takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
The function value is one new array.

If the arrays are of unequal length, the output will only be as long as the shorter one.
(Values of the longer array are simply not used.)

Inputs should not be modified.

Examples
zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]

zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both forms are valid.
zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both are functions.
  */

  function zipWith(fn,a0,a1) {
    let arr = [];
    const short = Math.min(a0.length, a1.length); 
    for (let i=0;i<short;i++){
      arr.push(fn(a0[i],a1[i]))
    }
    return arr
  };