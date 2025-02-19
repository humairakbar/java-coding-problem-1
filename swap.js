let a = 5;
let b = 7;

const temp = a;

a = b;
b = temp;

console.log(a , b);

// Destructing method

let x = 3;
let y = 5;
console.log(x , y);
[x , y] = [y , x];
console.log(x , y);
