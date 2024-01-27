function runAway() {
    const noButton = document.getElementById('no')

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const maxWidth = windowWidth - noButton.offsetWidth; //it's to keep your windows inside of the container
    const maxHeight = windowHeight - noButton.offsetHeight; //same as above

    const randomX = Math.floor(Math.random() * maxWidth);  //to set a random position to the windom in the container
    const randomY = Math.floor(Math.random() * maxHeight);

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

};

function congratulations() {
    alert('Congratulations!You are a very lucky person 💘')
}