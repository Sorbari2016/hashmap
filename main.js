// TESTS

import { HashMap } from "./index.js";


const test = new HashMap(16, 0.75); 

test.set('apple', 'red')
 test.set('banana', 'yellow')
 test.set('carrot', 'orange')
 test.set('dog', 'brown')
 test.set('elephant', 'gray')
 test.set('frog', 'green')
 test.set('grape', 'purple')
 test.set('hat', 'black')
 test.set('ice cream', 'white')
 test.set('jacket', 'blue')
 test.set('kite', 'pink')
 test.set('lion', 'golden'); 

 console.log(test); 

//  Overwrite
test.set('elephant', 'dark-gray'); 
test.set('carrot', 'orange-purple')
test.set('lion', 'golden-yellow'); 

console.log(test.length()); 

test.set('moon', 'silver'); 

console.log(test.length()); 

// Overwrite
test.set('dog', 'dark-brown'); 
test.set('banana', 'yellow-green');  

test.get('moon')   // silver
test.has('lion') // true
test.keys(); // ['moon', 'carrot', 'frog', 'banana', 'grape', 'ice cream', 'jacket', 'kite', 'elephant', 'apple', 'hat', 'dog', 'lion']
test.values(); // ['silver', 'orange-purple', 'green', 'yellow-green', 'purple', 'white', 'blue', 'pink', 'dark-gray', 'red', 'black', 'dark-brown', 'golden-yellow']
test.entries() // (12) [Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(2)]
test.remove('moon'); 

console.log(test); 
console.log(test.length()); 

test.clear(); 

console.log(test); 
 