class Planets{
    constructor(){
        this.mercury = createButton("Mercury");
        this.venus = createButton("Venus");
        this.earth = createButton("earth");
        this.mars = createButton("mars");
        this.jupiter = createButton("jupiter");
        this.saturn = createButton("saturn");
        this.uranus = createButton("uranus");
        this.neptune = createButton("neptune");
      }
      hide(){
          this.mercury.hide();
          this.venus.hide();
          this.earth.hide();
          this.mars.hide();
          this.jupiter.hide();
          this.saturn.hide();
          this.uranus.hide();
          this.neptune.hide();
      }

     display(){
        this.mercury.position(width*309/512, height*2/5);
        this.venus.position(width*45/128, height*73/125);
        this.earth.position(width*175/256, height*23/50);
        this.mars.position(width*9/32,height*77/125);
        this.jupiter.position(width*105/128,height*31/125);
        this.saturn.position(width*15/128,height*17/25);
        this.uranus.position(width*15/16, height*14/25);
        this.neptune.position(width*15/256, height*22/25);

        this.mercury.mousePressed(()=>{
            planets = "mercury";
            game = 2;
            mState = 1;
            this.mercury.hide();
            this.venus.hide();
            this.earth.hide();
            this.mars.hide();
            this.jupiter.hide();
            this.saturn.hide();
            this.uranus.hide();
            this.neptune.hide();
        });
        this.venus.mousePressed(()=>{
            planets = "venus";
            game = 2;
            vState = 1;
            this.mercury.hide();
            this.venus.hide();
            this.earth.hide();
            this.mars.hide();
            this.jupiter.hide();
            this.saturn.hide();
            this.uranus.hide();
            this.neptune.hide();
        });
        this.earth.mousePressed(()=>{
            planets = "earth";
            this.mercury.hide();
            this.venus.hide();
            this.earth.hide();
            this.mars.hide();
            this.jupiter.hide();
            this.saturn.hide();
            this.uranus.hide();
            this.neptune.hide();
        });
        this.mars.mousePressed(()=>{
            planets = "mars";
            this.mercury.hide();
            this.venus.hide();
            this.earth.hide();
            this.mars.hide();
            this.jupiter.hide();
            this.saturn.hide();
            this.uranus.hide();
            this.neptune.hide();
        });
        this.jupiter.mousePressed(()=>{
            planets = "jupiter";
            this.mercury.hide();
            this.venus.hide();
            this.earth.hide();
            this.mars.hide();
            this.jupiter.hide();
            this.saturn.hide();
            this.uranus.hide();
            this.neptune.hide();
        });
        this.saturn.mousePressed(()=>{
            planets = "saturn";
            this.mercury.hide();
            this.venus.hide();
            this.earth.hide();
            this.mars.hide();
            this.jupiter.hide();
            this.saturn.hide();
            this.uranus.hide();
            this.neptune.hide();
        });
        this.uranus.mousePressed(()=>{
            planets = "uranus";
            this.mercury.hide();
            this.venus.hide();
            this.earth.hide();
            this.mars.hide();
            this.jupiter.hide();
            this.saturn.hide();
            this.uranus.hide();
            this.neptune.hide();
        });
        this.neptune.mousePressed(()=>{
            planets = "neptune";
            this.mercury.hide();
            this.venus.hide();
            this.earth.hide();
            this.mars.hide();
            this.jupiter.hide();
            this.saturn.hide();
            this.uranus.hide();
            this.neptune.hide();
        });
        if(game === 1){
            this.mercury.show();
            this.venus.show();
            this.earth.show();
            this.mars.show();
            this.jupiter.show();
            this.saturn.show();
            this.uranus.show();
            this.neptune.show();
        }


     } 
     
    





}