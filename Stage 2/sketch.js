var gameState=0, playerCount=0
var player,game,form
var database, allPlayers
var cars,car1,car2,car3,car4

function setup() {
  createCanvas(800,400);
  database= firebase.database()
  //creating a game object of Game class
  game=new Game()
  //calling the get state function of the Game class using game object 
  game.getState()
  game.start()

}

function draw() {
  background(255,255,255);  

  if(playerCount==4) {
    game.update(1)
  }
  if(gameState==1) {
   clear()
    game.play()
  }
}      