let arr=[1,2,3,4,5];
let res='';
function sub(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            for(let k=i;k<=j;k++){
                res+=arr[k]
            }
            res+='\n'
        }
    }
    console.log(res)
}

sub(arr)