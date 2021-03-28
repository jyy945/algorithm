function Node(val){
    this.val = val;
    this.leftChild = this.rightChild = null;
}

function createBinaryTree(arr){
    if(arr === undefined){
        throw new Error("error");
    }
    if(arr.length === 0) return null;
    const data = arr.shift();
    if(data === null){
        return null;
    }else{
        const node = new Node(data);
        node.leftChild = createBinaryTree(arr);
        node.rightChild= createBinaryTree(arr);
        return node;
    }
}
function prevOrderTraveral(node){
    if(node === null)return;
    console.log(node.val);
    prevOrderTraveral(node.leftChild);
    prevOrderTraveral(node.rightChild);
}

function inOrderTraveral(node){
    if(node === null)return;
    inOrderTraveral(node.leftChild);
    console.log(node.val);
    inOrderTraveral(node.rightChild);
}

function postOrderTraveral(node){
    if(node === null)return;
    postOrderTraveral(node.leftChild);
    postOrderTraveral(node.rightChild);
    console.log(node.val);
}

const arr = [1,2,4,null,null,5,null,null,3, 6, null, null, 7];
const tree = createBinaryTree(arr);
console.log(tree);
prevOrderTraveral(tree);
console.log("------");
inOrderTraveral(tree);
console.log("------");
postOrderTraveral(tree);