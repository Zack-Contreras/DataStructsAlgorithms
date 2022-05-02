/*

lookup - O(1)
push - O(1)
insert - O(n)
delete - O(n)

*/

const strings = ['a', 'b', 'c']

strings.push("e") // O(1)

strings.pop() // O(1)

// unshift, adds to the beginning of the array
strings.unshift("x") // O(n) each index moved over 

//splice can be used to delete items at a specific point or insert
strings.splice(2, 0, "alien"); // O(n) insert after second item

// REVERSE A STRING
const str1 = "tester"
const reverser = (s) => s.split("").reverse().join("");
const str1Reversed = reverser(str1)
console.log(str1Reversed);

// MERGE SORTED ARRAYS
const mergeSortedArraysAlt = (arr1, arr2) => {
    const mergedArray = []
    let arr1Item = arr1[0]
    let arr2Item = arr2[0]
    let i = 0
    let j = 0

    while (arr1Item || arr2Item) {
        if(!arr2Item || arr1Item < arr2Item) {
            mergedArray.push(arr1Item)
            i++
            arr1Item = arr1[i]
        } else {
            mergedArray.push(arr2Item)
            j++
            arr2Item = arr2[j]
        }
    }
    return mergedArray
}
const mergeSortedArrays = (arr1, arr2) => {
    if(!arr1.length && !arr.length) return [];
    if(!arr1.length) return arr2;
    if(!arr2.length) return arr1;
    return [...arr1, ...arr2].sort((a,b) => a-b)
}
const srted = mergeSortedArrays([0,3,4,31], [4,6,20])
const srted2 = mergeSortedArraysAlt([0,3,4,31], [4,6,20])
console.log(srted);
console.log(srted2);

//https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for(let i = 0; i<nums.length; i++) {
        const item1 = nums[i]
        for(let j = i+1; j<nums.length;j++) {
            const item2 = nums[j]
            if(item1 + item2 === target) return [i,j]
        }
    }
    return []
};



