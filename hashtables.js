/* 
insert O(1)
lookup O(1)
delete O(1)
search O(1)

//rare//
collisions can happen where key value pair stored in same address and becomes a linked list causing lookup to be O(n)
*/

// js object -> all keys become stringified 
const user = {
    name: "zack",
    email: "zack@spyfu.com",
    coolguy: true,
    yell: function() {
        console.log('yooooo');
    }
}

user.yell()

//js Map -> keys can be any data type not just strings and maintins order in insertion
const m = new Map();
// js Set -> only stores keys no values and can't have dupes
const b = new Set();
const c = new Set(["test", "test"])
console.log(c);

//ex 1
class HashTable {
    constructor(size) {
        this.data = new Array(size)
    }

    _hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }

    set(key, val) {
        const hash = this._hash(key);
        if(!this.data[hash]) {
            //create empty array for new key/value pairs
            this.data[hash] = []
        }
        // push sub array of key/val
        this.data[hash].push([key,val])
    }

    get(key) {
        const hash = this._hash(key)
        if (!this.data[hash]) return null
        if (this.data[hash].length === 1) return this.data[hash][0]
        for (item of this.data[hash]) {
            if (key === item[0]) return item
        }
    }

    keys() {
        const keysArray = []
        for (let i = 0; i<this.data.length; i++) {
            if (this.data[i]) {}
            keysArray.push(this.data[i][0][0])
        }
        return keysArray
    }
}

const myHashTable = new HashTable(50)
myHashTable.set("grapes", 10000)
myHashTable.set("apples", 24)
console.log(myHashTable.get('mango'));
console.log(myHashTable.get('grapes'));
console.log(myHashTable.get('apples'));


// EX 2 //
// find first dupe
// Given an array = [2,5,1,2,3,4,1]
// it should return 2
// Given an array = [2,5,3,7]
// it should return undefined

const findDupe = arr => {
    const nums = {}
    for (a of arr) {
        if (nums[a]) return a
        else nums[a] = true
    }
    return null
}

const dupe = findDupe([2,5,1,2,3,5,1,2,4,1])
console.log(dupe);
