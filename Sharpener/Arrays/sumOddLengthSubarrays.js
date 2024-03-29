var sumOddLengthSubarrays = function(arr) {
    let res=0;
  
    for(let i=0;i<arr.length;i++){
      for(let j=i;j<arr.length;j=j+2){
          for(let k=i;k<=j;k++){
              res+=arr[k]
          }
      }
    }
    return res;  
  };