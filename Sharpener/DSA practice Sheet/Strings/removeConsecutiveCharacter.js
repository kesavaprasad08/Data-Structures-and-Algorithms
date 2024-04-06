function removeConsecutiveCharacter(s){
    //code here
    
    let res='';
    let i=0;
    while(i<s.length){
        
        if(s[i]!==s[i+1]){
            res+=s[i];
        }
        i++;
    }
return res
}
