
let targetSum = 300
let numbers = [5,3,4,7] //true

//return boolean if it is possible to generate the target with array numbers
let canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum === 0 ) return true
    if (targetSum < 0) return false


    if (targetSum in memo) return memo[targetSum]
    if (numbers.includes(targetSum)) return true

    memo[targetSum] = canSum(targetSum - numbers[numbers.length - 1], numbers, memo)

} 
console.log(canSum(targetSum, numbers))



let canSum2 = (targetSum, numbers, memo) => {
    if (memo === true) return true
    if (targetSum === 0 ) return true
    if (targetSum < 0) return false

    for (let nums of numbers){
        const remainder = targetSum - nums
        if (canSum(remainder, numbers) === true){
            memo = true
            return true
        }

    }
    return false

}

console.log(canSum2(targetSum, numbers))
console.log(canSum2(8, [2,3,5]))