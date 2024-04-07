/*
let marks=[97, 58, 90, 99, 97, 56];

let toppers = marks.filter((val)=>{
	return val > 90;
});
console.log(toppers); // [ 97, 99, 97 ]
*/

//-----------------------

let n=5;
let arr=[];

for(let i=1;i<=n;i++){
	arr[i-1]=i;
}
console.log(arr) // [ 1, 2, 3, 4, 5 ]

let sum=arr.reduce((res, curr) =>{
	//return res+curr; // 15
	return res*curr; // 120
});

console.log(sum);