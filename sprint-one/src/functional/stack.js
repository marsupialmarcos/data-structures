var Stack = function() {
  
  var someInstance = {}; //create object

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0 //keeps current count of elements in object, does not currespond to a key-value pair until pushed.

  // Implement the methods below
  
  someInstance.push = function(value) { 
    storage[count] = value;
    count++
  };

  someInstance.pop = function() {
    if (count === 0){
        return undefined
    } count-- //decrease count by one to be able to access value to delete, otherwise would exceed elements in object by one.
    var poppedVal = storage[count] // holds popped value to return
    delete storage[count]

    return poppedVal
  };

  someInstance.size = function(){
      return count
  }

  return someInstance;
};