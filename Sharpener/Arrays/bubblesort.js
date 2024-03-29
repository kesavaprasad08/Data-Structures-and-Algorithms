function bubbleSort(arr) {
    for(let i=0;i<arr.length-1;i++){
        let flag=false
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]<arr[j+1]){
                flag=true;
                let temp =arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
        if(!flag){
            break;
        }
    }
    return arr;
}

// Example usage:
const array = [4,3,2,5,1]
console.log("Original array:", array);
console.log("Sorted array:", bubbleSort(array));