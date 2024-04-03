var smallerNumbersThanCurrent = function (nums) {
    let res=[];
    for(let i=0;i<nums.length;i++){
        let cur=0;
        for(let j=0;j<nums.length;j++){
            if(nums[i]>nums[j]){
                cur++;
            }
        }
        res.push(cur)
    }

    return res;
};