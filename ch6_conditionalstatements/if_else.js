// if ... else

// Use Case: Execute one block if the condition is true, another block if false.

// Example Scenario: Checking if a user is old enough to access a website.

let age = 16;
if (age >= 18) {
  console.log("Access granted ✅");
} else {
  console.log("Access denied ❌");
}

{
  let age = 19;

  if (age > 12) {
    console.log("older than 12");
  } else {
    console.log("younger than 12");
  }
}
// 7 if...else examples
let a = 20,
  b = 15,
  c = 50,
  d = 16,
  e = 45,
  f = 30,
  g = 18;

if (a > b) console.log("a>b");
else console.log("a<=b");

if (b > c) console.log("b>c");
else console.log("b<=c");

if (c > 50) console.log("c>50");
else console.log("c<=50");

if (d >= 18) console.log("adult");
else console.log("minor");

if (e >= 50) console.log("pass");
else console.log("fail");

if (f > 25) console.log("hot");
else console.log("cool");

if (g >= 18) console.log("eligible");
else console.log("not eligible");

// ✅ When to use:

// Two possible outcomes: yes/no, true/false, pass/fail.
