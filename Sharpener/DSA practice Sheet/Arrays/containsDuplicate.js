var containsDuplicate = function(nums) {
    let se =new Set(nums);
    return se.size!==nums.length
};