// Print the following pattern using while loop
// *****
// ****
// ***
// **
// *
// *
// **
// ***
// ****
// *****

let res='';
let i=0;
while(i<5){
    let j=5;
    while(j>0+i){
        res+='*'
        j--;
    }
    res+='\n'
    i++
}
let k=0;
while(k<5){
    let j=0;
    while(j<=k){
        res+='*'
        j++;
    }
    res+='\n'
    k++
}

console.log(res)