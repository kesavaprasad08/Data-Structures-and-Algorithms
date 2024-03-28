function storePrime(n){
    let res=[];
    let counter=0;
    let i=2;
    while(counter<n){
        let flag= true;
        for(let j=2;j<=Math.sqrt(i);j++){
            if(i%j==0){
                flag=false;
                break;
            }
        }
        if(flag){
            res[counter]=i;
            counter++;
        }
        i++
    }
    return res
}

console.log(storePrime(5))