var decodeString = function (s) {
    let stack = [];
    let num = 0;
    let str = '';
    for (let char of s) {
        if (char >= '0' && char <= '9') {
            num = num * 10 + Number(char) ;
        } else if (char == '[') {
            stack.push(str);
            stack.push(num);
            str = '';
            num = 0;
        } else if (char == ']') {
            let currentNumber = stack.pop();
            let currentString = stack.pop();
            
            str=currentString+str.repeat(currentNumber) 
        }else{
            str += char
        }
        
    }
    return str;
};