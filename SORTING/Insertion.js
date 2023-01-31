// insertion sort algorithm is a simple sorting algorithm that builds the final sorted array (or list) one item at a time.
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

const arr = [2, 1, 9, 76, 4]

console.log(insertionSort(arr));