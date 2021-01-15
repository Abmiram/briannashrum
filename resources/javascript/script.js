const randomNumber = () => {
    return Math.floor(Math.random() * 255);
};

let name = document.getElementById("title-name");

const colorChange = event => {
    event.target.style.color = randomColor;
};

name.onmouseover = function() {
    let randomColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
    name.style.color = randomColor;
};