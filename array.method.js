// Array is a built-in object in JavaScript that allows you to store multiple values in a single variable.

// for adding and removing elements from an array, JavaScript provides several methods. 
// Here are some commonly used array methods:

// 1. push(): Adds one or more elements to the end of an array and returns the new length of the array.
//  it modifies the original array.

//  example:
 let fruits = ['apple', 'banana'];
 fruits.push('orange');
 console.log(fruits); // Output: ['apple', 'banana', 'orange']

// 2. pop(): Removes the last element from an array and returns that element.
//  it modifies the original array.

// 3. shift(): Removes the first element from an array and returns that element.
// //  it modifies the original array.

// 4. unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
// //  it modifies the original array.

// 5. splice(): Changes the contents of an array by removing or replacing existing elements and/or 
// adding new elements in place.
// //  it modifies the original array.
// example:
// let numbers = [1, 2, 3, 4, 5];
// numbers.splice(2, 1, 6);// This will remove 1 element at index 2 (which is 3) and add 6 in its place.
// console.log(numbers); // Output: [1, 2, 6, 4, 5]



// 6. slice(): Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
//  it does not modify the original array.
// example:
let numbers = [1, 2, 3, 4, 5];  
let slicedNumbers = numbers.slice(1, 4); // This will return a new array with elements from index 1 to 3.
console.log(slicedNumbers); // Output: [2, 3, 4]
console.log(numbers); // Output: [1, 2, 3, 4, 5] (original array is unchanged)

// 7. concat(): Used to merge two or more arrays. This method does not change the existing arrays,
//   but instead returns a new array.
// example:
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = array1.concat(array2);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// 8. indexOf(): Returns the first index at which a given element can be found in the array, 
// or -1 if it is not present.
// example:
let numbers = [1, 2, 3, 4, 5];
let index = numbers.indexOf(3);
console.log(index); // Output: 2
console.log(numbers); // Output: [1, 2, 3, 4, 5] (original array is unchanged)

// 9. includes(): Determines whether an array includes a certain value among its entries, 
// returning true or false as appropriate.
// example:
let numbers = [1, 2, 3, 4, 5];
let hasValue = numbers.includes(3);
console.log(hasValue); // Output: true
console.log(numbers); // Output: [1, 2, 3, 4, 5] (original array is unchanged)

// 10. forEach(): Executes a provided function once for each array element.and it returns undefined. 
// It does not modify the original array.we use only for iterating over the array elements and
//  performing some operation on them. and alternatively, we can use for loop for iterating over the array elements.
// so why it can be created? because it is more readable and easier to understand than a for loop, 
// especially when working with complex data structures or performing multiple operations on each element. 
// It also allows for the use of arrow functions, which can make the code more concise and easier to read.
// example:
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number);
}
);

// Output:
// 1
// 2
// 3
// 4
// 5

// 11. map(): Creates a new array populated with the results of calling a provided function on every 
// element in the calling array.
// it returns a new array and does not modify the original array.
// example:
let numbers = [1, 2, 3, 4, 5];

let squaredNumbers = numbers.map(function(number) {
  return number * number;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// 12. filter(): Creates a new array with all elements that pass the test implemented by the provided function.
// it returns a new array and does not modify the original array.
// example:
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4] 

// 13. reduce(): Executes a reducer function (that you provide) on each element of the array,
//   resulting in a single output value.
// it does not modify the original array.
// example:
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function(accumulator, number) {
  return accumulator + number;
}, 0);
console.log(sum); // Output: 15

// 14. find(): Returns the value of the first element in the array that satisfies the provided testing function.
// it does not modify the original array.
// example:
let numbers = [1, 2, 3, 4, 5];
let foundNumber = numbers.find(function(number) {
  return number === 3;
});
console.log(foundNumber); // Output: 3

// 15. findIndex(): Returns the index of the first element in the array that satisfies the provided testing function.
// it does not modify the original array.
// example:
let numbers = [1, 2, 3, 4, 5];
let foundIndex = numbers.findIndex(function(number) {
  return number === 3;
});
console.log(foundIndex); // Output: 2

// 16. sort(): Sorts the elements of an array in place and returns the sorted array.
// it modifies the original array.
// example:
let numbers = [5, 3, 8, 1, 2];  
numbers.sort();
console.log(numbers); // Output: [1, 2, 3, 5, 8]

// 17. reverse(): Reverses the order of the elements of an array in place.
// it modifies the original array.
// example:
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // Output: [5, 4, 3, 2, 1]

// 18. join(): Joins all elements of an array into a string and returns this string.
// it does not modify the original array.
// example:
let fruits = ['apple', 'banana', 'orange'];
let fruitString = fruits.join(', ');
console.log(fruitString); // Output: "apple, banana, orange"

// 19. toString(): Returns a string representing the specified array and its elements.
// it does not modify the original array.
// example:
let fruits = ['apple', 'banana', 'orange'];
let fruitString = fruits.toString();
console.log(fruitString); // Output: "apple,banana,orange"

//  20. some(): Tests whether at least one element in the array passes the test implemented by the provided function.
// it returns a boolean value and does not modify the original array.
// example:
let numbers = [1, 2, 3, 4, 5];
let hasEvenNumber = numbers.some(function(number) {
  return number % 2 === 0;
});
console.log(hasEvenNumber); // Output: true

//  21. every(): Tests whether all elements in the array pass the test implemented by the provided function.
// it returns a boolean value and does not modify the original array.
// example:     
let numbers = [2, 4, 6, 8, 10];
let allEvenNumbers = numbers.every(function(number) {
  return number % 2 === 0;
});
console.log(allEvenNumbers); // Output: true

//  22. flat(): Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// it returns a new array and does not modify the original array.
// example:
let nestedArray = [1, [2, [3, [4]], 5]];
let flattenedArray = nestedArray.flat(2);// This will flatten the array up to 2 levels deep.

console.log(flattenedArray); // Output: [1, 2, 3, [4], 5]   
// can we do flat(3)? yes, we can do flat(3) and it will flatten the array up to 3 levels deep.
let deeplyNestedArray = [1, [2, [3, [4, [5]]]]];
let deeplyFlattenedArray = deeplyNestedArray.flat(4);// This will flatten the array up to 4 levels deep.how it works? 
//it will flatten the array until it reaches the specified depth or until there are no more nested arrays
 //to flatten, whichever comes first.
console.log(deeplyFlattenedArray); // Output: [1, 2, 3, 4, 5]

//  23. flatMap(): First maps each element using a mapping function, then flattens the result into a new array.
// it returns a new array and does not modify the original array.
// example:
let numbers = [1, 2, 3, 4, 5];
let mappedAndFlattenedArray = numbers.flatMap(function(number) {
  return [number, number * 2];
});
console.log(mappedAndFlattenedArray); // Output: [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]

//

