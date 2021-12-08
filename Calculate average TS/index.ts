// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    return (Math.min(...array) + Math.max(...array)) / 2;
  }