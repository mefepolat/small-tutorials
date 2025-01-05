function sameFrequency(num1, num2){
    let num1Str = num1.toString();
    let num2Str = num2.toString();

    if(num1Str.length !== num2Str.length){
        return false;
    }

    let num1Freq = {};
    let num2Freq = {};

    for(let num of num1Str){
        num1Freq[num] = (num1Freq[num] || 0) + 1;
    }

    for(let num of num2Str){
        num2Freq[num] = (num2Freq[num] || 0) + 1;
    }

    for(let key in num1Freq){
        if(num1Freq[key] !== num2Freq[key]){
            return false;
        }
    }

    return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false


