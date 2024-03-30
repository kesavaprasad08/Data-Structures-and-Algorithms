var findLucky = function(arr) {
    let temp = new Map ();
    let res=-1
    arr.forEach(ele => {
       temp.set(ele,(temp.get(ele) || 0)+1 )
    })
    for(let i=0;i<arr.length;i++){
        if(temp.get(arr[i])==arr[i] && res<arr[i]){
            res=arr[i]
        }
    }
    return res
};