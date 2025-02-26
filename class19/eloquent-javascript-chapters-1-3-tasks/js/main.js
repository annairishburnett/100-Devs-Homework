//NOTE: ELOQUENT JAVASCRIPT Chapter 1 does not have any coding tasks


//ELOQUENT JAVASCRIPT
//Chapter 2: Program Structure
//https://eloquentjavascript.net/3rd_edition/02_program_structure.html

//EXERCISES





// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######
// It may be useful to know that you can find the length of a string by writing .length after it.

let abc = "abc";
console.log(abc.length);
// → 3
// Most exercises contain a piece of code that you can modify to solve the exercise. Remember that you can click code blocks to edit them.



for(let i = 0; i < 7; i++){
  let str = '';
  for(let j = 0; j <= i; j++){
    str += '#';
  }
  console.log(str);
}




// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// (This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)



function fizzBuzz(){
  for(let i = 1; i <= 100; i++){
      if((i % 3 === 0) && (i % 5 === 0)){
          console.log('FizzBuzz');
      }else if(i % 3 === 0){
          console.log('Fizz');
      }else if(i % 5 === 0){
          console.log('Buzz');
      }else{
          console.log(i);
      }
  }
}

fizzBuzz();





// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.



let size = 8;
let board = '';

for(let row = 0; row < size; row++){
  for(let col = 0; col < size; col++){
    if((row + col) % 2 === 0){
      board += ' ';
    }else{
      board += '#';
    }
  }
  board += '\n';
}

console.log(board);









//ELOQUENT JAVASCRIPT
//Chapter 3: Functions
//https://eloquentjavascript.net/3rd_edition/03_functions.html

//EXERCISES



// Minimum
// The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.

// Your code here.

function min(n1,n2){
  return Math.min(n1, n2)
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10





// Recursion
// We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

    // Zero is even.
    // One is odd.
    // For any other number N, its evenness is the same as N - 2.

// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
//For -1 got error: "Maximum call stack size exceeded". -1 it would continue to call the recursive function over and over again because the number would never equal 0 or 1, but rather an increasingly small negative number. Make it an absolute value?

// Your code here.

function isEven(num){
  if(num === 0){
    return true;
  }else if(num === 1){
    return false;
  }else{
    return isEven(Math.abs(num - 2));//Yes! Making it an absolute value worked! 
  }
}



console.log(isEven(50));// → true
console.log(isEven(75));// → false
console.log(isEven(-1));// → ??







// Bean counting
// You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

// Your code here.


function countBs(str){
  let count = 0;
  let arr = str.toLowerCase().split('');

  for(let char of arr){
     if(char === 'b'){
        count++
      }
  }
  return count;
}



function countChar(str, letter){
  let count = 0;
  let arr = str.toLowerCase().split('');

  for(let char of arr){
    if(char === letter){
      count++
    }
  }
  return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4