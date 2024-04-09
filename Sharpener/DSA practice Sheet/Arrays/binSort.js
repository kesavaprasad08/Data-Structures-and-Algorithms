binSort(A, N)
    {
        //your code here
        let one = 0;
        for(let i=0;i<N;i++){
            if(A[i]==0){
                one++
            }
        }
        for(let i=0;i<N;i++){
            if(i<one){
                A[i]=0;
            }else{
                A[i]=1;
            }
        }
        
    }