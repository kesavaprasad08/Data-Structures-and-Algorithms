function findPeak(nums){
    let  low=0;
        let high=nums.length-1;
        while(low<high) {
            let mid=Math.floor((high+low)/2);
            if(nums[mid]>nums[mid+1]) {
                high=mid;
            } else {
                low=mid+1;
            }
        }
        return low;
        
    }



console.log(findPeak([1,2,1,3,5,6,4]))