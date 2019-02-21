var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

//create instance of Stack class

var someInstance = {};

//add properties common to all instances of class

someInstance.storage = {}
someInstance.count = 0

// someInstance.push = push;
// someInstance.pop = pop;
// someInstance.size = size;
// ---- these ^ are from following directly along with slides
// ---- essentially, until wrapped in "stackMethods" object,
// ---- they were all individually defined function variables
// ---- these decorated the instance with the appropriate methods.

_.extend(someInstance, stackMethods)

// instead, we are extending the instance of the Stack class
// with the properties of the stackMethods object.

return someInstance;

}

var stackMethods = {

push: function(value) {
   this.storage[this.count] = value;
    this.count++
  },

pop: function() {
    if (this.count === 0){
        return undefined
    } this.count-- //decrease count by one to be able to access value to delete, otherwise would exceed elements in object by one.
    var poppedVal = this.storage[this.count] // holds popped value to return
    delete this.storage[this.count]

    return poppedVal
  },

size: function(){
      return this.count
  }
};
// var newStack = Stack()
// newStack.push(5)















// var stackMethods = {}

// stackMethods.push = function(value) { 
//     this.storage[this.count] = value;
//     this.count++
//   };

// stackMethods.pop = function() {
//     if (this.count === 0){
//         return undefined;
//     } this.count--
//     var poppedVal = this.storage[this.count];
//     delete this.storage[this.count]

//     return poppedVal;
//   };

// stackMethods.size = function(){
//       return this.count;
//   }



// var Stack = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.

// var someInstance = {};

// var storage = {};
// var count = 0


// _.extend(someInstance, Stack.stackMethods)

// return someInstance;

// };

// Stack.stackMethods = {};

// stackMethods.push = function(value) { 
//     this.storage[this.count] = value;
//     this.count++
//   };

// Stack.stackMethods.pop = function() {
//     if (this.count === 0){
//         return undefined;
//     } this.count-; //decrease count by one to be able to access value to delete, otherwise would exceed elements in object by one.
//     var poppedVal = this.storage[this.count]; // holds popped value to return
//     delete this.storage[this.count]

//     return poppedVal;
//   };

// Stack.stackMethods.size = function(){
//       return this.count;
//   }

