
var countPrimes = function (n) {
    let temp = new Uint8Array(n);
    let res = 0
    for (let i = 2; i < n; i++) {
        if (!temp[i]) {
            res++;
            for (let j = i * i; j < n; j += i) {
                temp[j] = 1;
            }
        }
    }
    return res
};