//TPOIC   
/* The below is an example of the simplest 
implementation of an array data structure. 

This is known as a one-dimensional array,
 meaning it only has one level, or that it does not have any
  other arrays nested within it. Notice it contains booleans, 
  strings, and numbers, among other valid JavaScript 
  data types:*/

let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);

//The console.log call displays 7.

/* VER IMPORTANT ARRAY INFORMATION

All arrays have a length property, which as shown above, 
can be very easily accessed with the syntax Array.length. 

A more complex implementation of an array can be seen below. 
This is known as a multi-dimensional array, 
or an array that contains other arrays. 

 Arrays are also capable of storing complex objects.

*/




//TOPIC Use an Array to Store a Collection of Data 58

/*Problem Explanation

In JS, Arrays are one of the most commonly used data structure. Unlike other languages Arrays in JS can store different data types and can also change their size on runtime and hence are also referred as “Dynamic Arrays”. They are also 0 indexed.

Arrays can be initialized in different ways:

Array literals
Array constructors

In this challenge we’ll focus on Array literals. 

To initialize an array we simply do let arr = [];

We can add values to this arr
ay by accessing its index, 
example:*/

let arr = [];
arr[0] = "hello";
console.log(arr); // ["hello"]

//We can also initialize the values in the array 
//when we declare it, example:

let ourArray = [1, 2, 3, "John"];
console.log(ourArray.length);



// Arrays with Object

let complexArray = [
    
    [
      {
        one: 1,
        two: 2
      },
      {
        three: 3,
        four: 4
      }
    ],
    [
      {
        a: "a",
        b: "b"
      },
      {
        c: "c",
        d: "d"
      }
    ]
  ];
let arrayVariable = complexArray[2, 1]; //to access an array

complexArray[1] = "moive time"; // change/ add a new array object

console.log(complexArray);  // cheang/ add a new array objects

console.log(arrayVariable); // output of the access

console.log(complexArray.length); // checking lenght of array

  //EXERCISE   
  /*
Define a variable called yourArray. 
Complete the statement by assigning an array of 
at least 5 elements in length to the yourArray variable.
 Your array should contain at least one string, one number,
  and one boolean.
  */


  //SOLUTION
  let yourArray = [
    "Emeka", 4, 7, true, null 
  ];
  
  console.table(yourArray.length);


  //




  //TOPIC   Access an Array's Contents Using Bracket Notation

/*  The fundamental feature of any data structure is, 
of course, the ability to not only store data, but to
 be able to retrieve that data on command. So, now that
  we've learned how to create an array, let's begin to 
  think about how we can access that array's information.

When we define a simple array as seen below, 
there are 3 items in it:
*/
let checkArray = ["man", "b", "c"];
//In an array, each array item has an index. 

/*
This index doubles as the position of that item in the array,
 and how you reference it. However, it is important to note, 
 that JavaScript arrays are zero-indexed, meaning that the 
 first element of an array is actually at the zeroth position,
  not the first. 
  
  In order to retrieve an element from an array
   we can enclose an index in brackets and append it to the
    end of an array, or more commonly, to a variable which 
    references an array object. 
    
    This is known as bracket notation. 
    For example, if we want to retrieve the a 
    from ourArray and assign it to a variable, 
    we can do so with the following code:*/

let makeVariable = checkArray[0];
console.log(makeVariable);
//Now ourVariable has the value of man.


//ACCESSING INDEX VALUE OF AN ARRAY using BRACKET NOTATION

/*In addition to accessing the value associated with 
an index, you can also set an index to a value using the 
same notation: */

checkArray[1] = "not man anymore";
console.log(checkArray);
/*Using bracket notation, we have now reset the item at 
index 1 from the string b, to not b anymore. 

Now ourArray is ["man", "not b anymore", "c"].


//EXERCISE

In order to complete this challenge, set the 
2nd position (index 1) of myArray to anything you want, 
besides the letter b.

*/ 

//SOLUTION

  let urArray = ["children", "women", "man", "old"];
// Only change code below this line

urArray[1] = "i'm a happy woman";  // change/adding a new array
let makeArray = urArray[0]; // access array a with index 0.

// Only change code above this line
console.log(urArray);  // checking the new addeded array
console.log (makeArray);  // accessing array





//TOPIC  Add Items to an Array with push() and unshift()

/*An array's length, like the data types it can contain, 
is not fixed. Arrays can be defined with a length of any 
number of elements, and elements can be added or removed 
over time; in other words, arrays are mutable. 

In this challenge, we will look at two methods with which 
we can programmatically modify an array: 

//Array.push() and Array.unshift().

Both methods take one or more elements as parameters and 
add those elements to the array the method is being called on;

 //the push() method adds elements to the end of an array, 
 //unshift() adds elements to the beginning. */
 
 //Consider the following: EXERCISE

let father = 'Chima';
let kidsFamily = ['Genesis', 'Titi'];

kidsFamily.unshift('Florence', 'Perfect'); // add

//console.log(kidsFamily.unshift('Florence', 'Perfect'))

console.log(kidsFamily);

// takes all kidsFamily plus the new array
//Output Family ['Florence', 'Perfect', 'Genesis', 'Titi'].

let family = kidsFamily.push(father); // adds Chima at the end

console.log(kidsFamily);
console.log(family);

// final result of kidsFamily with unshift and push
// = ['Florence', 'Perfect', 'Genesis', 'Titi', 'Chima']. 

/*
Notice that we can also pass variables, which allows
 us even greater flexibility in dynamically modifying 
 our array's data.*/




 //EXERCISE PASS AN ARRAY AS AN ARGUMENT
 // BY MODIFYING THE FUNCTION USING .push() and .unshift()

 /*We have defined a function, mixedNumbers, which we are
  passing an array as an argument. Modify the function by 
  using push() and unshift() to add 'I', 2, 'three' to the
   beginning of the array and 7, 'VIII', 9 to the end so 
   that the returned array contains representations of 
   the numbers 1-9 in order.*/


   function mixedNumbers(arr) {
    // Only change code below this line
  arr.unshift('I', 2, 'three');
  arr.push(7, 'VIII', 9);
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));




  // TOPIC  Remove Items from an Array with pop() and shift()

/*  Both push() and unshift() have corresponding methods that
 are nearly functional opposites: pop() and shift(). 
 
 As you may have guessed by now, instead of adding, pop() 
 removes an element from the end of an array, while shift() 
 removes an element from the beginning. The key difference
  between pop() and shift() and their cousins push() and 
  unshift(), is that neither method takes parameters, and 
  
  each only allows an array to be modified by a single element
   at a time.

Let's take a look:*/

//EXERCISE

let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
//greetings would have the value ['whats up?', 'hello'].

greetings.shift();

console.log(greetings);

//greetings would have the value ['hello'].

/*We can also return the value of the removed element
 with either method like this:*/

let popped = greetings.pop();

console.log(popped);
//greetings would have the value [], and popped would 
//have the value hello.



// EXERCISE


//QUESTION

/*We have defined a function, popShift, which takes 
an array as an argument and returns a new array.
 Modify the function, using pop() and shift(), to remove 
 the first and last elements of the argument array, and 
 assign the removed elements to their corresponding 
 variables, so that the returned array contains their values.*/

/*HINT

popShift(["challenge", "is", "not", "complete"]) should return ["challenge", "complete"]
Passed:The popShift function should utilize the pop() method
Passed:The popShift function should utilize the shift() method

*/



//ANSWER

function popShift(arr) {
    let popped = arr.pop('complete'); // Change this line
    let shifted = arr.shift('challenge'); // Change this line
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));

  //OUTPUT ['challenge', 'complete']





  //TOPIC  Remove Items Using splice()

/*  Ok, so we've learned how to remove elements from the 
beginning and end of arrays using shift() and pop(), 

but what if we want to remove an element from somewhere 

in the middle? Or remove more than one element at once? Well,
 that's where splice() comes in. splice() allows us to do just
  that: remove any number of consecutive elements from anywhere
   in an array.

//splice() can take up to 3 parameters, but for now, 
we'll focus on just the first 2. The first two parameters 
of splice() are integers which represent indexes, or positions,
 of items in the array that splice() is being called upon.
 
 And remember, arrays are zero-indexed, so to indicate the 
 first element of an array, we would use 0. splice()'s
  first parameter represents the index on the array from
   which to begin removing elements, while the second parameter
    indicates the number of elements to delete. For example:
    */

let sliceArray = ['today', 'was', 'not', 'so', 'great'];

sliceArray.splice(2, 2);
console.log(sliceArray);

//Here we remove 2 elements, beginning with the third 
//element (at index 2). array would have the value 
//['today', 'was', 'great'].

/*splice() not only modifies the array it's being called on,

//IMPORTANT

but it also returns a new array containing the value of the 
removed elements:
*/

let removeSliceArray = ['I', 'am', 'feeling', 'good', 'really', 'happy'];

let newArray = removeSliceArray.splice(4, 2);

console.log(newArray);

//newArray has the value ['really', 'happy'].

//To see the remaining slice value

 removeSliceArray.slice(0, 1, 2, 3)
// the slice remaining value ['I', 'am', 'feeling', 'good']
console.log(removeSliceArray);




//  EXERCISE
/*We've initialized an array arr. Use splice() to remove 
elements from arr, so that it only contains elements 
that sum to the value of 10.*/



//HINT

/* You should not change the original line of const arr = [2, 4, 5, 1, 7, 5, 2, 1];.
Passed:arr should only contain elements that sum to 10.
Passed:Your code should utilize the splice() method on arr.
Passed:The splice should only remove elements from arr and
 not add any additional elements to arr
 
 const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line

// Only change code above this line
console.log(arr);
 
 */

 //SOLUTION

 const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
// Only change code below this line

// Only change code above this line
console.log(arr);

//Output [2,5,2,1]





//TOPIC   Add Items Using splice()

/*Remember in the last challenge we mentioned that splice()
 can take up to three parameters? Well, you can use the third
  parameter, comprised of one or more element(s), to add to 
  the array. This can be incredibly useful for quickly 
  switching out an element, or a set of elements, for another.*/

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);

/*The second occurrence of 12 is removed, 
and we add 13 and 14 at the same index. The numbers array 
would now be [ 10, 11, 12, 13, 14, 15 ].*/

/*Here, we begin with an array of numbers. Then, we pass the 
following to splice(): The index at which to begin deleting
 elements (3), the number of elements to be deleted (1), and 
 the remaining arguments (13, 14) will be inserted starting at
  that same index. Note that there can be any number of 
  elements (separated by commas) following amountToDelete, 
  each of which gets inserted.*/

//EXERCISE 
/*Define a function, htmlColorNames, which takes an array 
of HTML colors as an argument. Modify the function using 
splice() to remove the first two elements of the array and
 add 'DarkSalmon' and 'BlanchedAlmond' in their respective
  places*/

  //SOLUTION

  function htmlColorNames(arr) {
    // Only change code below this line
  
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond' )
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 
  'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));


//OUTPUT
/* [ 'DarkSalmon',
  'BlanchedAlmond',
  'WhiteSmoke',
  'LavenderBlush',
  'PaleTurquoise',
  'FireBrick' ]*/





