const numbers = [1, 2, 3, 4, 5];

const numbersMultipliedByTwo = numbers.map(function(number) {
    return number * 2;
});
console.log(numbersMultipliedByTwo);

const ages = [8, 13, 27, 30, 22, 40];

const evenAges = ages.filter(function (age) {
    return age % 2 === 0;
});

console.log(evenAges)

const newAges = [8, 13, 27, 30, 22, 40];

const sumOfAge = newAges.reduce(function (newAge, accumulator){
    return accumulator + newAge;

},0);

console.log(sumOfAge);