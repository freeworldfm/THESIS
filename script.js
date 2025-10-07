const textEl = document.getElementById("text");

const passages = [
  "Every pixel holds a trace of the total network.",
  "Through iterative experiments, systems observe and misread their surroundings.",
  "Observation becomes performance. Error becomes revelation.",
  "The only way out is through."
];

let index = 0;

document.body.addEventListener("click", () => {
  index = (index + 1) % passages.length;
  textEl.style.opacity = 0;
  setTimeout(() => {
    textEl.textContent = passages[index];
    textEl.style.opacity = 0.8;
  }, 500);
});