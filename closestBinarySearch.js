//given the root of a binary search tree and a target value, return teh value in teh BST that is closest to the target
//ex input root = [4,2,5,1,3], target = 3.714
//ex root = [1], target = 4.428
//constraints
//the number of nodes in the trees is in the range [1,10^4]
// 0 <= Node.val <= 10^9
// -10^9 <= target <= 10^9
//input is an array of nums and a targ val
//returning which num is closest to tar val

let closestValue = function(root, target){
//binary search target
//update closest val along path

let results = Infinity

let node = root

while(node !== null){
    if (node.val === target){
        results = target
        break
    } if (Math.abs(node.val - target) < Math.abs(results - target)){
        results = node.val
    }  else if (target > node.val){
        node = node.right
    }else{
        node = node.left
    }
    
}
return results
}

