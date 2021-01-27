class Form {
    constructor() {
        this.title= createElement("h2")
         this.input=createInput("Name")
          this.button=createButton("Play")
         this.greeting= createElement("h3") 
    }
    hide() {
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
        this.title.hide()
        
    }

    display() {
        //creating a text element of size H2 
        //
     
     //creating the text which should display on the canvas within the quotations of
     //.html
     this.title.html("Car Racing Game")
     //placing the text element on the canvas on reffered x&y position
    this. title.position(130,0)
     //creating a text this.input which has Name writtin on it
    
     //creating a this.button with the name written play
    
     this.input.position(130,160)
     this.button.position(250,200)
     //as soon as the mouse is pressed, the machine will read all the instructions
     //inside function()
     this.button.mousePressed(function (){
         //using the hide function we are hiding the text this.input as well as the 
         // this.button
         this.input.hide()
         this.button.hide()
         //information that was entered in the this.input, should get stored in the 
         //variable name
         player.name=this.input.value()
         //as soon as a player has enetered their anme, the playerCount variable
         //should increase
         playerCount+=1
         player.index=playerCount
         //name of the player should get updated in the database 
         player.update()
         //latest valueof the playerCount variable should get updated in the database
         player.updateCount(playerCount)
         
       this.greeting.html("Hello, "+player.name) 
       this.greeting.position(130,160)  
     })
    }
}