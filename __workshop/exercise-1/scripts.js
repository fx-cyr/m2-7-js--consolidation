// 😋
let yearTitleElement = document.getElementById("year-title");
let btn2018 = document.getElementById("2018");
let btn2019 = document.getElementById("2019");
let hoverPlaceholder = document.getElementById("hover-placeholder");
let topMealsElement = document.getElementById("top-meals");
let mealNumberElement = document.getElementById("meal-number");
let mealDetailsElement = document.getElementById("meal-details");
let selectedYear = "2018";

let top10 = topTenList[selectedYear];

btn2018.addEventListener("click", (ev) => {
  console.log("selected 2018");
  selectedYear = "2018";
  yearTitleElement.innerText = selectedYear;
  btn2018.classList.add("active");
  btn2019.classList.remove("active");
});

btn2019.addEventListener("click", () => {
  console.log("selected 2019");
  selectedYear = "2019";
  yearTitleElement.innerText = selectedYear;
  btn2019.classList.add("active");
  btn2018.classList.remove("active");
});

// numbersArr.forEach((number, index) => {
// number.addEventListener("mouseover", () => {
//   hoverPlaceholder.style.display = "none"
// mealNumberElement.innerText = topTenList[selectedYear][index].id
// mealDetailsElement.innerText = topTenList[selectedYear][index].name
// })

// })

// inserted div =  <div class="that" id="position">1</div>
// create element
// give element class name et ID
// add eventlistener (two)
// appendChild topmeals

top10.forEach((item, index) => {
  let newItem = document.createElement("div");
  newItem.id = "position";
  newItem.classList.add("that");
  newItem.innerText = item.id;
  topMealsElement.appendChild(newItem);

  newItem.addEventListener("mouseover", () => {
    hoverPlaceholder.style.display = "none";
    mealNumberElement.classList.add("aaaa");
    mealNumberElement.innerText = item.id;
    mealDetailsElement.classList.add("bbbb");
    mealDetailsElement.innerText = topTenList[selectedYear][index].name;
  });
  newItem.addEventListener("mouseout", () => {
    hoverPlaceholder.style.display = "block";
    mealNumberElement.classList.remove("aaaa");
    mealNumberElement.innerText = "";
    mealDetailsElement.classList.remove("bbbb");
    mealDetailsElement.innerText = "";
  });
});
