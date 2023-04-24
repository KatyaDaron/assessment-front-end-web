const buttons = document.querySelectorAll('button');

let buttonsArr = [...buttons];

const btnClicked = (event) => {
    let button = event.target;
    if (button.id === 'color') {
        alert ('Black');
    } else if (button.id === 'place') {
        alert ('Brooklyn Bridge park in NYC');
    } else if (button.id === 'ritual') {
        alert ('Morning coffee');
    }
}

buttonsArr.map(el => el.addEventListener('click', btnClicked));