rotate(arr,n){
    let last=arr[n-1];
    for(let i=n-1;i>0;i--){
        arr[i]=arr[i-1]
    }
    arr[0]=last
    return arr
}