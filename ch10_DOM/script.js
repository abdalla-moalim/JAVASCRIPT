// for (let i = 0; i < 100; i++) {
//   let anotherH2 = document.createElement("h2");
//   anotherH2.textContent = "I have been created in JS";
//   document.body.appendChild(anotherH2);
//   anotherH2.style.color = "red";
//   if (i > 20) {
//     document.body.removeChild(anotherH2);
//   }
// }

// let firstH1 = document.getElementbyId("first-h1");
// firstH1.style.fontSize = "70px";
// firstH1.style.color = "green";

// let elements = document.getElementsByName("second");
// elements[0].style.fontSize = "70px";
// elements[0].style.color = "green";

// elements[1].style.fontSize = "70px";
// elements[1].style.color = "red";

// let elements = document.getElementsByTagName("h1");
// elements[0].style.fontSize = "70px";
// elements[0].style.color = "green";

// elements[1].style.fontSize = "70px";
// elements[1].style.color = "red";

// let elements = document.getElementsByClassName("animals");
// document.body.removeChild(elements[0]);

let h1 = document.querySelector("#first-h1");
h1.innerHTML = "This is how you <i>code</i>";
