let alive = true;

class Game{
  constructor(name, age, hunger, sleep, boredom){
  this.name = name;
  this.age = 0;
  this.hunger = hunger;
  this.sleep = sleep;
  this.boredom = boredom;
}
  eat(){
    this.hunger += 2;
    return this
  }

  nap(){
    this.sleep += 2
    return this
  }

  play(){
  this.boredom += 2
  return this
    }

 unAlive(){
  if (this.hunger === 10 || this.sleep === 10 || this.boredom === 10){
    //reset game
    if (alive === true){
      alert(`You lost ${this.name}`);

    alive = false;
    location.reload()
        }
      }
    }

  ageUp(){
    this.age++;
    return this
    }
}

//start the Game
const startBtn = document.querySelector("#start")
const feedBtn = document.querySelector("#feed")
const playBtn = document.querySelector("#play")
const resetBtn = document.querySelector("#startOver")
//start Over
resetBtn.addEventListener("click",()=>{
  location.reload();
}
)

//new name given by player
const pet = new Game("", 0, 0, 0, 0)
// allow player to choose pets name
function nameYourPet(){
  pet.name = prompt("Name your Unicattus!");
  const itsName = document.querySelector("#name");
  itsName.innerHTML = `${pet.name}`;
}

startBtn.addEventListener("click",()=>{
    alert("If your pet hunger, boredom, sleep goes to 10 you lose the game.")
    changeLight();
    nameYourPet();
    hatch();
    itAge();
    itHunger();
    itBoredom();
    itSleep();

}
)

function hatch(){
  alert(`${pet.name} hatched.`);
    //evolve the egg
  document.querySelector(".cutiePie").src = "images/unicattus-happy.png"
}

//Get it's age
function itAge(){
  setInterval(() => {
     pet.ageUp()
     const ageNo = document.querySelector("#age");
     ageNo.innerHTML = `Age: ${pet.age}`;
    }
  , 5000)
}


//pet is hungry
//Get it's age
function itHunger(){
  setInterval(() => {
     pet.eat()
     const eatNo = document.querySelector("#hunger");
     eatNo.innerHTML = `Hunger: ${pet.hunger}`;
    }
  , 10000)
}

feedBtn.addEventListener("click",() => {
  pet.hunger -= 2;
  const eatNo = document.querySelector("#hunger");
  eatNo.innerHTML = `Hunger: ${pet.hunger}`;
}
)

function itBoredom(){
  setInterval(() => {
     pet.play()
     const boredomNo = document.querySelector("#boredom");
     boredomNo.innerHTML = `Boredom: ${pet.boredom}`;
    }
  , 10000)
}

playBtn.addEventListener("click",() => {
  pet.boredom -= 2;
  const boredomNo = document.querySelector("#boredom");
  boredomNo.innerHTML = `Boredom: ${pet.boredom}`;
}
)

function itSleep(){
  setInterval(() => {
     pet.nap()
     const sleepyNo = document.querySelector("#sleepiness");
     sleepyNo.innerHTML = `Sleepiness: ${pet.sleep}`;
     pet.unAlive();
    }
  , 10000)
}


// Toggle between two images
// lights off is true
let sLights = true;
function changeLight(){
    sLights = !sLights
// if lights off is true then onclick of class change image to night background
       if(sLights){
        document.querySelector(".sceneLights").style.backgroundImage = "url(images/1798.jpg)";
        pet.sleep -= 2;
        const sleepyNo = document.querySelector("#sleepiness");
        sleepyNo.innerHTML = `Sleepiness: ${pet.sleep}`;
        document.querySelector(".cutiePie").src = "images/unicattus-sleep.png"
       }
       else{
            document.querySelector(".sceneLights").style.backgroundImage = "url(images/1795.jpg)";
            const sleepNo = document.querySelector('#sleepiness');
            sleepNo.innerHTML = `Sleepiness: ${pet.sleep}`;
            document.querySelector(".cutiePie").src = "images/unicattus-happy.png"
       }
}

//console.log(changeLight())

//function resetGame(){
  // stop the clock clearInterval()
  //make age 0
  //make hunger 0
  //make boredom 0
  //make sleepiness 0
//}
