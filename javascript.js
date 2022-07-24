const grid = document.querySelector(".grid");
let difficulty = ["easy", "medium", "hard"];

function chooseDifficulty(){
  
}

function createGame(difficulty){
    let num = 1;
  if(difficulty == "easy")
  {
    for(let i = 0; i < 10; i++){ //make two loops one to creaee ids and one to create all the pairs
    const box = document.createElement('div');
    box.classList.toggle('apple');
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
//possible use of function: create a javascript function to randomly match any of the 5 pngs to identical ids

console.log(generateId())