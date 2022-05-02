/*
    insertion sort - should only be used with a few items and items are mostly sorted

    bubble sort - should not really use because not efficient 

    selection sort - should not really use because not efficient 

    merge sort - really good because of divide and conquer and best = average = worst for big O, however it's expensive for space complexity as it required O(n)

    quick sort - has a better space complexity than merge sort and has the same average/best time complexity as merge sort. The one negative for quick sort is that the worst case time can be O(n^2)

    heapsort - unless you are really worried about worst case and space complexity then maybe you should use this, but on average it is slower than quick sort



    mathematically impossible to get better than O(nlogn) because of comparisons 
    except for no-comparison operations such as counting sort and radix sort and only work with numbers in a small range
*/

// bubble sort //
/* 
    one of simplest and least efficient as requires many loops
    best - O(n) and space complexity of O(1)
    wosrt - O(n^2)
*/
const valsEx = [2,4,1,3,8,7,7,8,1,0]

const bubbleSort = vals => {
    for (let index = 0; index < vals.length - 1; index++) {
        for (let j = 0; j < vals.length; j++) {
            if(vals[j] > vals[j + 1]) {
                const temp = vals[j]
                vals[j] = vals[j+1]
                vals[j+1] = temp
            }
        }
    }
}

bubbleSort(valsEx)
console.log(valsEx);

// selection sort //
/* 
    best - O(n^2) and space complexity of O(1)
    wosrt - O(n^2)
*/
const vals2 = [200,4,112,3,8,7,7,8,1,0]

const selectionSort = vals => {
    for (let i = 0; i < vals.length; i++) {
        //set current index as minimum
        let min = i
        let temp = vals[i]
        for (let j = i + 1; j < vals.length; j++) {
            if(vals[j] < vals[min]) {
                // update current minimum if current is lower than what we have currently
                min = j   
            }
        }
        // make the swap for the min value we found and the temp val from beginning of for loop
        vals[i] = vals[min]
        vals[min] = temp
    }
}

selectionSort(vals2)
console.log(vals2);

// insertion sort //
/* 
    useful when list is already almost sorted or is sorted, peforms well with small data sets
    you should probably use this over other algorithms when using small data sets or it's almost sorted
    best - O(n) and space complexity of O(1)
    wosrt - O(n^2)
*/

const vals3 = [2003,4,112,3,8,7,7,8,1,0]

function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
}

insertionSort(vals3)
console.log(vals3);

// merge sort //
/* 
    divide and conquer -> usually means recursion 
    stable which means it keeps original order if sorting element is same
    best - O(nlogn) and space complexity of O(n)
    wosrt - O(nlogn)
*/

function mergeSort(array) {
    if (array.length === 1) {
        return array
    }

    const length = array.length
    const middle = Math.floor(length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    const result = []
    let leftIndex = 0
    let rightIndex = 0

    while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++
        } else {
            result.push(right[rightIndex])
            rightIndex++
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

// quick sort //
/* 
    divide and conquer -> usually means recursion 
    uses a pivot item and a good pivot is important
    usually the fastest on average if we know the data is not already sorted
    best - O(nlogn) and space complexity of O(logn) which is really good space complexity 
    wosrt - O(n^2)
*/