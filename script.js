const btn = document.querySelector(".btn");
const ul = document.querySelector(".ul");
const int = document.querySelector(".in");

btn.addEventListener("click", () => {
 
  const inp = document.createElement("input");
  const button = document.createElement("button");
  const li = document.createElement("li");
  const line = document.createElement('hr')

  
li.textContent = int.value;
li.classList.add("li")
ul.append(li, line);
int.value = "";

button.textContent = "x";
inp.type = "checkbox";
inp.addEventListener("click", () => {
});

li.prepend(inp);
li.append(button);
button.addEventListener("click", () => {
  li.remove();
  line.remove()
});

});


