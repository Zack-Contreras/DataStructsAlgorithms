/*
    EX: The DOM is created as a tree
    Binary Tree: each node can only hav 0,1,2 nodes and each node can only have one parent 
    perfect binary tree means all nodes either have 0 or two children and bottom is filled out 
    full binary tree is similar to perfect but bottom does not have to be filled out
    trees preserve relationships

    Binary Search Tree: all child nodes to the right will be greater than the root node and all children to the left will be less than the root node

   //unbalanced binary search trees are bad because they can become a giant linked list giving a worst case time complexity//

    lookup - O(logN) balanced tree - worst case of O(n) for unbalanced tree
    insert - O(logN) balanced tree - worst case of O(n) for unbalanced tree
    delete - O(logN) balanced tree - worst case of O(n) for unbalanced tree

    Pros: better than O(n), ordered, flexible size 
    Cons: no O(1) operations such as array lookup


    // Balanced trees //
    AVL tree or Red Black Tree

    // Binary Heap //
    lookup - O(n)
    insert - O(logn)
    delete - O(logn)
    Pros: better than O(n), ordered, flexible size, fast insert 
    Cons: no O(1) operations such as array lookup
    node on top level is higher than node on level below it - left to right insertion 

    are really great at doing comparative operations 

    cant be unbalanced and preserve order of insertion 

    useful for things such as priority queue
*/

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const node = new Node(value)
        if (this.root === null) {
            this.root = node
        }
        
        let searching = this.root
        let checker = true
        while (checker) {
            if (value === searching.value) return
            
            if(value < searching.value) {
                // check left side
                if(searching.left === null) {
                    searching.left = node
                    checker = false
                } else {
                    searching = searching.left
                }
            } else {
                //check right side
                if(searching.right === null) {
                    searching.right = node
                    checker = false
                } else {
                    searching = searching.right
                }
            }
        }
    }

    lookup(value) {
        let currentNode = this.root
        while(true) {
            // break loop once we have pointer to null
            if(!currentNode) return null
            //check if value matches
            if(currentNode.value === value) return currentNode
            //otherwise go left if less than and right if greater than
            if(value < currentNode.value) currentNode = currentNode.left
            else currentNode = currentNode.right
        }
    }

    remove(value) {
        if (!this.root) {
          return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while(currentNode){
          if(value < currentNode.value){
            parentNode = currentNode;
            currentNode = currentNode.left;
          } else if(value > currentNode.value){
            parentNode = currentNode;
            currentNode = currentNode.right;
          } else if (currentNode.value === value) {
            //We have a match, get to work!
            
            //Option 1: No right child: 
            if (currentNode.right === null) {
              if (parentNode === null) {
                this.root = currentNode.left;
              } else {
                
                //if parent > current value, make current left child a child of parent
                if(currentNode.value < parentNode.value) {
                  parentNode.left = currentNode.left;
                
                //if parent < current value, make left child a right child of parent
                } else if(currentNode.value > parentNode.value) {
                  parentNode.right = currentNode.left;
                }
              }
            
            //Option 2: Right child which doesnt have a left child
            } else if (currentNode.right.left === null) {
              currentNode.right.left = currentNode.left;
              if(parentNode === null) {
                this.root = currentNode.right;
              } else {
                
                //if parent > current, make right child of the left the parent
                if(currentNode.value < parentNode.value) {
                  parentNode.left = currentNode.right;
                
                //if parent < current, make right child a right child of the parent
                } else if (currentNode.value > parentNode.value) {
                  parentNode.right = currentNode.right;
                }
              }
            
            //Option 3: Right child that has a left child
            } else {
    
              //find the Right child's left most child
              let leftmost = currentNode.right.left;
              let leftmostParent = currentNode.right;
              while(leftmost.left !== null) {
                leftmostParent = leftmost;
                leftmost = leftmost.left;
              }
              
              //Parent's left subtree is now leftmost's right subtree
              leftmostParent.left = leftmost.right;
              leftmost.left = currentNode.left;
              leftmost.right = currentNode.right;
    
              if(parentNode === null) {
                this.root = leftmost;
              } else {
                if(currentNode.value < parentNode.value) {
                  parentNode.left = leftmost;
                } else if(currentNode.value > parentNode.value) {
                  parentNode.right = leftmost;
                }
              }
            }
          return true;
          }
        }
      }

    breadthFirstSearch() {
      let currentNode = this.root
      let list = []
      let queue = []
      queue.push(currentNode)

      while(queue.length > 0) {
        currentNode = queue.shift()
        list.push(currentNode.value)
        if(currentNode.left) {
          queue.push(currentNode.left)
        }
        if (currentNode.right) {
          queue.push(currentNode.right)
        }
      }

      return list
    }

    breadthFirstSearchRecursive(queue, list) {
      if (!queue.length) {
        return list
      }

      let currentNode = queue.shift()
      list.push(currentNode.value)
      if(currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }

      return this.breadthFirstSearchRecursive(queue, list)
    }

    DFSInOrder() {
      return this.traverseInOrder(this.root, [])
    }

    traverseInOrder(node, list) {
      if(node.left) {
        this.traverseInOrder(node.left, list)
      }
      list.push(node.value)
      if(node.right) {
        this.traverseInOrder(node.right, list)
      }
      return list
    }

    DFSPostOrder() {
      return this.traversePostOrder(this.root, [])
    }

    traversePostOrder(node, list) {
      if(node.left) {
        this.traversePostOrder(node.left, list)
      }
      if(node.right) {
        this.traversePostOrder(node.right, list)
      }
      list.push(node.value)
      return list
    }

    DFSPreOrder() {
      return this.traversePreOrder(this.root, [])
    }

    traversePreOrder(node, list) {
      list.push(node.value)
      if(node.left) {
        this.traversePreOrder(node.left, list)
      }
      if(node.right) {
        this.traversePreOrder(node.right, list)
      }
      return list
    }

    
    
}

const traverse = node => {
  console.log(node.value);
  if(node.left) traverse(node.left)
  if(node.right) traverse(node.right)
}


//      9
//   4     20
//  1 6   15 170
const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
//console.log(tree.lookup(9));
const bfs = tree.breadthFirstSearch();
tree.breadthFirstSearchRecursive([tree.root], [])
console.log("THE BFS LIST", bfs);
console.log("**DFS**");
tree.DFSInOrder() // -> [1, 4, 6, 9, 15, 20, 170]
tree.DFSPreOrder() // -> [9, 4, 1, 6, 20, 15, 170]
tree.DFSPostOrder() // -> [1, 6, 4, 15, 170, 20, 9]

//traverse(tree.root)


// TRAVERSAL //

/*
Breadth First Search - start with root node and move left to righ on second level and then left to right on any further levels
//uses additional memory to track child nodes//
*/


/*
BFS vs. DFS - they both have the same time complexity O(n)
BFS: if you know more details on location of node and could be higher up in the tree, better to use BFS
    Pros -> very good for finding shortest path, and has closer nodes
    Cons -> uses more memory 
DFS: can be better if you know that the node is on a lower level of tree/graph
    Pros -> less memory, does path exist?
    Cons -> can get pretty slow if deep graph or tree
*/

/*
Depth First Search - starts with root and goes all the way down left, if nothing found goes up and then goes right
//lower memory than breadth first search//
goes as deep as possible left then start going right until you find it or finish

tree ex:
  101
33   105

InOrder - 33, 101, 105
PreOrder - 101, 33, 105 -> useful for recreating trees
PostOrder- 33, 105, 101
*/


// LEET CODE QUESTION -> https://leetcode.com/problems/validate-binary-search-tree/submissions/ //
// Validate a BST //
const treeLC = new BinarySearchTree()
treeLC.insert(2)
treeLC.insert(1)
treeLC.insert(3)
function isValidBST(root) {
  
  return dfs(root, -Infinity, Infinity)
}

function dfs(node, min, max) {

  if(!node) return true
  if(node.val <= min || node.val >= max) return false
  return dfs(node.left, min, node.val) && dfs(node.right, node.val, max)
}
isValidBST(treeLC)


async function delay(time) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("made it")
    }, time)
  })
}

(async () => {
  console.log("before delay")
  await delay(1000)
  console.log("afterr");
})();

function getNames(arr) {
  return arr
          .filter(i => i.hasOwnProperty("name"))
          .map(j => j.name)
}

const test23 = [{name: "zack"}, {}, {a: 1}, {name: 'fritzi'}]
console.log(getNames(test23));