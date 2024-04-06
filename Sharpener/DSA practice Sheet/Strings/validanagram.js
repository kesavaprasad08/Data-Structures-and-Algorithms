var isAnagram = function (s, t) {
    let sMap = new Map();
    for (let i = 0; i < s.length; i++) {
        if (sMap.has(s[i])) {
            sMap.set(s[i], sMap.get(s[i]) + 1)
        }
        else {
            sMap.set(s[i], 1)
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (sMap.has(t[i]) && sMap.get(t[i]) > 1) {
            sMap.set(t[i], sMap.get(t[i]) - 1)
        } else {
            if (sMap.has(t[i])) {
                sMap.delete(t[i]);
            }
            else {
                return false;
            }
        }
    }
    return (sMap.size < 1);
};