// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:

//     All numbers are valid Int32, no need to validate them.
//     There will always be at least one number in the input string.
//     Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
    if(numbers.split(" ").length === 1){
       return numbers.concat(" ").repeat(2).trim()
     } else{
    
      return numbers.split(" ").sort((a, b) => b-a).filter((ele, index, arr) => index === 0 || index === arr.length-1).join(" ")
     
    //console.log(numbers.split(" ").length)
     }
    }

    function highAndLow(numbers) {
        numbers = numbers.split(' ').map(Number)
        
        let min = Math.min.apply(null, numbers)
        let max = Math.max.apply(null, numbers)
        
        return max + ' ' + min
      }