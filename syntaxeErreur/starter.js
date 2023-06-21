function isValidClosure(s) {
    let stack = [];
    let openers = ['(', '{', '['];
    let closers = [')', '}', ']'];
    
    for(let i = 0; i < s.length; i++) {
        if(openers.includes(s[i])) {
            stack.push(s[i]);
        } else if(closers.includes(s[i])) {
            let opener = openers[closers.indexOf(s[i])];
            if(stack.length === 0 || stack.pop() !== opener) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

const result1 = isValidClosure("{([{}])}") // true
const result2 = isValidClosure("([)]") // false
const result3 = isValidClosure("{[])") // false
const result4 = isValidClosure("{[{[({()})]}]}") // true
const result5 = isValidClosure("{[{[({()})]}]]") // false

console.log("result1 : ", result1)
console.log("result2 : ", result2)
console.log("result3 : ", result3)
console.log("result4 : ", result4)
console.log("result5 : ", result5)
