var validateStackSequences = function (pushed, popped) {
    let stack = [];
    let j = 0;
    for (let i = 0; i < pushed.length; i++) {
        stack.push(pushed[i])
        while (popped[j] == stack[stack.length - 1] && stack.length > 0) {
            j++;
            stack.pop();
        }
    }
    return stack.length === 0
};