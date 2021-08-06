// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.


function findOdd(A) {
    return A.reduce(function(c, v) {
       return c ^ v;
     }, 0);
   }

//    The bitwise XOR operator (^) returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s. 