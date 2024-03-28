let arr= [[1,2,3],[3,2,1]];

let res=0;
for(let i=0;i<arr.length;i++){
    let cur = 0;
    for(let j=0;j<arr[i].length;j++){
        cur+=arr[i][j]
    }
    if(cur>res){
        res=cur
    }
}

console.log(res)