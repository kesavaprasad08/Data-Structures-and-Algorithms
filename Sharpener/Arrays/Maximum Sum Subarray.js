let arr=[5,2,-4,-5, 3,-1,2,3,1];
let max=0;
function sub(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            let cur =0;
            for(let k=i;k<=j;k++){
                cur+=arr[k]
            }
            if(cur>max){
                max=cur
            }
        }
    }
    console.log(max)
}

sub(arr)