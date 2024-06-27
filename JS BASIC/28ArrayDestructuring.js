let nums=[5,34,5,7]

// let [a,b,c,d]=nums
// console.log(b)
// Here the valus of a,b,c,d will be 5,34,5,7

// if we need to skip the value for c then we need to add an extra cuma(,).If we are not using cuma then the value of d will be 5
let [a,b,,d]=nums;
console.log(d);


let e=4;
let f=9;
[e,f]=[f,e]
// Here the values will be swapped
console.log(e,f)

let words="My Name is Navin Kumar".split(' ');
// Here if i give three dots(...) then it will select the remaining into a seperate one
let [g,h,...i]=words;

console.log(words);
console.log(i);
