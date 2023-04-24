const button = document.querySelector("#btnPick"); 
const restaurants = document.querySelectorAll(".rest-card");

let restArr = [...restaurants];

const pickRestaurant = evt => {
    let numRestCards = document.querySelectorAll(".rest-card").length;
    let randomNum = Math.floor(Math.random() * numRestCards);
    let selectedRest = restArr[randomNum];
    let name = selectedRest.querySelector(".name").textContent;
    alert(name);
}

button.addEventListener("click", pickRestaurant);