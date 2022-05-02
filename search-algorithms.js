/*
    Linear Search - finding a target value within a list by sequentially checking each element
    Time Complexity -> O(n)

*/
    const values = [1,2,3,4,5,6,7,8,9]
    const testVals = ["jank", "dank", "stank"]
    testVals.indexOf("jank") // -> uses linear search 
    //naive search algorithm - linear search
    const naiveSearch = (vals, target) => {
        for (v of vals) {
            if (v === target) return v
        }
        return null
    } // O(n)

    let answer1 = naiveSearch(values, 5)
    console.log(answer1)

/*
    Binary Search - starts from the middle and discards half of the values at a time
    Time Complexity -> O(logn)
*/
const binarySearch = (vals, target) => {
    let lower = 0
    let upper = vals.length - 1

    while (lower <= upper) {
        console.log("trying");
        const middle = lower + Math.floor((upper - lower) / 2)
        if(target === vals[middle]) return middle

        if (target < vals[middle]) {
            upper = middle - 1;
        } 
        else {
            lower = middle + 1;
        }
    }

    return null
} 

console.log(binarySearch(values, 9));