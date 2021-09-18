// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// Examples

// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// Constraints

// 0 <= input.length <= 100

function validParentheses(parens){
    let counter = 0;
     for (var i = 0; i < parens.length; i++) {
       if (parens[i] == '('){
       counter++
       }
       if (parens[i] == ')'){
        counter--
       }
       if (counter < 0) return false;
     }
     
     return counter == 0;
   }