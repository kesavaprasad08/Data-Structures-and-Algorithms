var isValid = function (s) {
    let sta = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            sta.push(s[i])
        } else if (!sta.length || s[i] == ')' && sta[sta.length - 1] !== '(' || s[i] == '}' && sta[sta.length - 1] !== '{' || s[i] == ']' && sta[sta.length - 1] !== '[') {
            return false;
        }
        else
            sta.pop()
    }

    // return sta.length == 0
};