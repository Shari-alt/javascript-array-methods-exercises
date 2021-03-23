const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Your code below
// multiply
const numbersTimes2 = numbers.map((number) => {
    return number *2;
});
console.log(numbersTimes2);

//Dividing 
const numbersDivided2 = numbers.map((number) => {
    return number / 2;
});
console.log(numbersDivided2);

//multiplySelf
const multiplySelf =numbers.map((number) => {
    return number * number;
});
console.log(multiplySelf);