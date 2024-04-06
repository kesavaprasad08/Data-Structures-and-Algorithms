var countConsistentStrings = function (allowed, words) {
    let temp = new Set(allowed);
     let res=0;
    words.forEach(ele => {
     let cur=true;
     for(const char of ele){
         if(!temp.has(char)){
             cur=false;
             break;
         }
     }
     if(cur){
         res++;
     }
 
    })
   return res;
 };