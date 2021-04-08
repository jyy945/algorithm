function bubbleSort(arr){
    let l = arr.length;
    for(let i = 0; i < l - 1; i++){
        for(let j = 0; j < l - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                swap(arr, j, j + 1);
            }
        }
    }
}

function selectionSort(arr){
    let l = arr.length;
    for(let i = 0; i < l - 1; i++){
        for(let j = i + 1; j < l; j++){
            if(arr[i] > arr[j]){
                swap(arr, i ,j);
            }
        }
    }
}

function insertSort(arr){
    const l = arr.length;
    for(let i = 1; i < l; i++){
        for(let j = i; j > 0; j--){
            if(arr[j] < arr[j - 1]){
                swap(arr, j, j - 1);
            }
        }
    }
}

function quickSort(arr, startIndex, endIndex){
    if(startIndex >= endIndex) return;
    const pivot = partition(arr, startIndex, endIndex);
    quickSort(arr, startIndex, pivot - 1);
    quickSort(arr, pivot + 1, endIndex);
}

function partition(arr, startIndex, endIndex){
    const pivot = arr[startIndex];
    let left = startIndex;
    let right = endIndex;
    while(left !== right){
        while(left < right && arr[right] > pivot){
            right--;
        }
        while(left < right && arr[left] <= pivot){
            left++;
        }
        if(left < right){
            swap(arr, left, right);
        }
    }
    arr[startIndex] = arr[left];
    arr[left] = pivot;
    return left;
}

function mergeSort(arr) {  // 采用自上而下的递归方法
    let len = arr.length;
    if(len < 2) {
        return arr;
    }
    let middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length) result.push(left.shift());
    while (right.length) result.push(right.shift());
    return result;
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const arr = [3,5,10,2,7];
// bubbleSort(arr);
// selectionSort(arr)
insertSort(arr);
console.log(arr);