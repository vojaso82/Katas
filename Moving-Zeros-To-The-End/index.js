// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


//SOLUTION1
var moveZeros = function (arr) {
    let filteredZeros = arr.filter((elm) => elm === 0);
    let allOther = arr.filter((elm) => elm !== 0);
    return allOther.concat(filteredZeros)
    }


//SOLUTION2

var moveZeros = (arr) =>
  arr.filter((ele) => ele !== 0).concat(arr.filter((ele) => ele === 0));