let selectedPage = localStorage.getItem("page-value");
selectedPage.toString();

// selectedPage = "Matematika1";
import { examples } from "./Objects/Matematika1.js";

// import("./Objects/" + selectedPage + ".js")
//   .then((array) => {
//     const { examples } = array;
//console.log(array);

function toggle(i) {
  const div = document.querySelector(`#result_${i}`);
  if (div.style.display !== "none") {
    div.style.display = "none";
  } else {
    div.style.display = "block";
  }
}

const container = document.querySelector("#examples-container");

examples.forEach((ex, i) => {
  // Make the div for the <div class="card">
  const card = document.createElement("div");
  // Add the "card" class to the div
  card.classList.add("card");

  // Create the div for the <div class="example">${ex.question}</div>
  const example = document.createElement("div");
  // Add the "example" class
  example.classList.add("example");
  // Set the HTML inside of it to ex.question
  example.innerHTML = ex.question;
  // Add it to the card element
  card.appendChild(example);

  // Create the button for the <button class="Toggle">Toggle</button>
  const button = document.createElement("button");
  // Add the "toggle" class to the button
  button.classList.add("toggle");
  // Set the text inside of it to say "Toggle"
  button.innerHTML = "Toggle";
  // Add the onclick event listener
  button.addEventListener("click", () => toggle(i));
  // Add the toggle button to the card
  card.appendChild(button);

  // Create the div for the <div id="result_${i}" class="result">${ex.answer}</div>
  const result = document.createElement("div");
  // Add the id for the element
  result.id = "result_" + i;
  // Hide the result element (display: none)
  result.style.display = "none";
  // Add the "result" class
  result.classList.add("result");
  // Set it's HTML to the answer
  result.innerHTML = ex.answer;
  // Add the result element to the card
  card.appendChild(result);

  // Add the card to the container
  container.appendChild(card);
});
// })
// .catch((err) => {
//   console.log(err);
// });
