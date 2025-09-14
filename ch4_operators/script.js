// // //Arithmetic operators in Javascript

// // // let a = 10,
// // // let b = 5;

// // // console.log("Addition:", a + b);       // 15
// // // console.log("Subtraction:", a - b);    // 5
// // // console.log("Multiplication:", a * b); // 50
// // // console.log("Division:", a / b);       // 2
// // // console.log("Modulus:", a % b);        // 0
// // // console.log("Exponentiation:", a ** b); // 100000

// // var numOfBrothers = 5;
// // // numOfBrothers++;
// // // numOfBrothers+++;
// // numOfBrothers--;
// // numOfBrothers--;

// // console.log(numOfBrothers);

// // // Comparison Operators
// // let a = 10,
// //   b = "10",
// //   c = 5;

// // console.log(a == b); // true
// // console.log(a === b); // false
// // console.log(a != b); // false
// // console.log(a !== b); // true
// // console.log(a > c); // true
// // console.log(a < c); // false
// // console.log(a >= 10); // true
// // console.log(c <= 10); // true

// // // Logical Operators in JavaScript

// // // AND (&&)
// // let age = 20;
// // let hasID = true;

// // // Real case: allow entry only if age >= 18 AND has an ID
// // if (age >= 18 && hasID) {
// //   console.log("Access granted ✅");
// // } else {
// //   console.log("Access denied ❌");
// // }
// // // Output: Access granted ✅

// // // OR (||)
// // let isWeekend = false;
// // let isHoliday = true;

// // // Real case: allow person to relax if it's weekend OR holiday
// // if (isWeekend || isHoliday) {
// //   console.log("You can relax today 😎");
// // } else {
// //   console.log("It's a work day 💻");
// // }
// // // Output: You can relax today 😎

// // // NOT (!)
// // let isLoggedIn = false;

// // // Real case: show login form if user is NOT logged in
// // if (!isLoggedIn) {
// //   console.log("Please log in to continue 🔑");
// // } else {
// //   console.log("Welcome back 👋");
// // }
// // // Output: Please log in to continue 🔑

// var age = 20;
// var withParent = true;

// console.log(age);

// if (age > 13 || withParent == true) {
//   console.log("watch the movie");
// }

// var isMarried = true
// console.log(!isMarried);

// Assignment Operators in JavaScript

let x = 10;
console.log("Initial value:", x);

// 1. Simple assignment (=)
x = 10;
console.log("After = :", x);

// 2. Add and assign (+=)
x += 5; // x = x + 5
console.log("After += 5:", x);

// 3. Subtract and assign (-=)
x -= 3; // x = x - 3
console.log("After -= 3:", x);

// 4. Multiply and assign (*=)
x *= 2; // x = x * 2
console.log("After *= 2:", x);

// 5. Divide and assign (/=)
x /= 4; // x = x / 4
console.log("After /= 4:", x);

// 6. Modulus and assign (%=)
x %= 5; // x = x % 5
console.log("After %= 5:", x);

// 7. Exponentiation and assign (**=)
x **= 3; // x = x ** 3
console.log("After **= 3:", x);

/*
let y = 5; // binary: 0101

y &= 3;   // y = y & 3 (bitwise AND)
console.log("After &= 3:", y);

y |= 2;   // y = y | 2 (bitwise OR)
console.log("After |= 2:", y);

y ^= 1;   // y = y ^ 1 (bitwise XOR)
console.log("After ^= 1:", y);

y <<= 1;  // y = y << 1 (left shift)
console.log("After <<= 1:", y);

y >>= 1;  // y = y >> 1 (right shift)
console.log("After >>= 1:", y);
*/
