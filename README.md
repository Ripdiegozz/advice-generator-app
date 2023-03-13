# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./dist//assets/screenshot-1.jpg)
![](./dist//assets/screenshot-2.jpg)

### Links

- Solution URL: [Github repository](https://github.com/Ripdiegozz/advice-generator-app)
- Live Site URL: [Advice Mentor - Live Demo](https://advice-generator-app-nine-orpin.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup.
- CSS custom properties.
- Flexbox.
- [React](https://reactjs.org/) - JS library.
- [Tailwindcss](https://tailwindcss.com/) - For styles.

### What I learned

One thing that I hadn't done before was consuming an API that constantly changes the page content each time the user presses a button. In this opportunity to generate random advice.

```js
const getRandomInt = () => {
    let int = Math.floor(Math.random() * 224) // 224 is the limit of advices API

    while (int == 0){ // The advice number 0 doesn't exist so we need to avoid that number
        int = Math.floor(Math.random() * 224)

        if (int != 0){
            break // break the loop when the int is different to 0
        }
    }

    return int
}

function getNewAdvice() {
    
    const number = getRandomInt(); // get a random int
    const API = `https://api.adviceslip.com/advice/${number}` // add the random int to the API link string

    // get html elements that will change every time the user presses the button
    const id = document.getElementById("advice-id");
    const advice = document.getElementById("advice-quote");

    id.innerHTML = "";
    advice.innerHTML = "";

    // doing fetch to the advice API and adding the response to the html element content using innerHTML

    fetch(API)
    .then((response) => response.json())
    .then((data) => {
        return (
            id.innerHTML = `Advice #${data.slip.id}`,
            advice.innerHTML = `"${data.slip.advice}"`
        )
    })
    .catch((err) => alert("Error loading your advice, reroll the dice. :p")) // Adding an alert just in case the fetch doesn't respond
    
    
}
```

### Continued development

In my future projects, I want to improve my css designing skills. Also, I want to make more real react projects such as ecommerce websites or some business landing pages and apps.

### Useful resources

- [HSL to RGB color conversion](https://www.rapidtables.com/convert/color/hsl-to-rgb.html) - This helped me to convert hsl colors to HEX codes and RGB. This was important in order to use Tailwindcss to make this project, because the text-color class doesn't recognize the hsl codes that are into the style-guide. 

## Author

- Website - [Diego Garcia](https://dagadev.vercel.app/)
- Frontend Mentor - [@Ripdiegozz](https://www.frontendmentor.io/profile/Ripdiegozz)
- Linkedin - [/in/dagadev](https://www.linkedin.com/in/dagadev/)
- Github - [@Ripdiegozz](https://github.com/Ripdiegozz)