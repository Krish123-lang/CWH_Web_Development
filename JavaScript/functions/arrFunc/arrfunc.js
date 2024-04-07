let nums=[4,3,6,7, 1,2, 6,9,0, 44];
/*
nums.map((val) => {
	console.log(val);
});
*/
/*
4
3
6
7
*/

// ----------------------
/*
let evenArr = nums.filter((val) => {
	return val%2===0;
});

console.log(evenArr);
*/
// [ 4, 6, 2, 6, 0, 44 ]
// ---------------------------

const output=nums.reduce((res, curr)=>{
	//return res+curr;
	return res>curr?res:curr; // 44 => greatest number
});
console.log(output); // 82