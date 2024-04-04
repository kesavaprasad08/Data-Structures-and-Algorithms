var mostWordsFound = function(sentences) {
    let res =0;
    for(let i=0;i<sentences.length;i++){
        let cur = sentences[i].split(' ').length;
        if(cur>res){
            res=cur;
        }
    }
    return res;
};
