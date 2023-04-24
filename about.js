console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert(`Form has been submitted successfully!`);
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let img = document.querySelector('img');

const compliment = (evt) => {
	alert(`You look wonderful today!`);
}

img.addEventListener('mouseover', compliment);