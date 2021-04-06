function buildHeap(arr){
    for(let i = Math.floor((arr.length - 2) / 2); i >= 0; i--){
        downAdjust(arr, i);
    }
}

function downAdjust(arr, parentIndex){
    const length = arr.length;
    let temp = arr[parentIndex];
    let childIndex = 2 * parentIndex + 1;
    while(childIndex < length){
        if(childIndex + 1 < length && arr[childIndex] > arr[childIndex + 1]){
            childIndex++;
        }
        if(temp <= arr[childIndex]) break;
        arr[parentIndex] = arr[childIndex];
        parentIndex = childIndex;
        childIndex = childIndex * 2 + 1;
    }
    arr[parentIndex] = temp;
}

const arr = [7,1,3,10,5,2,8,9,6];
buildHeap(arr);
console.log(arr);