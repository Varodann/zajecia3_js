
/*Można rozszerzyć o rozpoznawanie typów*/
function isOdd(x) {
    return x % 2 === 1;
}

const isEven = x => {
    return !isOdd(x);
}

console.log(isOdd(1))
console.log(isOdd(2))
console.log(isEven(1))
console.log(isEven(2))
