
// Given an array find the maximum in it and return it 
function findMax(arr){
    let max=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max;
}

console.log(findMax([10,11,102,13,14]))