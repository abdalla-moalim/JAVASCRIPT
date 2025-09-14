// ------------------ CONST examples ------------------

// 1
const u = 10;
// u = 20; // ❌ Error: cannot reassign
console.log("const u:", u);

// 2
const v = "Hello";
// v = "Hi"; // ❌ Error
console.log("const v:", v);

// 3
const w = true;
// w = false; // ❌ Error
console.log("const w:", w);

// 4
const x = [1, 2];
x.push(3); // ✅ Allowed (array content can change)
console.log("const x:", x);

// 5
const y = { name: "Ali" };
y.name = "Sara"; // ✅ Allowed (object property change)
console.log("const y:", y);

// 6
const z = 3.14;
// z = 6.28; // ❌ Error
console.log("const z:", z);

// 7
const aa = null;
// aa = "Not null"; // ❌ Error
console.log("const aa:", aa);

// 8
const bb = "Fixed";
// bb += " Changed"; // ❌ Error
console.log("const bb:", bb);

// 9
const cc = 100;
// cc--; // ❌ Error
console.log("const cc:", cc);

// 10
const dd = "JavaScript";
// dd = "Python"; // ❌ Error
console.log("const dd:", dd);
