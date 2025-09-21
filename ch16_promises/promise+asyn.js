// -----------------------------
// Define the Promise function
// -----------------------------
function orderFood(food) {
  return new Promise((resolve, reject) => {
    console.log(`Placing order for ${food}...`);

    setTimeout(() => {
      let available = Math.random() > 0.3; // 70% chance success
      if (available) {
        resolve(`${food} is ready! 🍔`);
      } else {
        reject(`Sorry, ${food} is out of stock ❌`);
      }
    }, 2000);
  });
}

// -----------------------------
// Using .then/.catch
// -----------------------------
orderFood("Pizza")
  .then((message) => {
    console.log("THEN version → SUCCESS:", message);
  })
  .catch((error) => {
    console.log("THEN version → ERROR:", error);
  })
  .finally(() => {
    console.log("THEN version → Done ordering.\n");
  });

// -----------------------------
// Using async/await
// -----------------------------
async function placeOrder() {
  try {
    console.log("Await version → Ordering food...");
    const message = await orderFood("Burger"); // waits here until done
    console.log("Await version → SUCCESS:", message);
  } catch (error) {
    console.log("Await version → ERROR:", error);
  } finally {
    console.log("Await version → Done ordering.");
  }
}

// Call the async function
placeOrder();
