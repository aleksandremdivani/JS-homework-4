const items = ["Khachapuri", "Satsivi", "Khinkali", "Fries", "Lobiani"];

const foodList = document.getElementById("food-list");
const renderList = () => {
  foodList.textContent = "";
  items.forEach((item) => {
    const food = document.createElement("li");
    food.textContent = item;
    const xBtn = document.createElement("button");
    xBtn.textContent = "x";
    xBtn.style.backgroundColor = "white";
    xBtn.style.marginLeft = "5px";
    xBtn.style.border = "none";
    xBtn.addEventListener("click", () => {
      items.splice(items.indexOf(item), 1);
      renderList();
    });
    food.appendChild(xBtn);
    foodList.appendChild(food);
  });
};
renderList();


