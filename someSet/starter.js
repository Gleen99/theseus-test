function sumOfTwoDigitsInTheTable(arr, target) {
    let numObject = {};
    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        if (numObject[complement] !== undefined) {
            return true;
        }
        numObject[arr[i]] = arr[i];
    }
    return false;
}

const result1 = sumOfTwoDigitsInTheTable([1,8,3,6,9,2,5,12], 9) // true
const result2 = sumOfTwoDigitsInTheTable([1,1,3,6,9,2,5,12], 14) // true
const result3 = sumOfTwoDigitsInTheTable([1,80,3,6,9,2,6,12], 17) // false
const result4 = sumOfTwoDigitsInTheTable([1,90,9,6,32,2,5,12], 18) // true

console.log("result1 : ", result1)
console.log("result2 : ", result2)
console.log("result3 : ", result3)
console.log("result4 : ", result4)
