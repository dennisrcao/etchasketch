const grid = document.querySelector(".gridContainer");
const userInput = document.getElementById("quantity");

const resetButton = document.querySelector(".reset");
const normalButton = document.querySelector(".normalMode");
const randomButton = document.querySelector(".randomColor");
const tenPercentBlack = document.querySelector(".tenPercentBlack");

let mode = 0; //0 - normal, 1 is random color, 2 is 10% black




createGrid = (userInput) => {  //default - create 16 x 16 grid
  for (let i = 0; i < userInput * userInput; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
};

updateGrid = () => {
  grid.innerHTML = "";
  if (userInput.value > 100){
    console.log("greater than 100");
    userInput.value = 16;
    window.alert("Too high of a number, pick less than 100");
  }
  grid.style.setProperty(
    "grid-template-columns",
    `repeat(${userInput.value}, 2fr)`
  );
  grid.style.setProperty(
    "grid-template-rows",
    `repeat(${userInput.value}, 2fr)`
  );
  for (let i = 0; i < userInput.value * userInput.value; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
};

resetGrid = () => {
 grid.innerHTML = "";
  // userInput.value = ;
  grid.style.setProperty("grid-template-columns", `repeat(${userInput.value}, 2fr)`);
  grid.style.setProperty("grid-template-rows", `repeat(${userInput.value}, 2fr)`);
  createGrid(userInput.value);
}


//when mouse goes over square, replace it with a color? 
const square = document.querySelector("div");
console.log(square);
square.addEventListener("mouseover", function(event) {
  if (mode ===1) //random color mode
  {
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    event.target.style.setProperty("background-color", randomColor);   //change class color: background-color to a random color
  }
  if (mode ===2)  //10% mode
  {
    event.target.classList.replace("square", "color"); //old token, new token
    let tempOpacity = event.target.style.opacity;
    if (!tempOpacity){
        tempOpacity = 0;
      }
    //console.log(typeof(tempOpacity));
    // console.log(tempOpacity);
    // console.log(typeof(tempOpacity)); //string

    tempOpacity = parseFloat(tempOpacity);
    tempOpacity=tempOpacity+0.1;
    event.target.style.opacity= tempOpacity;
    console.log(typeof(tempOpacity));
    console.log(tempOpacity); 
  
  }

  if (mode ===0)
  {
    event.target.classList.replace("square", "color"); //old token, new token

  }  // event.target.classList.replace("square", "color"); //old token, new token
});


        //when user types in new grid number, update the grid
userInput.addEventListener("change", updateGrid);

        //if reset button clicked
resetButton.addEventListener("click", resetGrid); 

        //if normal button clicked
normalButton.addEventListener("click", function() {
  mode = 0;
  console.log("normal mode");
  resetGrid();
});
randomButton.addEventListener("click", function() {
  mode = 1;
  console.log("random color mode");
  resetGrid();
});

tenPercentBlack.addEventListener("click", function() {
  mode = 2;
  console.log("10% black mode")
  resetGrid();
});


createGrid();