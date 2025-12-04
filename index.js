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
  return foodList;
};
  const renderListFunction = renderList();

const products = [
  { name: "Laptop", price: 2500 },
  { name: "Mouse", price: 50 },
  { name: "Keyboard", price: 150 },
  { name: "Monitor", price: 900 }
];
const productsDiv = document.body.querySelector("#products");
const cards = products.map((element) => {
  const product = document.createElement("div");
  product.className = "card";
  const title = document.createElement("h3");
  title.textContent = element.name;
  const price = document.createElement("p");
  price.textContent = "Price:" + element.price + "$";
  product.appendChild(title);
  product.appendChild(price);
  return product;
});
cards.forEach((product) => {
  productsDiv.appendChild(product);
})