var kidsWithCandies = function(candies, extraCandies) {
    let res=[];
    let max=Math.max(...candies);
    for(let i=0;i<candies.length;i++){
        res[i]=candies[i]+extraCandies>=max
    }
    return res
};