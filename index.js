// Creating a hash map blueprint


// Create a Node class 
class Node {
  constructor(value = null) {
    this.value = value; 
    this.nextNode = null; 
  }
}


// 
class HashMap {
  constructor(capacity = 16, loadFactor = 0.70 {
    this.capacity = capacity; 
    this.loadFactor = loadFactor; 
    this.buckets = new Array(capacity).fill(null).map(() => []); 
    this.size = 0;
  }



}


export {LinkedList, Node}



