// divide and conquer approach
// works on sorted array

const binarySearch = (arr, x, start, end) => {
    if (start > end) return false;

    let midValue = Math.floor((start + end) / 2);

    if(arr[midValue] === x) {
        return true;
    } else if (arr[midValue] > x) {
        return binarySearch(arr, x, start, midValue - 1);
    }
    return binarySearch(arr, x, midValue + 1, end);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arr1 = [1,2,4,3,5,7,6,8,9];

const x = 5;
const n = arr.length;

const y = arr1.length;

const result = binarySearch(arr, x, 0, n - 1);
const result1 = binarySearch(arr1, x,0, y - 1);

if(result1) {
    console.log("el found")
} else {
    console.log("el not found")
}

if(result) {
    console.log('Element found');
}
else {
    console.log('Element not found');
}

