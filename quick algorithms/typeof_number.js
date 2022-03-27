// Converting all string type numbers in an array into integers

let arr = [1,2,3,"4","6"];

let newarr = arr.map((element) => {
    if (typeof element === 'string') {
        element = Number(element);
        return element;
    } else {
        return element;
    }
    
});

console.log(newarr);