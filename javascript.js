const grid = document.querySelector(".grid");
// let difficulty = ["easy", "medium", "hard"];
let difficulty = "easy";

function chooseDifficulty(){
  
}

function createGame(difficulty){
    let num = 1;
  if(difficulty == "easy")
  {
    num =1;
    for(let i = 0; i < 10; i++){ //make two loops one to creaee ids and one to create all the pairs
    const box = document.createElement('div');
    box.classList.toggle('box');
    box.setAttribute('id', `${num}`) //give each box own id
    num++;
    grid.appendChild(box);
    }
    grid.style.gridTemplateColumns = "repeat(5, 1fr)"; //gridSize variable is length and height of grid
    grid.style.gridTemplateRows = "repeat(2, 1fr)";
  }
}

createGame("easy");


function generateId(){ //function to create an array of 10 numbers 1-5 that only repeat once
    const random = Array(10).fill(0);
    let num = 1;
    for(let i = 0; i < 5; i++){
        let check = 0;
    for(let i = 0; i < 2; i++){
        
        while(check != 2){
       let place = [Math.floor(Math.random()*10)];
       if(random[place] == 0)
       {
        random[place] = num;
        check++;
       }
    }
    }
    num++;
    }
    return random;
}

function placeImages(arr){
    let place = 0;
    let num = 0;
    let box = 1;
    for(let i = 0; i < 10; i++){
        num = arr[place];
        const pic = document.createElement('img');
        pic.classList.toggle('pic');
        pic.setAttribute('src', `./images/${num}.png`);
        document.getElementById(`${box}`).appendChild(pic); //goes box by box and add image
        box++;
        place++;
        
    }
    console.log(arr);
}
//possible use of function: create a javascript function to randomly match any of the 5 pngs to identical ids
//loop through array an add image to each id representing the picture number

console.log(generateId());
placeImages(generateId());