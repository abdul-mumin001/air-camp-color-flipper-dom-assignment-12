
// selecting the body element
const changeBackground = document.body;

const rgbColor = document.getElementById("rgb-color");

//* adding event listener and function to the color buttons

// rgb button
rgbColor.addEventListener("click", function () {
    // randomly picks a number between 0 and 255
    let a = Math.floor(Math.random() * 256);
    // randomly picks a number between 0 and 255
    let b = Math.floor(Math.random() * 256);
    // randomly picks a number between 0 and 255
    let c = Math.floor(Math.random() * 256);
    // saves the new background color
    const rgbColorValue = `rgb(${a}, ${b}, ${c})`;
    // changes the text inside the button
    rgbColor.textContent = rgbColorValue;
    // changes the background color
    changeBackground.style.background = rgbColorValue;
  });
  
  