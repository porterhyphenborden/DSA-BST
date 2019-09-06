const BinarySearchTree = require('./binarysearchtree')

// 1. Draw a BST
//       3
//    1      4
//      2       6
//            5    9
//                7

//2. Remove the root
//       4
//    1      6
//      2   5   9
//             7

//3. Create a BST class

    const BST = new BinarySearchTree();
    BST.insert(3, 3);
    BST.insert(1, 1);
    BST.insert(4, 4);
    BST.insert(6, 6);
    BST.insert(9, 9);
    BST.insert(2, 2);
    BST.insert(5, 5);
    BST.insert(7, 7);

//4. What does this program do?

    //Sums up all the values in a BST, O(n)

//5. Height of a BST

    function heightBST(tree) {
        if (!tree) return 0;
        let leftHeight = heightBST(tree.left);
        let rightHeight = heightBST(tree.right);
 
        return Math.max(leftHeight, rightHeight) + 1;
    }

    console.log(heightBST(BST));

//6. is it a BST?

    function isBST(tree) {
        if (tree.left) {
            if (tree.left.value < tree.value) {
                isBST(tree.left);
            } else {
                return false;
            }
        }
        if (tree.right) {
            if (tree.right.value > tree.value) {
                isBST(tree.right);
            } else {
                return false;
            }
        }
        return true;
    }

    console.log(isBST(BST));

//7. 3rd largest node

    function thirdLargest(tree) {
        let thirdLargestNode;
        if (tree.right) {
            thirdLargestNode = thirdLargest(tree.right);
        }
        if (!tree.right && tree.left) {
            if (tree.left.right) {
                thirdLargestNode = tree.left.value;
            } else {
                thirdLargestNode = tree.parent.value;
            }
        }
        if (!tree.right && !tree.left) {
            if (tree.parent.left) {
                if (tree.parent.left.right) {
                    thirdLargestNode = tree.parent.left.right.value;
                } else {
                    thirdLargestNode = tree.parent.left.value;
                }
            } else {
                thirdLargestNode = tree.parent.parent.value;
            }
        }
        return thirdLargestNode;
    }

    console.log(thirdLargest(BST));
