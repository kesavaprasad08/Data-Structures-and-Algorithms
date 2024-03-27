// Print the following pattern using while loops
// *****
// ****
// ***
// **
// *

let res='';

let i=0;

while(i<5){
    let j=5-i;
    while(j>0){
        res+='*';
        j--;
    }
    res+='\n'
    i++;
}

console.log(res)