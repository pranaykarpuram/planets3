class Register{
    constructor(){
        this.player1 = createButton("1 player");
        this.player2 = createButton("2 players");
        this.player3 = createButton("3 players");
        this.player4 = createButton("4 players");
        this.heading = createElement('h2');
        this.greeting = createElement('h2');

        this.title = createElement('h2');
        this.name = createInput("Enter your nickname...");
        this.start = createButton("Enter Game")
    }
    hide(){
        this.player1.hide();
        this.player2.hide();
        this.player3.hide();
        this.player4.hide();
        this.name.show();
        this.start.show();
        this.heading.hide();
    }

    display(){
        this.title.html("Planets");
        this.title.position(width/2 - 50, 0);
        this.name.hide();
        this.start.hide();
        this.heading.html("How many players will be playing?");
        this.heading.position(width/2,height/2);
        this.player1.position(width/2,this.heading.y+100);
        this.player2.position(width/2,this.heading.y+150);
        this.player3.position(width/2,this.heading.y+200);
        this.player4.position(width/2,this.heading.y+250);


        this.name.position(width/2,height/2);
        this.start.position(width/2,this.name.y+40);
        this.player1.position()

        this.player1.mousePressed(()=>{
            pState = 1;
            this.player1.hide();
            this.player2.hide();
            this.player3.hide();
            this.player4.hide();
            this.name.show();
            this.start.show();
            this.heading.hide();
        });
        this.player2.mousePressed(()=>{
            pState = 2;
            this.player1.hide();
            this.player2.hide();
            this.player3.hide();
            this.player4.hide();
            this.name.show();
            this.start.show();
            this.heading.hide();
        });
        this.player3.mousePressed(()=>{
            pState = 3;
            this.player1.hide();
            this.player2.hide();
            this.player3.hide();
            this.player4.hide();
            this.name.show();
            this.start.show();
            this.heading.hide();
        });
        this.player4.mousePressed(()=>{
            pState = 4;
            this.player1.hide();
            this.player2.hide();
            this.player3.hide();
            this.player4.hide();
            this.name.show();
            this.start.show();
            this.heading.hide();
            
        });

        this.start.mousePressed(()=>{
            this.name.hide();
            this.start.hide();
            player.name = this.name.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            //this.greeting.html("Hey "+ player.name+" please wait for the other players to join");
            //this.greeting.position(width/2-100, height/2);
            game = 1;
            

        });
        


    }




}