class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {

    this.storage = {}
    this.count = 0
    this.lowestCount = 0
  }

  enqueue(value){
    this.storage[this.count] = value
    this.count++
  }

  dequeue(){
    if (this.count - this.lowestCount === 0){
          return undefined
      }

      var dequeuedValue = this.storage[this.lowestCount]
      delete this.storage[this.lowestCount]
      this.lowestCount++
      return dequeuedValue
  }

  size(){
    return this.count - this.lowestCount
  }

}
