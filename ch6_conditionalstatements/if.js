// Use Case: Execute code only if a single condition is true.

// Example Scenario: Checking if a user is logged in before showing a welcome message.

let isLoggedIn = true;
if (isLoggedIn) {
  console.log("Welcome back! 👋");
}

let age = 12;

if (age > 12) {
  console.log("older than 12");
}

// 7 if examples
if (10 > 5) console.log("10>5");

if (0 === 0) console.log("0===0");

if (true) console.log("true");

if ("hi".length > 1) console.log("hi length>1");

if (5 < 10) console.log("5<10");

if ([1, 2].length === 2) console.log("array length 2");

if (false === false) console.log("false===false");

// ✅ When to use:

// Simple one-condition checks.

// No need for “alternative” paths.
