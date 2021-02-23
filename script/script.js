//console.log('Hello World!');

//Adding in an array


let items = ['pencil', 'hat', 'book']; //Length of array is 3, maximum index is 2.


//referencing array index.
console.log(items[0]);
console.log(items[2]);
//getting array length
console.log(items.length);

//to add to an array...

items.push('laptop');

console.log('the new length is ' + items.length);
console.log('the new item is ' + items[3]);

//Removing last element from array. pop() returns the final index.
//console.log(items.pop());
//2nd way to add to an array

items[4] = 'suitcase';
console.log(items);
//Prints the list of items.