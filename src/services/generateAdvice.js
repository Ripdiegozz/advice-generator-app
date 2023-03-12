const getRandomInt = () => {
    let int = Math.floor(Math.random() * 224)

    while (int == 0){
        int = Math.floor(Math.random() * 224)

        if (int != 0){
            break
        }
    }

    return int
}

function getNewAdvice() {
    
    const number = getRandomInt();
    const API = `https://api.adviceslip.com/advice/${number}`
    const id = document.getElementById("advice-id");
    const advice = document.getElementById("advice-quote");
    id.innerHTML = "";
    advice.innerHTML = "";

    fetch(API)
    .then((response) => response.json())
    .then((data) => {
        return (
            id.innerHTML = `Advice #${data.slip.id}`,
            advice.innerHTML = `"${data.slip.advice}"`
        )
    })
    .catch((err) => alert("Error loading your advice, reroll the dice. :p"))
    
    
}

export default getNewAdvice