document.addEventListener("DOMContentLoaded", () => {

  // 1. Get the container
  const app = document.getElementById("app");

  // 2. Create elements
  const heading = document.createElement("h1");
  heading.textContent = "Welcome to My Tech Interview Demo Page";

  const paragraph = document.createElement("p");
  paragraph.textContent = "This page was created dynamically using JavaScript.";

  const button = document.createElement("button");
  button.id = "action-button";
  button.textContent = "Click Me";

  const message = document.createElement("p");
  message.id = "result-message";


  // 3. Add behaviour
  button.addEventListener("click", () => {
    message.textContent = "Button clicked successfully!";
  });

  // 4. Add elements to the page
  app.appendChild(heading);
  app.appendChild(paragraph);
  app.appendChild(button);
  app.appendChild(message);
});
