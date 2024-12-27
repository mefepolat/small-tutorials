const jokeText = document.getElementById("joke-text");
const newJokeBtn = document.getElementById("new-joke-btn");
const body = document.body;

const colors = [
    '#f0f0f0', '#e0e0e0', '#d0d0d0', '#c0c0c0', '#b0b0b0',
];


const getJoke = async () => {
    try {
        const response = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json"
            }
        });
        if (!response.ok){
            throw new Error(`HTTP Error! status: ${response.status}`);
        }
        const data = await response.json();
        jokeText.textContent = data.joke;
    } catch (error) {
        console.error(`Error while fetchign the joke ${error}`);
        jokeText.textContent = "Failed to fetch a joke. Please try again later."
    }
};

const changeBackground = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor;
};

newJokeBtn.addEventListener("click", () => {
    getJoke();
    changeBackground();
});

getJoke();
changeBackground();