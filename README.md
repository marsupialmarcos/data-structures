# data-structures
This is a project I completed as a student at [hackreactor](http://hackreactor.com). This project was worked on with a pair.

# SPRINT ONE: OBJECT-ORIENTED PROGRAMMING

**Queue**: FIFO - Ex: Queue to the loo. Great for.. sequential operations.

**Stack**: LIFO - Ex: Stack of pancakes. Great for… implementing your browser’s back button.

# Bare Minimum Requirements

Implement a stack with the following methods:

* *push(string)* - Add a string to the top of the stack
* *pop()* - Remove and return the string on the top of the stack
* *size()* - Return the number of items on the stack

Implement a queue with the following methods:

* *enqueue(string)* - Add a string to the back of the queue
* *dequeue()* - Remove and return the string at the front of the queue
* *size()* - Return the number of items in the queue

Implement both stack and queue data structures in each of the instantiation styles. The functional style is stubbed out in src/functional/queue.js and src/functional/stack.js to get you started.

# Instantiation Styles

### 1. Functional instantiation:
A simple "maker" pattern.

*Do:*
* Work within the src/functional/ folder
* Define all functions and properties within the maker function

*Don't:*

* Use the keyword **new**, the keyword **this**, or any **prototype** chains
* Capitalize the maker function name

Example: The provided classes *Stack* and *Queue* already follow this pattern

```javascript
var giraffeMaker = function(name, height) {
  var newGiraffe = {};
  newGiraffe.name = name;
  newGiraffe.height = height;
  newGiraffe.hunger = 10;

  newGiraffe.isTallEnough = function(treeHeight) {
    return newGiraffe.height > treeHeight;
  };

  newGiraffe.isHungry = function() {
    return newGiraffe.hunger > 0;
  };

  newGiraffe.say = function(option) {
    var sentences = {
      'greet': 'Hello, my name is ' + newGiraffe.name + ', it is nice to meet you.',
      'notHungry': newGiraffe.name + ' is not hungry.',
      'notTallEnough': newGiraffe.name + ' is too short to reach the trees.',
      'ate': 'That was delicious!'
    };
```

### 2. Functional instantiation with shared methods:
Same as functional instantiation, but with shared methods.

*Do:*
* Work within the src/functional-shared/ folder
* Create an object that holds the methods that will be shared by all instances of the class
* Use the keyword **this** in your methods
* Use _.extend to copy the methods onto the instance

*Don't:*

* Use the keyword **new**, the keyword **this**, or any **prototype** chains
* Capitalize the maker function name

Example:

```javascript
//extending properties saves you from having to add each one individually.

var giraffeMaker = function(name, height) {
  var newGiraffe = {};
  newGiraffe.name = name;
  newGiraffe.height = height;
  newGiraffe.hunger = 10;
  extend(newGiraffe, giraffeMaker.giraffeMethods);

  return newGiraffe;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

giraffeMaker.giraffeMethods = {};


giraffeMaker.giraffeMethods.isTallEnough = function(treeHeight) {
    return this.height > treeHeight;
  };

giraffeMaker.giraffeMethods.isHungry = function() {
  return this.hunger > 0;
};
```
### 3. Prototypal instantiation:
Using *Object.create(Prototype)*

*Do:*
* Work within the src/prototypal/ folder
* Use Object.create with the object from Step 2 to create instances of your class

*Don't:*

* Use the keyword **new**

Example:
```javascript  
//prototypal inheritence

var giraffeMaker = function(name, height) {
  var newGiraffe = Object.create(giraffeMaker.stuff);
  newGiraffe.name = name;
  newGiraffe.height = height;
  newGiraffe.hunger = 10;

  return newGiraffe;
};

giraffeMaker.stuff = {};

giraffeMaker.stuff.isTallEnough = function(treeHeight) {
    return this.height > treeHeight;
  };

giraffeMaker.stuff.isHungry = function() {
  return this.hunger > 0;
};
```

### 4. **Pseudoclassical instantiation:** 
Create instances with the keyword *new*

*Do:*
* Work within the src/pseudoclassical/ folder
* Capitalize your function name to indicate to others that it is intended to be run with the keyword new
* Use the keyword new when instantiating your class
* Use the keyword this in your constructor

*Don't:*

* Declare the instance explicitly
* Return the instance explicitly

Example:
```javascript
//pseudo-classical inheritance example

var Giraffe = function(name, height) {
  this.name = name;
  this.height = height;
  this.hunger = 10;
};

Giraffe.prototype.isTallEnough = function(treeHeight) {
    return this.height > treeHeight;
  };

Giraffe.prototype.isHungry = function() {
  return this.hunger > 0;
};

Giraffe.prototype.say = function(option) {
  var sentences = {
    'greet': 'Hello, my name is ' + this.name + ', it is nice to meet you.',
    'notHungry': this.name + ' is not hungry.',
    'notTallEnough': this.name + ' is too short to reach the trees.',
    'ate': 'That was delicious!'
  };

  return console.log(sentences[option]);
};

var Stanley = new Giraffe('stanley', 5);
```

### 5. ES6 instantiation:
Create instances with the keyword **new**
Create classes with the **class** declaration

*Do:* 
* Work within the src/es6/ folder
* Capitalize your function name to indicate that it is intended to be run with the keyword new
* Use the keyword **new** when instantiating your class
* Use the keyword **this** in your constructor
* Explicity declare a class method named constructor
* Declare all other class methods within the **class** declaration

*Don't:*

* Declare the instance explicitly
* Return the instance explicitly
* Add class methods to the class prototype directly

Example:  
```javascript
//ES6 class declaration example

class Giraffe {
  constructor(name, height) {
    this.name = name;
    this.height = height;
    this.hunger = 10;
  }

  isTallEnough(treeHeight) {
    return this.height > treeHeight;
  }

  isHungry() {
    return this.hunger > 0;
  }

  say(option) {
    var sentences = {
      'greet': 'Hello, my name is ' + this.name + ', it is nice to meet you.',
      'notHungry': this.name + ' is not hungry.',
      'notTallEnough': this.name + ' is too short to reach the trees.',
      'ate': 'That was delicious!'
    };

    return console.log(sentences[option]);
  }

var Stanley = new Giraffe('stanley', 5);
```
___

# SPRINT TWO: DATA STRUCTURES

## Linked List

A linked list is a dynamic data structure that allows for constant time insertion and removal at any point in the linked list (compare this to an array which on average has linear time insertion and removal operations). In exchange for this insertion and removal speed, linked lists are not indexed and any find operations on a link list require the linear time operation of traversing the entire linked-list from the beginning.

A linkedList class, in functional style, with the following properties:

* .head property, a linkedListNode instance
* .tail property, a linkedListNode instance
* *.addToTail()* method, takes a value and adds it to the end of the list
* *.removeHead()* method, removes the first node from the list and returns its value
* *.contains()* method, returns boolean reflecting whether or not the passed-in value is in the linked list

What is the time complexity of the above functions?

## Tree

A tree is a hierarchical data structure consisting of a node (potentially) with children. The children are trees unto themselves, that is, nodes with (potential) children. For this reason the tree is referred to as a recursive data structure.

* A tree class, in functional with shared methods style, with the following properties:
* .children property, an array containing a number of subtrees
* *.addChild()* method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
* A *.contains()* method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
* What is the time complexity of the above functions?

## Graph

Graphs consist of nodes (often referred to as vertices) and edges (often referred to as arcs) that connect the nodes. Unlike trees, graphs are not necessarily hierarchical. Graphs can be undirected, which means that the relationship of any 2 nodes connected by an edge is a symmetrical relationship, or they can be directed, which means there is an asymmetrical relationship between nodes that are connected by an edge. You will be implementing an undirected graph.

## Set

Sets contain unique values in no particular order. A set would be great for.... A raffle, where all the tickets are unique and you just want to randomly pick one (or several) out of them all.

A set class, in prototypal style, with the following properties:

* An *.add()* method, takes any string and adds it to the set
* A .contains() method, takes any string and returns a boolean reflecting whether it can be found in the set
* A *.remove()* method, takes any string and removes it from the set, if present
* What is the time complexity of the above functions?

**Note:** Sets should not use up any more space than necessary. Once a value is added to a set, adding it a second time should not increase the size of the set.

**Note:** Until the advanced section, your sets should handle only string values.

**Note:** This is a rather simple data structure. Take a look at the Wikipedia entry. Which native Javascript type fits the requirements best?

## Hash Table

Hash tables (sometimes called hash maps) store key value pairs. They do so in a memory efficient way by using a 'hashing function' that translates keys into numerical indices located within a fixed block of memory (think about the contiguous blocks of memory used in arrays). Hash tables only increase their size in memory when necessary, and reduce their size in memory when possible. A hash table would be great for.... A contact list you might add to or remove from over time.

* A hashTable class, in pseudoclassical style:

  * First: Play with each of the helper functions provided to get a sense of what they do.
  * You will use the provided hash function to convert any key into an array index. Try interacting with it from the console first.
  * A limitedArray helper has been provided for you, check out the source code for it in src/hashTableHelpers.js. Use it to store all inserted values rather than using a plain JavaScript array. The limitedArray, as you will see in the source code, provides get, set, and each methods which you should use in order to interact with it. Do not use the typical bracket notation for arrays when interacting with a limitedArray instance. Try interacting with it from the console first.
* Make the following properties appear on all instances:

  * An .insert() method
  * A .retrieve() method
  * A .remove() method

What is the time complexity of the above functions?

Using your understanding of hash tables, refactor your set implementation from above to run in constant time

**On Objects and Hash Tables:** An astute hacker might find themselves wondering "Is it not so that a JavaScript object is a hash table?" or even further, "Why would I ever need to create a hash table in JavaScript?" While it is true that objects and hash tables are functionally similar, knowing how a hash table works is hugely important as they are an incredibly useful and fundamental data structure. To have detailed knowledge of how a hash table is constructed will give you valuable insight on your path to code mastery. Additionally, other languages might not provide the convenience of JavaScript's object class, meaning you may someday have to put your hash table construction abilities to good use.

> Interesting Aside: JavaScript objects aren't necessarily backed by hash tables. Despite the similarities, the ECMA-262 standard makes no restrictions on how JavaScript objects are implemented. The V8 JavaScript engine, which is used in Chrome, implements objects in a way that is significantly faster than using a hash table.


## Binary Search Tree

Binary trees are trees that can only have 0, 1, or 2 children. Remember that trees are recursive data structures and therefore a tree's children are themselves trees and can each have 0, 1, or 2 children. In a binary search tree, one child (out of potentially two) will always be less than the node's value (based on whatever sorting condition you wish) and the other child will always be greater than the node's value. Whether it is the 'left' or the 'right' child which is greater or lesser is consistent throughout the binary search tree. This structure results in particularly fast find operations. You'll be asked to answer just how fast yourself. A binary search tree would be great for.... A dictionary of all English words.

Implement a binarySearchTree class with the following properties:
* A .left property, a binary search tree (BST) where all values are lower than the current value.
* A .right property, a BST where all values are higher than the current value.
* A *.insert()* method, which accepts a value and places it in the tree in the correct * position.
* A *.contains()* method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
* A *.depthFirstLog()* method, which accepts a callback and executes it on every value contained in the tree.
What is the time complexity of the above functions?

Use case: Given a list of a million numbers, write a function that takes a new number and returns the closest number in the list using your BST. Profile this against the same operation using an array.

Tests

For each of the data structures you have implemented, go back and add at least one additional unit test. If possible, try to add a test that will require you improve your implementation in order to make the test pass.

**APIs and Implementation: A Note on Communicating Your Intentions as a Developer**

**tl;dr:** *prefix private properties and methods with an underscore*

APIs are more than just URLs that return data; **API** is a general term that refers to the visible surface of any system, object, or library with which your code interacts. E.g., an airplane has an API that consists of knobs, dials, pedals, and a yoke which allow the pilot to make use of the airplane's underlying **implementation**--an engine, wings, and rudders. Importantly, the next model of airplane will probably have improvements to the engine, but the pilot need not know about this, as the controls will remain basically unchanged.

This relationship between APIs and implementations--that they remain independent--is what keeps the towering stacks of software we use everyday from falling over.

In JavaScript, because there is no concept of private variables (except through closure), sometimes API and implementation are both visible. If it's impossible to distinguish between API and implementation, you might depend upon a piece of implementation that later changes and breaks your code.

To prevent this from happening to your collaborators and consumers, indicate private properties and methods by prefixing them with an underscore. This is how we do.

# ADVANCED CONTENT
Our advanced content is intended to throw you in over your head, requiring you to solve problems with very little support or oversight, much like you would as a mid or senior level engineer.

**Use the [Chrome profiling](https://developers.google.com/web/tools/chrome-devtools/rendering-tools/js-execution) tools to compare the performance of each instantiation pattern.**

* Create a new HTML page with your data structures and an additional profiling script. It should instantiate and use a large number of stacks and queues
* Reload the page with the CPU profiler running to investigate the runtime of your functions
* Take a [heap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop) snapshot to investigate object allocations and memory use
* Optionally, reload the page with the heap profiler running to investigate garbage collection behavior
* Do this for each of the instantiation styles, record, and compare the results. Write a brief analysis you could share with a supervisor who needs the information you have in order to make wise decisions about the design of an upcoming project.

**Note:** *The following prompts have varying levels of difficulty and you may not wish to complete all of them in entirety. In order to decide how to allocate your time, please read the descriptions of all of them before starting.*

**Optional, but highly recommended:** Use TDD.

* Create a [doubly-linked-list](https://en.wikipedia.org/wiki/Doubly_linked_list), with all the methods of your linked list, and add the following properties:
  * An *.addToHead()* method which takes a value and adds it to the front of the list.
  * A *.removeTail()* method which removes the last node from the list and returns its value.
Note: each *node* object will need to have a new .previous property pointing to the node behind it (or to *null* when appropriate); this is what makes it a doubly-linked list.
* Add parent links to your tree
  * A *.parent* property, which refers to the parent node or null when there is no node
  * A *.removeFromParent()* method, which disassociates the tree with its parent (in both directions)
  * To prevent excessive collisions, make your *hashTable* double in size as soon as 75 percent of the spaces have been filled
* To save space, make sure the *hashTable* halves in size when space usage falls below 25 percent
* Implement a *.traverse()* method on your tree. Your .traverse() should accept a callback and execute it on every value contained in the tree
* *.breadthFirstLog()* method for *binarySearchTee*, logs the nodes contained in the tree using a breadth-first approach
* Make your set capable of handling numbers as well as strings
* Make your set capable of handling input objects of any type
* Make your binarySearchTree rebalance as soon as the max depth is more than twice the minimum depth
Implement a *bloomFilter:*
* Read the Wikipedia article about [Bloom Filters](https://en.wikipedia.org/wiki/Bloom_filter) and/or [BillMill.org](https://billmill.org/)'s [Bloom Filters by Example](https://llimllib.github.io/bloomfilter-tutorial/). tl;dr: It's a probabilistic data structure that efficiently determines whether or not an element is contained in a set. The downside is that is can report false positives. Use cases are often for checking against a giant list locally and only doing a full lookup when the local one comes back positive.
* Create an "m=18, k=3" bloom filter. This means 18 slots, with 3 hash functions.
* Run a small loop that runs 10,000 trials of trying to retrieve a mix of items that are in the filter and not in the filter.
* Record the empirical rate of false-positives by comparing your result with what you know to be true from the inputs you selected.
* Compare that rate with the approximation given for Bloom filters, which is approximated as (1- e^(-kn/m))^k


# NIGHTMARE MODE:

**Note:** Please feel free to attempt the following in any order you would like.

* Write a [prefixTree](https://en.wikipedia.org/wiki/Trie) that can handle autocomplete for T9-style texting
* Write a [bTree](https://en.wikipedia.org/wiki/B-tree)
* Write a [redBlackTree](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree)
* Design a data structure that finds every English word that can be made from a given bag of Scrabble letters
* Optimize the algorithm and the data structure to return the set of words as quickly as possible
* Your priority for this task is to optimize for time complexity, but do try to avoid wasted space in your solution
* You can assume you have all the time required to do preprocessing on a dictionary of English words
* Advanced [graph](https://en.wikipedia.org/wiki/Graph) work using node.js (see section below)

# ADVANCED GRAPHS WITH NODE.JS

For this exercise you will work with adjacency list representations of graphs using node.js, which will allow you to interact with your file system. You'll learn a ton about node later in the course, but this is advanced content so why not get started early. You can find out if node is installed on the computer you're working on by entering which node into the terminal. If node is installed you will see the path to the node binary, otherwise you'll see a blank line. If necessary, [install node](https://nodejs.org/en/) on the computer you're working on.

* Create a basic JavaScript file that logs something to the console
* In the terminal, in the directory of the file you just created (for this example let's say it's called test.js) run the command node test.js. You just ran JavaScript with the node interpreter and should see whatever you logged to the console in the terminal
* Familiarize yourself with [Adjacency Lists](https://en.wikipedia.org/wiki/Adjacency_list) and [Adjacency Matrices](https://en.wikipedia.org/wiki/Adjacency_matrix)
* Whiteboard either a directed or an undirected graph and then translate it into an adjacency list text file
* Write a function to return how many nodes your graph has. In order to accomplish this you will need to use node's fs module to read your adjacency list text file and split it into lines. You'll learn how to do this later in the course, but for now, feel free to use the following code:

```javascript
// this line lets you access the file system. You'll learn more about it later in the course
var fs = require('fs');

// read the `adjacency-list` file in this directory (you might have named the file differently) and split it on new lines into an array
var fileLines = fs.readFileSync('./adjacency-list').toString().split('\n');

// you may have to do this 0 or more times, to remove blank lines from fileLines
fileLines.pop();

fileLines.forEach(function(line) {
// here you have access to each line of the adjacency list
console.log(line);
});
```

* Write a function to perform a [depth first search](http://www.algolist.net/Algorithms/Graph/Undirected/Depth-first_search) (DFS) on your graph and output the node values in depth first order
  * Write Unit Tests for your DFS function
* Try running your DFS function on a [larger adjacency list](https://snap.stanford.edu/data/#socnets)
  * Find, or create, a data set that will result in your exceeding the maximum call stack size, and then, refactor your DFS function to use [tail-call recursion](https://en.wikipedia.org/wiki/Tail_call) which is now possible in JavaScript on account of new language features introduced in the ES6 specification.
* Implement [Karger's Algorithm](https://en.wikipedia.org/wiki/Karger%27s_algorithm) to identify the [Minimum Cut](https://en.wikipedia.org/wiki/Minimum_cut) for the minimum number of edges in an undirected graph
  * Write Unit Tests for your implementation
  * Start with a small undirected graph (in adjacency list format) of your own making, then give it a go with a [larger adjacency list](https://snap.stanford.edu/data/#socnets)
  * Try really hard to break your implementation so you are forced to improve it
* Use [Kosaraju's Algorithm](https://en.wikipedia.org/wiki/Kosaraju%27s_algorithm) to identify the greatest [strongly connected component](https://en.wikipedia.org/wiki/Strongly_connected_component) (SCC) of a directed graph
  * Write Unit Tests for your implementation
  * Start with a small directed graph (in adjacency list format) of your own making, then give it a go with a [larger adjacency list](https://snap.stanford.edu/data/#socnets)
  * Try really hard to break your implementation so you are forced to improve it
* Build a web crawler (see the Nightmare Mode content from the Recursion Review repo), to crawl the [webgraph](https://en.wikipedia.org/wiki/Webgraph), and utilize your implementation of Kosaraju's Algorithm to identify clusters of strongly connected web sites. Present your findings in a way that is easy for humans to understand.
  * Make your web crawler robust enough to run overnight, recovering from failures, so that you can return in the morning with massive amounts of meaningful data.
  * As your web crawler runs, store all the information it gathers in redis. You will have to use the [node.js redis client](https://github.com/NodeRedis/node-redis) in order to do this.

# RESOURCES

* [Data structure](https://en.wikipedia.org/wiki/Data_structure) coverage in Wikipedia is no joke. Consider heading to Wikipedia when you have questions about data structures you are working with, or want to start learning about new ones.
* [VisuAlgo](visualgo.com) is an incredible sight with clean visualizations of all kinds of data structures and algorithms.
* Hack Reactor graduate Ryan Atkinson's excellent blog post [JavaScript Classes and Instantiation Patterns](https://www.ryanatkinson.io/javascript-instantiation-patterns/)
