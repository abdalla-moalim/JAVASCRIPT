// if ... else if ... else

// Use Case: Handle multiple conditions where only one block should run.

// Example Scenario: Assign grades based on score.

let score = 75;
if (score >= 90) {
  console.log("Grade: A 🌟");
} else if (score >= 70) {
  console.log("Grade: B 👍");
} else if (score >= 50) {
  console.log("Grade: C 🙂");
} else {
  console.log("Grade: F ❌");
}

// 7 if...else if...else examples
let h = 85,
  i = 55,
  j = -5,
  k = 0,
  l = "rainy",
  m = 95,
  n = 72;
if (h >= 90) console.log("A");
else if (h >= 70) console.log("B");
else console.log("C");

if (i >= 90) console.log("A");
else if (i >= 70) console.log("B");
else console.log("C");

if (j > 0) console.log("Positive");
else if (j < 0) console.log("Negative");
else console.log("Zero");

if (k > 0) console.log("Positive");
else if (k < 0) console.log("Negative");
else console.log("Zero");

if (l === "sunny") console.log("Go out");
else if (l === "rainy") console.log("Take umbrella");
else console.log("Stay home");

if (m >= 90) console.log("A");
else if (m >= 70) console.log("B");
else console.log("C");

if (n >= 90) console.log("A");
else if (n >= 70) console.log("B");
else console.log("C");

// ✅ When to use:

// Multiple mutually exclusive conditions.

// Useful for ranges (grades, ages, temperature ranges, etc.).
