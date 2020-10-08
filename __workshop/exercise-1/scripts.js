// 😋
let yearTitleElement = document.getElementById("year-title");
let btn2018 = document.getElementById("2018");
let btn2019 = document.getElementById("2019")
let topMealsElement = document.getElementById("top-meals")
let mealNumberElement = document.getElementById("meal-number")
let mealDetailsElement = document.getElementById("top-details")
let hoverPlaceholder = document.getElementById("hover-placeholder")
let position = document.getElementById("position")
let year2018 = true
let year2019 = false

btn2018.addEventListener("click", () => {
    console.log("selected 2018")
    year2018 = true;
    year2019 = false;
    yearTitleElement.innerText = "2018";
    btn2018.classList.add("active");
    btn2019.classList.remove("active");
})

btn2019.addEventListener("click", () => {
    console.log("selected 2019")
    year2018 = false
    year2019 = true
    yearTitleElement.innerText = "2019"
    btn2019.classList.add("active")
    btn2018.classList.remove("active")
})
  





