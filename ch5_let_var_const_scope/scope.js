// ---------------- GLOBAL SCOPE ----------------
var globalVar = "I am global"; // accessible everywhere
let globalLet = "I am also global";
const globalConst = "I never change";

console.log(globalVar); // ✅ accessible
console.log(globalLet); // ✅ accessible
console.log(globalConst); // ✅ accessible

// ---------------- FUNCTION SCOPE ----------------
function testFunctionScope() {
  var functionVar = "I exist only in this function";
  let functionLet = "Also only in function";
  const functionConst = "Function-only too";

  console.log(functionVar); // ✅ accessible here
  console.log(functionLet); // ✅ accessible here
  console.log(functionConst); // ✅ accessible here
}
// console.log(functionVar); // ❌ Error: not defined

// ---------------- BLOCK SCOPE ----------------
{
  var blockVar = "I ignore block scope 😅"; // var is function-scoped
  let blockLet = "I respect block scope";
  const blockConst = "Me too";

  console.log(blockVar); // ✅
  console.log(blockLet); // ✅
  console.log(blockConst); // ✅
}
console.log(blockVar); // ✅ still accessible outside block
// console.log(blockLet);   // ❌ Error
// console.log(blockConst); // ❌ Error

// ---------------- LOOP SCOPE ----------------
for (var i = 0; i < 3; i++) {
  console.log("var loop:", i);
}
console.log("Outside loop var i:", i); // ✅ still accessible outside loop

for (let j = 0; j < 3; j++) {
  console.log("let loop:", j);
}
// console.log("Outside loop let j:", j); // ❌ Error: j is not defined

// ---------------- NESTED SCOPE ----------------
function outer() {
  let outerVar = "I am outer";

  function inner() {
    let innerVar = "I am inner";
    console.log(outerVar); // ✅ inner can access outer
    console.log(innerVar); // ✅ accessible here
  }

  inner();
  // console.log(innerVar); // ❌ Error: not defined
}
outer();
