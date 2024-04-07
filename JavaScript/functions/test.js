/*
function add(a,b){
	return a+b;
}
let s=add(3, 5);
console.log(s)
*/

// ====================================================
// Arrow functions

/*
const add=(a,b)=>{
	return a+b;
}
let s=add(3, 7);
console.log(s)
*/

// ---------------- Multiplication Table ----------------------
/*
const prod=(n)=>{
    for(let i=1; i<=10; i++){
	console.log(`${n}x${i} = ${n*i}`);
    }
}
prod(5);
*/
/*
5x1 = 5
5x2 = 10
5x3 = 15
5x4 = 20
5x5 = 25
5x6 = 30
5x7 = 35
5x8 = 40
5x9 = 45
5x10 = 50
*/

// --------------------------------------------------
// count the number of vowels 

cont strVowel=(str)=>{
	let count=0;
	for(const char of str){
		if (char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
			count++;
		}
	}
	return count;
}

strVowel("Helloworld");
// 4