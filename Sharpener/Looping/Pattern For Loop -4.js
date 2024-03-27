// *    *
// **   **
// ***  ***
// **** ****
// **********

let res='';

for(let i=0;i<5;i++){
    for(let j=0;j<=i;j++){
        res+='*'
    }
    for(let k=5-i-1;k>0;k--){
        res+=' '
    }
    for(let j=0;j<=i;j++){
        res+='*'
    }
    res+='\n'
}

console.log(res)