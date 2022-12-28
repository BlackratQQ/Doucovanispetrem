import { examples } from "./Předměty/Matematika1.js";

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
  const card = document.createElement("div");
  card.classList.add("card");

  const example = document.createElement("div");
  example.classList.add("example");
  example.innerHTML = ex.question;
  card.appendChild(example);

  const button = document.createElement("button");
  button.classList.add("toggle");
  button.innerHTML = "Toggle";
  button.addEventListener("click", () => toggle(i)); // Here is the event listener
  card.appendChild(button);

  const result = document.createElement("div");
  result.id = "result_" + i;
  result.style.display = "none";
  result.classList.add("result");
  result.innerHTML = ex.answer;
  card.appendChild(result);

  container.appendChild(card);
});
