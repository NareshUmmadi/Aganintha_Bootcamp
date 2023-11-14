

function filterEvenNumbers(arr) {

    const oddArray = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 !== 0) {

            oddArray.push(arr[i]);
        }

    }

    return oddArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(filterEvenNumbers(array));


