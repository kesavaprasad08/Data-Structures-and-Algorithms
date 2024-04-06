var isPalindrome = function(s) {
    let res='';
    let rev='';
    for(let i=0;i<s.length;i++){
        if((s[i]>='a'&& s[i]<='z') || (s[i]>='A' &&s[i]<='Z' || s[i]<='9'&&s[i]>='0')){
    res+=s[i];
    rev=s[i]+rev
        }
        
    }
    return res.toLowerCase()==rev.toLowerCase()
};