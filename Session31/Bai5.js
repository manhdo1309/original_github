function chunkArrayInGroups(arr, n) {
    let array = [];
    while (arr.length > 0) {
        array.push(arr.splice(0, n));
    }
    console.log(array);;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2); 
chunkArrayInGroups(["a", "b", "c", "d"], 3); 