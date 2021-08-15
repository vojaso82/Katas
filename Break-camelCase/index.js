// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// Solution1 with Regex
function solution(string) {
    return string.replace( /([A-Z])/g, " $1" );
 }


// Solution2
function solution(string) {
 let newString = "";
    let letters = string.split("");
    letters.forEach(letter=>{
      if(letter.toUpperCase() === letter)
        newString += " "+letter
      else
        newString += letter
    })
    return newString;
}