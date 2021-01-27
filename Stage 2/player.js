class Player{
    constructor () {
      //when you write something within quotations it is called a string
     this.index=null
     this.distance=0
     this.name=null
    }
    getCount() {
      var playerref=database.ref("playerCount")
      playerref.on("value",function(data){
          playerCount=data.val()
      })
    }

    updateCount(count) {
      //entering the database and updating the value of gameState property
      //in the database
    database.ref("/").update({
        playerCount:count
    })
  }
  //updating the name of the player in the database
  update(){
    //if playerCount =1 then player index="player1"
    var playerIndex="players/player"+this.index
    //after entering the database, using set function, we are creating a new data
    //feild player1 inside the database
    //it will have a key called name that will contain the name of the player 
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    })
  }  
  static getPlayerInfo() {
    var playerInfo= database.ref("players")
    playerInfo.on("value",(data)=> {
      allPlayers=data.val()
    }
     ) }
}
