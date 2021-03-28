function Node(val){
    this.val = val === undefined ? 0 : val;
    this.next =  null;
}
function LinkList(){
    this.head = this.last = null;
    this.size = 0;
    this.initial = function(arr){
        if(!Array.isArray(arr)){
            console.log("error");
            return;
        }
        this.head = this.last = new Node(arr[0]);
        for(let i = 1, l = arr.length; i < l; i++){
            const node = new Node(arr[i]);
            this.last.next = node;
            this.last = node;
        }
        this.size = arr.length;
    };
    this.get = function(index){
        if(index < 0 || index >= this.size){
            console.log("error");
            return;
        }
        let node = this.head;
        for(let i = 0; i < index; i++){
            node = node.next;
        }
        return node;
    };
    this.insert = function(val, index){
        if(index < 0 || index > this.size){
            console.log("error");
            return;
        }
        const node = new Node(val);
        if(this.size === 0){
            this.head = this.last = node;
        }else{
            if(index === 0){
                node.next = this.head;
                this.head = node;
            }else if(index === this.size){
                this.last.next = node;
                this.last = node;
            }else{
                const prev = this.get(index - 1);
                node.next = prev.next;
                prev.next = node;
            }
        }
        this.size++;
    };
    this.remove = function(index){
        if(index < 0 || index >= this.size){
            console.log("error");
            return;
        }
        let remove;
        if(index === 0){
            remove = this.head;
            this.head = remove.next;
        }else if(index === this.size - 1){
            remove = this.last;
            const prev = this.get(index - 1);
            prev.next = null;
            this.last = prev;
        }else{
            const prev = this.get(index - 1);
            remove = prev.next;
            prev.next = remove.next;
        }
        this.size--;
    };
    this.display = function(){
        let node = this.head;
        let str = "";
        while(node){
            str += (node.val + " ")
            node = node.next;
        }
        console.log(str);
    }
}
const list = new LinkList();
list.initial([1,2,3,4,5,6]);
list.display();
list.insert(2.2, 2);
list.display();
list.remove(2);
list.display();