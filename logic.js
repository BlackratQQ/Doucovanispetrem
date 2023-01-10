let selectedPage = localStorage.getItem("page-value");
selectedPage.toString();

// import { examples } from "./Objects/Matematika1.js";

import("./Objects/" + selectedPage + ".js")
  .then((array) => {
    const { examples } = array;
    console.log(array);

    function toggle(i) {
      const divs = document.querySelectorAll(
        `
        #result_${i},
        #whatToDo_${i},
        #text_${i},
        #image_${i}`
      );

      for (let div of divs) {
        if (div.style.display !== "none") {
          div.style.display = "none";
        } else {
          div.style.display = "block";
        }
      }
    }

    const container = document.querySelector("#examples-container");

    examples.forEach((ex, i) => {
      // Make the div for the <div class="card">
      const card = document.createElement("div");
      // Add the "card" class to the div
      card.classList.add("card");

      //For Wrapper
      const wrapper = document.createElement("div");
      wrapper.classList.add("wrapper");

      //For What To Do
      const whatToDo = document.createElement("div");
      whatToDo.classList.add("whattodo");
      whatToDo.innerHTML = ex.whatToDo;
      card.appendChild(whatToDo);

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
      button.innerHTML = "výsledek";
      // Add the onclick event listener
      button.addEventListener("click", () => toggle(i));
      button.addEventListener("click", () =>
        button.classList.toggle("clicked")
      );
      console.log(toggle(i));
      // Add the toggle button to the card
      card.appendChild(button);

      //For answer
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
      wrapper.appendChild(result);

      //For Image
      const image = document.createElement("div");
      image.id = "image_" + i;
      image.style.display = "none";
      image.classList.add("image");
      image.innerHTML = ex.image;
      wrapper.appendChild(image);

      //For Text
      const text = document.createElement("div");
      text.id = "text_" + i;
      text.style.display = "none";
      text.classList.add("text");
      text.innerHTML = ex.text;
      wrapper.appendChild(text);

      // Add the card to the container
      card.appendChild(wrapper);
      container.appendChild(card);
    });
  })
  .catch((err) => {
    console.log(err);
  });
