// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''

// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

function list(names){
    if(!names.length){
     return ''
   }else if(names.length === 1){
    return String((names.map((ele) => ele.name)))
   }else if(names.length === 2){
      return String((names.map((ele) => (ele.name)))).replace(/,/g,' & ')
   }else return (names.map((ele,i) => {
     if(i === names.length-1){
       return ` & ${ele.name}`
     } else if(i < names.length-2){
       return `${ele.name}, `
     }else return ele.name
   }).join(''))
   }