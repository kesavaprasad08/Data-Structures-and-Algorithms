var rotate = function(nums, k) {
    let res=[];
    for(let i=0;i<nums.length;i++){
        res[(i+k)%nums.length] =nums[i]
    }    
    for(let i=0;i<nums.length;i++){
        nums[i]=res[i]
    }
};