// flatten a deeply nested array/object //

const flattenArray = arr => {
    let flatten = []
    for (a of arr) {
        if(Array.isArray(a)) {
            flatten = [...flatten, ...flattenArray(a)]
        } else {
            flatten.push(a)
        }
    }
    return flatten
}

//console.log(flattenArray([1,[43, [99]],2,3,[8,3,5, [9,2,3]]]));

const flattenObj = obj => {
    let flatten = {}
    for (o in obj) {
        if (typeof obj[o] === 'object') {
            console.log(o, "test");
            flatten = {...flatten, ...flattenObj(obj[o])}
        } else {
            flatten[o] = obj[o]
        }
    }
    return flatten
}

//console.log(flattenObj({a: 23, b: 44, c: { "test": 23, jank: {what: 4848}}}));

// binary search practice //

const valuesBinary = [2,3,4,5,6,7]
const binarySearch = (vals, target) => {
    let top = vals.length - 1
    let bottom = 0
    
    while (bottom <= top) {
        let middle = bottom + Math.floor((top-bottom)/2)
        if (vals[middle] === target ) return middle
        if (target < vals[middle]) {
            top = middle - 1
        }
        if (target > vals[middle]) {
            bottom = middle + 1
        }
    }

    return null
}

console.log("checking binary search");
console.log(binarySearch(valuesBinary, 6));

// bubble sort practice //
const bubbles = [2,1,5,6,4,3,2]
const bubbleSort = vals => {
    for(let i = 0; i<vals.length; i++) {
        for (let j = 1; j<vals.length; j++) {
            if(vals[j] < vals[j-1]) {
                const temp = vals[j-1]
                vals[j-1] = vals[j]
                vals[j] = temp
            }
        }
    }
    return vals
}

console.log('bubble sorting');
console.log(bubbleSort(bubbles));

// binary tree practice //

class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        if (!this.root) {
            this.root = new Node(val)
            return
        }
        
        let current = this.root
        while(current) {
            //check left
            if(val < current.val) {
                if (!current.left) {
                    current.left = new Node(val)
                    return
                }
                current = current.left
                
            } else {
                if (!current.right) {
                    current.right = new Node(val)
                    return
                } 
                current = current.right
            }
        }
    }

    traverse(current = this.root) {
        if (!current) return 
        if(current) {
            console.log(current);
            console.log("*****");
            if (current.left) this.traverse(current.left)
            if (current.right) this.traverse(current.right)
        }
    }

    add(current = this.root) {
        if(!current) return 0
        if(current.left && current.right) return current.val + this.add(current.right) + this.add(current.left)
        if(!current.left && current.right) return current.val + this.add(current.right)
        if(!current.right && current.left) return current.val + this.add(current.left)
        return current.val
    }

    bfs(val) {
        const queue = [this.root]
        while (queue.length > 0) {
            const current = queue.shift()
            if(current.val === val) return current
            if(current.left) queue.push(current.left)
            if(current.right) queue.push(current.right)
        }
    }

    lookup(val) {
        let current = this.root
        while (true) {
            if(!current) return null
            if (current.val === val) return current
            if(val < current.val) current = current.left 
            if(val > current.val) current = current.right 
        }
    }
} 

const bt = new BinaryTree()
bt.insert(23)
bt.insert(22)
bt.insert(19)
bt.insert(25)
bt.insert(27)
//bt.traverse()
console.log(bt.add());

const found = bt.bfs(27)
console.log(found);

const foundLookup = bt.lookup(129)
console.log(foundLookup);