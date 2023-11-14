


function filterAndMap(num, filterFn, mapFn) {

    const filteredNumbers = num.filter(filterFn);

    
    const mappedNumbers = filteredNumbers.map(mapFn);

    return mappedNumbers;

}


function isEven(number) {
    return number % 2 === 0;
}

function square(number) {
    return number * number;
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = filterAndMap(numbers, isEven, square);
console.log(result);







