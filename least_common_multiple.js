
freeCodeCamp Challenge Guide: Smallest Common Multiple
Guide

camperbot
12 
8d
Smallest Common Multiple 36
Problem Explanation
The smallest common multiple between two numbers is the smallest number that both numbers can divide into. This concept can be extended to more than two numbers as well.

We can first start with just finding the smallest common multiple between two numbers. Naively, you can start writing out multiple of each number until you write a multiple that exists from both numbers.

An example would be the numbers 3 and 4. The multiples of 3 are 3, 6, 9, 12, 15, 18, ... and the multiples of 4 are 4, 8, 12, 16, 20, .... The first smallest number we run into in both lists is 12 so this is the smallest common multiple between 3 and 4.

This problem can be confusing because most people look for the smallest common multiple of just the two numbers but forget the keyword range. However, this means that if you are given [1,5], then you have to check for the smallest common multiple for all the numbers [1,2,3,4,5] that is evenly divisible by all of them.

Relevant Links
Least (Smallest) Common Multiple 1.8k
Hints
Hint 1
Create an array with all the numbers that are missing from the original array to make it easier to check when having to check for even division.

Hint 2
You can use remainder operator (%) to check if the reminder of a division is 0, which means it is evenly divisible.

Hint 3
If you sort the array from greatest to smallest, then you can use the first two numbers as a first check for the smallest common multiple. This is because they are more likely to be the smallest common multiple than the lower numbers.

Solutions
Solution 1 (Click to Show/Hide)
function smallestCommons(arr) {
  // Sort array from greater to lowest
  // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
  arr.sort(function(a, b) {
    return b - a;
  });

  // Create new array and add all values from greater to smaller from the
  // original array.
  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  // Variables needed declared outside the loops.
  var quot = 0;
  var loop = 1;
  var n;

  // Run code while n is not the same as the array length.
  do {
    quot = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }

    loop++;
  } while (n !== newArr.length);

  return quot;
}

// test here
smallestCommons([1, 5]);
Code Explanation
Because of the possibility of the smallest common denominator being among the two biggest numbers, it makes sense to check those first, so sort the array.
Create a new array to sort all the numbers, newArr.
Use a descending for loop (var i = arr[0]; i >= arr[1]; i--) to add the numbers from the biggest to the smallest in the new array.
Declare the variables for the quotient so we can access them outside the loop:
the quotient that’ll be our smallest common multiple (quot)
the loop number we’re checking (loop)
the index of the array of numbers (n)
Use a do whileloop to check what we need whilen is not the same length as the new array.
In the do part, we are going to multiply the very first number, times the number of loops, times the second number (quot = newArr[0] * loop * newArr[1];).
The loop part will allows us to increase the number we’re checking beyond the greatest number we have without having to change the algorithm.
We enter a for loop that will go from n being 2 and going up by one (loop++) while it is smaller than the array with all the numbers (n < newArr.length).
If the quotient does not divide evenly (quot % newArr[n] !== 0), then stop the loop (break;). If it is even, then check for the next elements (n++) in the array until it is not even or we find our answer.
Outside the loop, increase the value of loop (loop++).
At the end of the loop return the quotient (return quot;).
Note: If the array only has two elements, then the for loop never gets used and the return value is the product of said numbers.

Relevant Links
JS Array Prototype Sort 53
JS For Loops Explained 26
JS Array Prototype Push 7
JS Do While Loop 76
String.length
Solution 2 (Click to Show/Hide)
function smallestCommons(arr) {
  var range = [];
  for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
  }

  // can use reduce() in place of this block
  var lcm = range[0];
  for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
  }
  return lcm;

  function gcd(x, y) {
    // Implements the Euclidean Algorithm
    if (y === 0) return x;
    else return gcd(y, x % y);
  }
}

// test here
smallestCommons([1, 5]);
