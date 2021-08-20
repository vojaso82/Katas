// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// let newString = '';
    // let newArray = [];
    //  console.log(typeof iterable)
    if(typeof iterable === 'string'){
        let arr1 = iterable.split("")
        let filteredArr = arr1.filter((ele,index,arr) => {
          // console.log(ele, index)
          return arr[index] !== arr[index+1];
          // console.log(filteredArr)
        })
        return filteredArr
       } else if(typeof iterable === 'object'){
        let filteredArr2 = iterable.filter((ele,index,arr) => {
         return arr[index] !== arr[index+1];
       
       })
       return filteredArr2
      }