var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0
  var lowestCount = 0

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value
    count++
  };

  someInstance.dequeue = function() {
      if (count - lowestCount === 0){
          return undefined
      }

      var dequeuedValue = storage[lowestCount]
      delete storage[lowestCount]
      lowestCount++
      return dequeuedValue

  };

  someInstance.size = function() {
      return count - lowestCount
  };

  someInstance.revealInternals = function(){
      console.log(storage, count)
  } 

  return someInstance;
};