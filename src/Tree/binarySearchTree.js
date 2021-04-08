function Node(val){
    this.val = val;
    this.left = this.right = null;
}

class BST{
    constructor() {
        this.root = null;
    };
    insert(data){
        const node = new Node(data);
        if(this.root === null) {
            this.root = node;
        }else{
            let current = this.root;
            while(true){
                if(current.val > data){
                    if(current.left){
                        current = current.left;
                    }else{
                        current.left = node;
                        break;
                    }
                }else{
                    if(current.right){
                        current = current.right;
                    }else{
                        current.right = node;
                        break;
                    }
                }
            }
        }
    };
    remove(data){
        removeNode(this.root, data);
        function removeNode(node, data){
            if(node === null) return null;
            if(data > node.val){
                node.right = removeNode(node.right, data);
                return node;
            }else if(data < node.val){
                node.left = removeNode(node.left, data);
                return node;
            }else{
                if(!node.left && !node.right) return null;
                if(node.left === null) return node.right;
                if(node.right === null) return node.left;
                let minNode = this.min(node.right);
                node.val = minNode.val;
                node.right = removeNode(node.right, minNode.val);
                return node;
            }
        }
    };
    min(node){
        let current = node || this.root;
        while(current && current.left){
            current = current.left;
        }
        return current.val
    };
    max(node){
        let current = node || this.root;
        while(current && current.right){
            current = current.right;
        }
        return current.val;
    };
    search(data){
        let current = this.root;
        while(current){
            if(current.val === data){
                return current;
            }else if(current.val > data){
                current = current.left;
            }else{
                current = current.right;
            }
        }
        return null;
    }
}

const tree = new BST();
tree.insert(3)
tree.insert(23)
tree.insert(1)
tree.insert(10)
tree.insert(7)
console.log(tree.search(10));
console.log(tree.root);
console.log(tree.min());
console.log(tree.max());
tree.remove(23);
console.log(tree.max());
tree.remove(10)
console.log(tree.max());