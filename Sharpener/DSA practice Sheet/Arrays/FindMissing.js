function findMissing(arr,n){
    let dif = (arr[n-1]-arr[0])/n;
    for(let i=0;i<n;i++){
        if(arr[i+1]-arr[i]!==dif){
            return dif+arr[i]
        }
    }
 }