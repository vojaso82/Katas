
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']


function solution(str){
    if(!str){
      return []
    }
    let arr = str.split('').map((ele,i,arr)=>{
    if(str.length % 2 === 0){
    if(i % 2 === 0){
      return ele+arr[i+1]
    } 
    }else{
    if(i % 2 === 0 && i !== str.length - 1){
      return ele+arr[i+1]
    }else if(i === str.length-1){
      return ele + '_'
    }
    }
    })
    .filter((ele)=>ele !== undefined)
    return arr
    }