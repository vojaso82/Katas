// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !


function pigIt(str){
    let arr1 = str.split(' ')
    return arr1.map((ele,i,arr) => {
    if(ele.match(/[a-zA-Z]/g)){
    let newArr = ele.split('')
    // console.log(newArr)
     let firstLetter = newArr.shift()
     newArr.push(`${firstLetter}ay`)
     return newArr.join('')
    }else return ele
    }).join(' ')
    
    }