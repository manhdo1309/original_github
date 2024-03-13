function largestOfArrs(...arrays){
    let maxNumbers = [];
    for (let arr of arrays) {
        if (arr.length > 0) {
            let maxNumber = Math.max(...arr);
            maxNumbers.push(maxNumber);
        } else {
            maxNumbers.push(undefined);
        }
    }
    console.log(maxNumbers);
}
largestOfArrs([1, 2, 3, 4], [-1, -2, -3], [5, 1, 2, 9]);
largestOfArrs([1, 2, 3, 4], [5, 1, 2, 9]);
largestOfArrs();