// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s){
    let finalArray = [];
    let case1 = s.split("").map((element, index) => {
      if(index % 2 === 0){
        return element.toUpperCase()
       }else{
        return element.toLowerCase()
       }
     }).join("")
    let case2 = s.split("").map((element, index) => {
      if(index % 2 !== 0){  
        return element.toUpperCase()
       }else{
        return element.toLowerCase()
       }
     }).join("")
     finalArray.push(case1, case2)
    return finalArray
  };