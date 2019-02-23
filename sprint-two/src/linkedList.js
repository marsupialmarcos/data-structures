var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
     
    var node = Node(value)
     
    if(list.head !== null){
     list.tail.next = node;
     list.tail = node;
    } 
    
    if (list.head === null){ 
        list.head = node;
        list.tail = node;
    }
  };

  list.removeHead = function() {
    var output = list.head.value
    list.head = list.head.next
    return output
  };

  list.contains = function(target) {
    var find = function (node){
    
    if (node.value === target){
      return true
    } else if (node.next === null){
      return false
    } else {
      node = node.next;
      return find(node)
      }
    } 
    
    return find(list.head)
   };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};