arr1 = [1, 2, 3, 4, 5];
// console.log(arr1); // [1, 2, 3, 4, 5]
// console.log(arr1[0]); // 1
// console.log(arr1.length); // 5

/*
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}
*/

// console.log(arr1);
// arr1[2]=69;
// console.log(arr1);
/*
[ 1, 2, 3, 4, 5 ]
[ 1, 2, 69, 4, 5 ]
*/
// ------------------------------------------------------
// console.log(typeof arr1); // object
// console.log(typeof(arr1.toString())); // string

// console.log(arr1.join(" and ")); // 1 and 2 and 3 and 4 and 5

// let a = arr1.pop();
// console.log(`the array after popping is: ${arr1} and the popped item is: ${a}`); // [ 1, 2, 3, 4 ]
// the array after popping is: 1,2,3,4 and the popped item is: 5

// arr1.push(895);
// console.log(arr1); // [ 1, 2, 3, 4, 5, 895 ]

// arr1.shift();
// console.log(arr1); // [ 2, 3, 4, 5 ] => 1 gets removed

// arr1.unshift(45);
// console.log(arr1); // [ 45, 1, 2, 3, 4, 5 ] => 45 gets added at the beginning

// console.log(arr1.length);
// delete arr1[2];
// console.log(arr1);
// console.log(arr1.length);

// let arr2 = [11, 12, 13, 14, 15];
// let newArray=arr1.concat(arr2);
// console.log(newArray);
/*
[1,  2,  3,  4,  5, 11, 12, 13, 14, 15]
*/

/*
let compare = (a, b) => {
    return a - b; // for ascending order (descending = b-a)
}
arr2 = [56, 75, 34, 76, 3, 6, 56, 0];
console.log(arr2.sort(compare));
*/

/*
sorting alphabetically
[0, 3, 34, 56, 56, 6, 75, 76]

[0, 3, 6, 34, 56, 56, 75, 76]
*/

// console.log(arr1.reverse()); // [ 5, 4, 3, 2, 1 ] => reverses an array

// Splice and slice
// arr1.splice(2, 3, 1021, 1022, 1023, 1024, 1025); // index, noOfItemsToRemove, NewItems
// let deletedValue=arr1.splice(2, 3, 1021, 1022, 1023, 1024, 1025); 
// console.log(arr1);  // [1, 2, 1021, 1022, 1023, 1024, 1025]
// console.log(deletedValue); // [3,4,5]


// Slice
// let newArr = arr1.slice(3);
// console.log(newArr); // [4, 5]