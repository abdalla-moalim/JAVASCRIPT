// Use Case: Compare a value against multiple fixed options.

// Example Scenario: Determine the action based on traffic light color.

let light = "red";
switch (light) {
  case "green":
    console.log("Go 🟢");
    break;
  case "yellow":
    console.log("Get Ready 🟡");
    break;
  case "red":
    console.log("Stop 🔴");
    break;
  default:
    console.log("Invalid color");
}

let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Weekend");
}

let grade = "B";
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Average");
    break;
  default:
    console.log("Needs Improvement");
}

{
  let light = "red";
  switch (light) {
    case "green":
      console.log("Go");
      break;
    case "yellow":
      console.log("Get Ready");
      break;
    case "red":
      console.log("Stop");
      break;
    default:
      console.log("Invalid Color");
  }
}

let fruit = "apple";
switch (fruit) {
  case "banana":
    console.log("Yellow");
    break;
  case "apple":
    console.log("Red");
    break;
  case "orange":
    console.log("Orange");
    break;
  default:
    console.log("Unknown Fruit");
}

let season = "summer";
switch (season) {
  case "spring":
    console.log("Flowers");
    break;
  case "summer":
    console.log("Hot");
    break;
  case "autumn":
    console.log("Leaves fall");
    break;
  case "winter":
    console.log("Cold");
    break;
  default:
    console.log("Unknown Season");
}

// ✅ When to use:

// When you have one variable and many possible discrete values.

// Cleaner and easier to read than multiple if ... else if ... for many options.
