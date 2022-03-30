const nonConsecArr = [1,2,3,5];

let missingNum = 0;

for (let i = 0; i < nonConsecArr.length - 1; i++) { // note you only check the penultimate element in array, cant check last element

    if(nonConsecArr[i] + 1 !== nonConsecArr[i + 1] ) { 
        missingNum = nonConsecArr[i] + 1;
    }

    // if current element + 1 isn't equal to the next element, then the missing number must be the current element + 1

}

console.log(missingNum);