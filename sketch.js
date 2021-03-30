var pState = 0;
var state = 0;
var game = 0;
var player1, player2, player3, player4;
var register, player, planet;
var bg1, bg2;
var database;
var starter;
var playerCount = 0;
var planets = "none";
var mState = 0;
var mCraters, mBasin, mAestoroid;
var mbg1, mbg2, mbg3;
var mercury, mSatellite,mSatelliteImg;
var vbg1, vbg2, vbg3, vbg4;
var venus, vSatellite, vSatelliteImg;
var vState = 0;

function preload(){
  bg1 = loadImage("images/start.jpg");
  bg2 = loadImage("images/main.jpg");
  mBasin = loadImage("mercury/basin.jpg");
  mCraters = loadAnimation("mercury/crater.png","mercury/crater2.jpg","mercury/crater3.jpg","mercury/crater4.jpg");
  mAestoroid = loadImage("mercury/aestoroid.jpg");
  mbg1 = loadImage("mercury/mbg1.jpg");
  mbg2 = loadImage("mercury/mbg2.jpg");
  mbg3 = loadImage("mercury/mbg3.png");
  mSatelliteImg = loadImage("mercury/satellite.jpg");
  vbg1 = loadImage("venus/vbg1.jpg");
  vbg2 = loadImage("venus/venus.jpg");
  vbg3 = loadImage("venus/atmosphere.jpg");
  vbg4 = loadImage("venus/land.jpg");
  
}
function setup() {
  database = firebase.database();
  //mSatellite.visible = false;
  createCanvas(windowWidth,windowHeight);

  starter = new Start();
  starter.start();
  planet = new Planets();
  mercury = new Mercury();
  venus = new Venus();
  console.log(width,height);

}

function draw() {
  if(game === 0){
    background(bg1);
  }
  if(game === 1){
    background(bg2);
    planet.display();
  }
  if(planets = "mercury"){
    
    mercury.display();
  }
  if(planets = "venus"){
    venus.display();
  }

  drawSprites();
  text("x: "+mouseX,mouseX,mouseY); 
  text(" y: "+mouseY,mouseX+35,mouseY);
}