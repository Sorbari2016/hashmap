// Creating a linkedlist blueprint


// Create a Node class 
class Node {
  constructor(value = null) {
    this.value = value; 
    this.nextNode = null; 
  }
}


// Create a LinkedList class, blueprint for a full list. 
class LinkedList {
  constructor() {
    this.head = null; 
    this.size = 0; 
  }

  // Add a new node to the end of the list
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;   // first element
    } else {
      let currentNode = this.head;
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;  // move to the last node
      }
      currentNode.nextNode = newNode;   // link last node to new node
    }

    this.size++;  // increase the size of the list.
  }

  // Add a new node to the beginning of the list
  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;  // new node points to old head
    this.head = newNode;       // head is now the new node
    this.size++;
  }


  // To get the size of list, total nodes in the list. 
  size() {
    return this.size; 
  }

  // To return the first node or head
  head() {
    return this.head; 
  }

  // To get the last element or the tail 
  tail() {
  if (!this.head) return null; // empty list

  let currentNode = this.head;
  while (currentNode.nextNode !== null) {
    currentNode = currentNode.nextNode; // keep going until last node
  }
  return currentNode;
}

  // To return the node at a given index
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

// to remove the last element from the list
pop() {
  // for an empty list
  if (!this.head) {
    return null; 
  }

  // If there's only one node
  if (!this.head.nextNode) {
    const value = this.head.value;
    this.head = null;
    this.size--;
    return value;
  }

  // For more than one node
  let currentNode = this.head;
  while (currentNode.nextNode.nextNode !== null) {
    currentNode = currentNode.nextNode;
  }

  // currentNode is now second-to-last
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

// to return the index of the node containing searched value, or null if not available
find(value) {
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

//  to print the nodes and pointers of a list
 toString() {
  let currentNode = this.head; 
  let list = ''
  while(currentNode) {
      list += `(${currentNode.value}) -> `
    currentNode = currentNode.nextNode; 
  }
  return list + ' ' + null; 
 }

// To add a new node with the provided value at the given index
insertAt(value, index) {
  // Handle invalid index
  if (index === undefined || index < 0) {
    index = 0;
  }

  const newNode = new Node(value);

  // Insert at head
  if (index === 0) {
    newNode.nextNode = this.head;
    this.head = newNode;
    this.size++;
    return;
  }

  // Get the node before the position
  const previousNode = this.at(index - 1);

  if (!previousNode) {
    throw new Error("Index is out of bounds");
  }

  // Rewire links
  newNode.nextNode = previousNode.nextNode;
  previousNode.nextNode = newNode;

  this.size++;
}

  // To remove node at a particular index
  removeAt(index) {
    // Handle invalid index, and too large index 
  if (index === undefined || index < 0) {
    index = 0;
  }
  if (index >= this.size) {
    throw new Error("Index out of bounds");
  }

  // Remove head
  if (index === 0) {
    const removedValue = this.head.value;
    this.head = this.head.nextNode;
    this.size--;
    return removedValue;
  }

  // Remove non-head
  const previousNode = this.at(index - 1);
  const nodeToRemove = previousNode.nextNode;

  // Skip over the nodeToRemove
  previousNode.nextNode = nodeToRemove.nextNode;

  this.size--;
  return nodeToRemove.value;
}




}


export {LinkedList, Node}



