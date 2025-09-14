// Creating a hash map blueprint

// 
class HashMap {
  constructor(capacity = 16, loadFactor = 0.70 {
    this.capacity = capacity; 
    this.loadFactor = loadFactor; 
    this.buckets = new Array(capacity).fill(null).map(() => []); 
    this.size = 0;
  }

  hash(key) {
  }

  set(key, value) {
  }

}


export {HashMap}



