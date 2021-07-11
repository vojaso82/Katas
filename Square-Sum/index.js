function squareSum(numbers){
    let eachNum = numbers.map((number) => number * number)
    return eachNum.reduce((acc,val)=>acc+val, 0)
    }