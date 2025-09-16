// HASHMAP CONSTRUCTION

import { LinkedList } from "./javaScript.js";

// Create the blueprint 
class HashMap {

  constructor(capacity = 16, loadFactor = 0.70) {
    this.capacity = capacity; // total buckets
    this.loadFactor = loadFactor; //threshold before resize
    this.buckets = new Array(capacity)
    .fill(null)
    .map(() => new LinkedList()); // each bucket, a linkedlist.
    this.size = 0; //keeps track of the number of key/value pair, items
  }

  // Create a method to produce a value to access a bucket
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity; // Shrinks value to range of 0 - capacity -1
    }

    return hashCode;
  }

  // Create a method to store a key-value pair, or update value. 
  set(key, value) {
    const index = this.hash(key); 
    const bucket = this.buckets[index]; //Get the linked list.

    // To check if the key already exists, 
    let existingNode = bucket.find(key);
    if (existingNode) {
      existingNode.value = value; // overwrite.
      return;
    }

    // Otherwise add a new node
    bucket.append(key, value);
    this.size++;

    // Check load factor
    if (this.size / this.capacity > this.loadFactor) {
      this.resize();
    }
  }

  // To increase the size of the map, when the original capacity gets full. 
  resize() {
    const oldBuckets = this.buckets;  // store old buckets. 

    this.capacity *= 2; // double capacity
    this.buckets = new Array(this.capacity).fill(null).map(() => new LinkedList()); //create new buckets. 
    this.size = 0; // reset, will recount on reinserts

    for (let bucket of oldBuckets) {  //rehash, & reinsert
      let node = bucket.head;
      while (node) {
        this.set(node.key, node.value); // reinsert into new buckets
        node = node.nextNode;
      }
    }
  }

  // To get data stored, or value, using a key
  get(key) {
    const index = this.hash(key); 
    const bucket = this.buckets[index]; 

    let searchedNode = bucket.find(key); 
    
    return searchedNode ? searchedNode.value : null;
  }


  // To check if a key exist,returns a boolean.
  has(key) {
    const index = this.hash(key); 
    const bucket = this.buckets[index]; 

    let searchedKey = bucket.find(key);

    return searchedKey ? true : false; 
  }

  // To remove a key
  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    const removed = bucket.remove(key); //remove node directly by key. 
    if (removed) {
    this.size--;
    }
    return removed;
  }

  // To get the number of stored keys
  length() {
    return this.size; 
  }

  // To remove all entries in the map
  clear() {
    if (this.size === 0) return; // when the hashmap has no node, node.

    const buckets = this.buckets; 
    
    for (let bucket of buckets) {
      if (bucket.size > 0 ) {
        bucket.clear(); 
      }
    }

    this.size = 0; 
  }

  // To return an array containing all the keys inside the hash map.
  keys() {
    if (this.size === 0) return []; // when there is no list, or node.

    const keys = []; 
    const buckets = this.buckets; 
    for (let bucket of buckets) {
      if (bucket.head) {
        let bucketKeys = bucket.keys();
        keys.push(bucketKeys); 
      }
    }

    return keys.flat(Infinity); 
  }

  // To return an array containing all the values inside the hash map. 
  values() {
    if (this.size === 0) return []; 

    const values = []; 
    const buckets = this.buckets; 

    for (let bucket of buckets) {
      let bucketValues = bucket.values(); 
      values.push(bucketValues); 
    }

    return values.flat(Infinity); 
  }

  // To return an array that contains each key, value pair.
  entries() {
    if (this.size === 0) return [];

    let entries = [];
    const buckets = this.buckets;

    for (let bucket of buckets) {
      if (bucket.head) {
        let bucketEntries = bucket.entries();
        entries.push(bucketEntries);
      }
    }

    return entries; 
  }
    
}

export {HashMap}



