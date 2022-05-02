/*
    Dynamic Programming -> optimization technique and using cache -> divide and conquer + memoization 

    Memoization ~~~ Caching
        storing values to use later
*/
function memoizedAddTo80() {
    let cache = {}
    return function(n) {
        if (n in cache) return cache[n]
        else {
            cache[n] = n + 80
            return cache[n]
        }
    }
}

const memoized = memoizedAddTo80()
memoized(5)
memoized(5)

function fibRecursive(n) { //O(2^n) exponential time 
    if (n <= 1) return n
    return fibRecursive(n - 1) + fibRecursive(n - 2)
}

function fibMaster() { // O(n)
    let cache = {}
    return function fib(n) {
        if (n in cache) return cache[n]
        else {
            if(n <= 1) return n
            cache[n] = fib(n - 1) + fib(n - 2)
            return cache[n]
        }
    }
}
