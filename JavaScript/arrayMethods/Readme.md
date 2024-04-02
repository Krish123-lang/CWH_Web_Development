1. arr1 = [1, 2, 3, 4, 5]; => creates an array
2. arr1.length => returns length of array
3. arr1[2]=34; => replaces the 3rd index of an array with 34

4. arr1.toString() => converts the array to string
5. arr1.join("and") => joins "and" with the array elements 
6. arr1.pop() => removes the last item of array
7. arr1.push() => adds an item at the beginning of array
8. arr1.shift() => remove the item from the beginning of the array
9. arr1.unshift(45) => 45 gets added at the beginning of the array

10. delete arr1[2] => deletes an item from the 2nd index i.e. 3rd item but the length still remains same

11. arr1.concat(arr2) => joins two or more array

12. arr1.sort() => sorts alphabetically
```
let compare = (a, b) => {
    return a - b; // for ascending order (descending = b-a)
}
arr2 = [56, 75, 34, 76, 3, 6, 56, 0];
console.log(arr2.sort(compare));
```
13. arr1.reverse() => reverses an array
14. 
```
arr1.splice(2, 3, 1021, 1022, 1023, 1024, 1025); // index, noOfItemsToRemove, NewItems

let deletedValue=arr1.splice(2, 3, 1021, 1022, 1023, 1024, 1025); 

console.log(arr1);  // [1, 2, 1021, 1022, 1023, 1024, 1025]

console.log(deletedValue); // [3,4,5]
```
15. 
```
let newArr = arr1.slice(3);
console.log(newArr); // [4, 5]
```