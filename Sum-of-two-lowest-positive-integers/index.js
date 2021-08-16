// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.


// Solution1
function sumTwoSmallestNumbers(numbers) {  
    let sum = 0;
    let sortedArr = numbers.sort((a,b) => a-b)
    let firstTwo = sortedArr.splice(0,2)
    return firstTwo.reduce((a,b) => a+b)
    }

// Solution2
function sumTwoSmallestNumbers(numbers){  
    let sortedNumbers = numbers.sort((a,b) => a-b)
    return numbers[0] + numbers[1];
  };
  