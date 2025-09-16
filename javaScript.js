// LINKED LIST 
// Modify this linked list blueprint, to be used as elements of the HashMap

// Create a Node class 
class Node {
  constructor(key, value = null) {
    this.key = key;               // Added a key property to the original blueprint. 
    this.value = value; 
    this.nextNode = null; 
  }
}

// Added a few other helper methods to the original blueprint. 
class LinkedList {
  constructor() {
    this.head = null; 
    this.size = 0; 
  }

  append(key, value) {
    const newNode = new Node(key, value);

    if (!this.head) {
      this.head = newNode;   
    } else {
      let currentNode = this.head;
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;  
      }
      currentNode.nextNode = newNode;  
    }

    this.size++; 
  }


  prepend(key, value) {
    const newNode = new Node(key, value);
    newNode.nextNode = this.head;  
    this.head = newNode;       
    this.size++;
  }

    // Add a helper function, that can be used to check if a key exist 
  find(key) {
    let currentNode = this.head;

    while (currentNode !== null) {
        if (currentNode.key === key) {
        return currentNode;   // return the node if key matches
        }
    currentNode = currentNode.nextNode;
    }

    return null;  // not found
  }

  // To get all the keys in a list
  keys() {

    if (!this.head) return []; 

    const keys = []; 
    let currentNode = this.head; 

    while (currentNode !== null) {
      keys.push(currentNode.key); 
      currentNode = currentNode.nextNode; 
    }
    return keys; 
  }

  // To get all the values in a list
  values() {
    if (!this.head) return []; 

    const values = []; 
    let currentNode = this.head; 

    while(currentNode !== null) {
      values.push(currentNode.value); 
      currentNode = currentNode.nextNode; 
    }

    return values; 
  }

  // To return an array that contains each key, value pair.
  entries() {
    if (!this.head) return [];

    const entries = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      entries.push([currentNode.key, currentNode.value]);
      currentNode = currentNode.nextNode;
    }

    return entries; 
  }

 
  size() {
    return this.size; 
  }

  
  head() {
    return this.head; 
  }

  
  tail() {
    if (!this.head) return null; // empty list

    let currentNode = this.head;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode; // keep going until last node
    }
    return currentNode;
  }


  at(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let currentNode = this.head;
    let count = 0;

    while (count < index) {
      currentNode = currentNode.nextNode;
      count++;
    }

    return currentNode;
  }

  
  pop() {
    // for an empty list
    if (!this.head) {
      return null; 
    }

    if (!this.head.nextNode) {
      const value = this.head.value;
      this.head = null;
      this.size--;
      return value;
    }

    let currentNode = this.head;
    while (currentNode.nextNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    const value = currentNode.nextNode.value;
    currentNode.nextNode = null; // unlink the last node
    this.size--;

    return value;
  }

  contains(value) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }

    return false; 
  }

  findIndex(value) {
    let currentNode = this.head;
    let index = 0; 

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index; 
      }
      currentNode = currentNode.nextNode;
      index++; 
    }

    return null;  
  }

  
  toString() {
    let currentNode = this.head; 
    let list = ''
    while(currentNode) {
      list += `(${currentNode.key}, ${currentNode.value}) -> `
      currentNode = currentNode.nextNode; 
    }
    return list + ' ' + null; 
  }

  insertAt(value, index) {
    if (index === undefined || index < 0) {
      index = 0;
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      this.size++;
      return;
    }

  
    const previousNode = this.at(index - 1);

    if (!previousNode) {
      throw new Error("Index is out of bounds");
    }

  
    newNode.nextNode = previousNode.nextNode;
    previousNode.nextNode = newNode;

    this.size++;
  }

  // Helper to remove node by key
  remove(key) {
    if (!this.head) return false; // empty list, nothing to remove

    //   if head contains the key.
    if (this.head.key === key) {
      this.head = this.head.nextNode;
      this.size--; 
      return true;
    }

    // if key is in node other than head
    let currentNode = this.head;
    while (currentNode.nextNode) {
      if (currentNode.nextNode.key === key) {
        currentNode.nextNode = currentNode.nextNode.nextNode;
        this.size--; 
        return true;
      }
      currentNode = currentNode.nextNode;
    }

    // not found
    return false;
  }


  removeAt(index) { 
    if (index === undefined || index < 0) {
      index = 0;
    }
    if (index >= this.size) {
      throw new Error("Index out of bounds");
    }

    if (index === 0) {
      const removedValue = this.head.value;
      this.head = this.head.nextNode;
      this.size--;
      return removedValue;
    }

    const previousNode = this.at(index - 1);
    const nodeToRemove = previousNode.nextNode;

    previousNode.nextNode = nodeToRemove.nextNode;

    this.size--;
    return nodeToRemove.value;
  }

  // Helper to delete all the nodes in a list. 
  clear() {
    if (!this.head) return;  //when there is nothing to clear
    this.head = null; 
    this.size = 0; 
  }

}

export {LinkedList}

