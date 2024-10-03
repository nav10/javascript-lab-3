//declaring array with 5 elements
let myArray = [25, "blue", 50, "green", 100];

//accessing the first element
let firstElement = myArray[0];

//accessing the last element using the length property
let lastElement = myArray[myArray.length - 1];

//accessing the middle element (for arrays with an odd number of elements)
let middleIndex = Math.floor(myArray.length / 2);
let middleElement = myArray[middleIndex];

//output results
console.log("First element:", firstElement);
console.log("Middle element:", middleElement);
console.log("Last element:", lastElement);

//get length of the array
let arrayLength = myArray.length;

//log result to console
console.log("Number of elements in the array:", arrayLength);

//using .push() to add an element at the end of the array
myArray.push("yellow");
console.log("After .push():", myArray);

//using .pop() to remove the last element of the array
myArray.pop();
console.log("After .pop():", myArray);

//using .unshift() to add an element to the beginning of the array
myArray.unshift("purple");
console.log("After .unshift():", myArray);

//using .shift() to remove the first element of the array
myArray.shift();
console.log("After .shift():", myArray);

//using .splice() to modify an element (change green to red)
let greenIndex = myArray.indexOf("green");
if (greenIndex !== -1) {
    myArray.splice(greenIndex, 1, "red");
}
console.log("After .splice():", myArray);

//for loop
for (let i = 0; i < myArray.length; i++) {
    console.log("Element at index", i, ":", myArray[i]);
}

//forEach() method
myArray.forEach((element, index) => {
    console.log("Element at index", index, ":", element);
});

//destructuring the first 2 elements and capturing the rest
const [first, second, ...rest] = myArray;

console.log("First element:", first);
console.log("Second element:", second); 
console.log("Remaining elements:", rest); 