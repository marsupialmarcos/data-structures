var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  _.extend(newTree, treeMethods)
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
    var current = this.children
    current.push(Tree(value))
};

treeMethods.contains = function(target) {
  var find = function(treeNode){
    var found = false;
    if (treeNode.value === target){
      return true
    } else {
      var node = treeNode.children
      for (var i = 0; i < node.length; i++){
        found = find(node[i])
        if (found === true){
          return found
        }
      }
      return found
    }
  }
  return find(this)
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
