/*
Recursion

when to use? 
traversing trees/graphs
sometimes for sorting
Every time you are using a tree or converting something into a tree, consider recusrsion 
Divide and Conquer using recursion

Pros: DRY (Don't repeat yourself), Readability
Cons: Large stack and long time for calculations. Be mindful of space complexity

useful for when you don't know how many loops you will need, especially useful in trees

Tail Call Optimization -> in languages such as js, where calling recursive functions does not increase the stack size. resolivng issues in production.

*/


// FACTORIAL //

function factorialRecursive(factorial, total = 1) { // O(n)
    if (factorial < 1) return total
    return factorialRecursive(factorial - 1, total * factorial)
}

function factorialRecursiveAlt(number) {
    if (number === 2) return number
    return number * factorialRecursiveAlt(number - 1)
}

console.log(factorialRecursive(10));

function factorialIterative(factorial) { // O(n)
    let total = 1 
    for(let i = 1; i <= factorial; i++) {
        total *= i
    }
    return total
}

console.log(factorialIterative(2));

// FIBONACCI // 

function fibRecursive(n) { //O(2^n) exponential time 
    if (n <= 1) return n
    return fibRecursive(n - 1) + fibRecursive(n - 2)
}

console.log(fibRecursive(8));

function fibIterative(n) { // O(n)
    const arr = [0,1]
    for(let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[n]
}
console.log(fibIterative(7));