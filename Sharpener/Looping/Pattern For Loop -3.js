// Print the following pattern using for loop
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
for(let i=0;i<5;i++){
    for(let j=5-i;j>0;j--){
        res+='*';
    }
    res+='\n'
}
for(let i=0;i<5;i++){
    for(let j=0;j<=i;j++){
        res+='*';
    }
    res+='\n'
}


console.log(res)