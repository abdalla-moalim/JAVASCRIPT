// Function to simulate ordering food (returns a Promise)
function orderFood(item, time = 1000) {
  return new Promise((resolve, reject) => {
    console.log(`Placing order for ${item}...`);
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve(`${item} is ready! ✅`);
      } else {
        reject(`Sorry, ${item} is out of stock ❌`);
      }
    }, time);
  });
}

// -------------------
// THEN / CATCH VERSION
// -------------------
orderFood("Pizza", 1500)
  .then((res) => {
    console.log("THEN version →", res);
    return orderFood("Drink", 1000); // chain next order
  })
  .then((res) => {
    console.log("THEN version →", res);
    return orderFood("Dessert", 1200);
  })
  .then((res) => {
    console.log("THEN version →", res);
  })
  .catch((err) => {
    console.error("THEN version → ERROR:", err);
  })
  .finally(() => {
    console.log("THEN version → All orders processed.\n");
  });

// -------------------
// ASYNC / AWAIT VERSION
// -------------------
async function orderMeal() {
  try {
    const pizza = await orderFood("Burger", 1500);
    console.log("AWAIT version →", pizza);

    const drink = await orderFood("Juice", 1000);
    console.log("AWAIT version →", drink);

    const dessert = await orderFood("Ice Cream", 1200);
    console.log("AWAIT version →", dessert);
  } catch (error) {
    console.error("AWAIT version → ERROR:", error);
  } finally {
    console.log("AWAIT version → All orders processed.");
  }
}

orderMeal();
