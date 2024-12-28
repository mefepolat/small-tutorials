function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    let anagramCounter1 = {};
    let anagramCounter2 = {};

    for(let char of str1){
        anagramCounter1[char] = (anagramCounter1[char] || 0) + 1;
    }
    for(let char of str2){
        anagramCounter2[char] = (anagramCounter2[char] || 0) + 1;
    }
 
    for(let key in anagramCounter1){
        
        if(!(key in anagramCounter2)){
            return false;
        }
        if(anagramCounter1[key] !== anagramCounter2[key]){
            return false;
        }
    }
    return true;
}

console.log(validAnagram("aaz", "aza"));