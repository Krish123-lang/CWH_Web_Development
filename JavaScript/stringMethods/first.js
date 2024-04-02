let name = "krishna";

// console.log(name.length);
// console.log(name.toUpperCase()); // KRISHNA
// console.log(name.toLowerCase()); // KRISHNA

// console.log(name.slice(2, 5)); // ish
// console.log(name.slice(3)); // shna

// console.log(name.replace("ish", "jfnkjg")); // krjfnkjgna

let fname = "krishna";
let lname = "mandal";

// console.log(fname.concat(lname)); // krishnamandal


let sents = "the quick brown fox jumps over the lazy dog";
let word = "fox";

// console.log(sents.includes(word)); // true

// console.log(`The word ${word} ${sents.includes(word) ? " is" : " is not"} in the sentences `);
// The word fox  is in the sentences

// console.log(fname.startsWith("k")); // true
// console.log(fname.endsWith("a")); // true

let st2 = "the amount is Rs.1000";
let amt=Number.parseInt(st2.slice("the amount is ".length));
console.log(amt); // Rs.1000
console.log(typeof amt); // Rs.1000
// console.log(st2.slice(13)); // Rs.1000