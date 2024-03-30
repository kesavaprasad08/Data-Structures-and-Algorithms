var twoSum = function (nums, target) {
    let temp = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (temp.has(target - nums[i])) {
            return [temp.get(target - nums[i]), i]
        } else {
            temp.set(nums[i], i)
        }
    }
    return [-1];
};