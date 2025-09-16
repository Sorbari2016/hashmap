// HASHSET CONSTRUCTION

import { LinkedList } from "./javaScript.js";

class HashSet {
  constructor(capacity = 16, loadFactor = 0.70) {
    this.capacity = capacity; 
    this.loadFactor = loadFactor; 
    this.buckets = new Array(capacity)
      .fill(null)
      .map(() => new LinkedList()); 
    this.size = 0; // number of keys stored
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  add(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (!bucket.find(key)) { // only add if key doesn’t exist
      bucket.append(key);    // value defaults to null
      this.size++;
    }

    if (this.size / this.capacity > this.loadFactor) {
      this.resize();
    }
  }


  has(key) {
    const index = this.hash(key);
    return !!this.buckets[index].find(key);
  }

  delete(key) {
    const index = this.hash(key);
    const removed = this.buckets[index].remove(key);
    if (removed) this.size--;
    return removed;
  }


  keys() {
    let keys = [];
    for (let bucket of this.buckets) {
      keys.push(...bucket.keys());
    }
    return keys;
  }


  length() {
    return this.size;
  }

  clear() {
    for (let bucket of this.buckets) {
      bucket.clear();
    }
    this.size = 0;
  }


  resize() {
    const oldBuckets = this.buckets;

    this.capacity *= 2;
    this.buckets = new Array(this.capacity)
      .fill(null)
      .map(() => new LinkedList());
    this.size = 0;

    for (let bucket of oldBuckets) {
      let node = bucket.head;
      while (node) {
        this.add(node.key);
        node = node.nextNode;
      }
    }
  }
}

export { HashSet };
