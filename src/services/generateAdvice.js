const getRandomInt = () => {
    let int = Math.floor(Math.random() * 224)

    if (int == 0){
        int = Math.floor(Math.random() * 224)
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
    .catch((err) => alert("Error fetching data from API. :("))
    
    
}

export default getNewAdvice