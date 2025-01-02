function countUniqueValues(arr){
    if(arr.length < 1) {
        return 0;
    }
    let obj = {};
    for(let i = 0; i < arr.length; i++){
        obj[arr[i]] = 1;
    }
    
    return Object.keys(obj).length;
  }