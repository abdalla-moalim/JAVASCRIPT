//Global scope = no bracket
let firstName = "Abdalla";

console.log(firstName);

//Local Scope = in a bracket
{
  let firstName = "Ali";
  console.log(firstName);
}


// ------------------ LET examples ------------------

// 1
let a = 10;
a = 20;
console.log("let a:", a);

// 2
let b;
b = "Hello";
console.log("let b:", b);

// 3
let c = 5;
c += 10;
console.log("let c:", c);

// 4
let d = true;
d = false;
console.log("let d:", d);

// 5
let e = [1, 2];
e.push(3);
console.log("let e:", e);

// 6
let f = { name: "Ali" };
f.name = "Sara";
console.log("let f:", f);

// 7
let g = 100;
g /= 2;
console.log("let g:", g);

// 8
let h = "Test";
h = h + " Passed";
console.log("let h:", h);

// 9
let i = null;
i = 42;
console.log("let i:", i);

// 10
let j = 1;
j++;
console.log("let j:", j);





