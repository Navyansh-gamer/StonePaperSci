var C1,P1
var C2,P2
var C3,P3
//var gameState = "PLAY";
var C1Img,P1Img,C2Img,P2Img;
var C3Img,P3Img;
var computer,player;
//var BGimage;

function preload(){
  C1Img = loadImage("c1.png");
  P1Img = loadImage("p1.png");
  C2Img = loadImage("c2.png");
  P2Img = loadImage("p2.png");
  C3Img = loadImage("c3.png");
  P3Img = loadImage("p3.png");
  // BGimage = loadImage("background.png")
}                                                                    

function setup() {
  createCanvas(1200, 400);
  
  C1=createSprite(1000,200,100,100);
  C1.addImage("cp",C1Img);
  C1.visible=false;

  C3=createSprite(1000,200,100,100);
  C3.addImage("cs",C3Img);
  C3.visible=false;
  
  C2=createSprite(1000,200,100,100);
  C2.addImage("csi",C2Img);
  C2.visible=false;
  
  P1=createSprite(200,200,100,100);
  P1.addImage("Pp",P1Img);
  P1.visible=false;
  
  P3=createSprite(200,200,100,100);
  P3.addImage("Ps",P3Img);
  P3.visible=false;
  
  P2=createSprite(200,200,100,100);
  P2.addImage("P2",P2Img);
  P2.visible=false;

}

function draw() {
  //background(BGimage);
  background("black")
  fill("red");
  stroke("white")
  strokeWeight(4)
  textSize(50)
  text("Press space to play",400,100);

  fill("blue");
  stroke("white")
  strokeWeight(4)
  textSize(30)
  text("PLAYER",150,100);
  text("COMPUTER",950,100);


  if(keyDown("space")){
    var Prand =Math.round(random(1,3));
  
    var Crand =Math.round(random(1,3));
if(Crand===1){
C1.visible=true;
C2.visible=false;
C3.visible=false;
computer=1;
}
else if(Crand===2){
C1.visible=false;
C2.visible=true;
C3.visible=false;
computer=2;
}
else if(Crand===3){
C1.visible=false;
C2.visible=false;
C3.visible=true;
computer=3;
}
if(Prand===1){
    P1.visible=true;
    P2.visible=false;
    P3.visible=false;
    player=1;
    }
    else if(Prand===2){
    P1.visible=false;
    P2.visible=true;
    P3.visible=false;
    player=2;
    }
    else if(Prand===3){
    P1.visible=false;
    P2.visible=false;
    P3.visible=true;
    player=3
    }
  }
textSize(40);
fill ("yellow");
stroke("white");
strokeWeight(4);
if(computer===1 && player===2){
  text("YOU WIN",500,200);
}

  if(computer===1 && player===3 ){
    text("YOU LOSE",500,200);
  }

  if(computer===1 && player===1){
    text("It's a TIE ",500,200);
    text("Try again ",500,250);
  }

  if(computer===2 && player===2){
    text("It's a TIE ",500,200);
    text("Try again ",500,250);
  }
  
  if(computer===2 && player===1){
    text("YOU LOSE",500,200);
  }

  if(computer===2 && player===3){
    text("YOU WIN",500,200);
  }

  if(computer===3 && player===1){
    text("YOU WIN",500,200);
  }

  if(computer===3 && player===2){
    text("YOU LOSE",500,200);
  }
  if(computer===3 && player===3){
    text("It's a TIE ",500,200);
    text("Try again ",500,250);
  }
  


// 1. rename the images as image1,2,3
// 2. image.visible= false;
//3. var rand =random(1,3)
//4. spawnrandom / visible = true / use switch case ;
//5. if condition / set score / set text
// 6. win /lose
 //7.      1 paper        2 sci         3 stone
 drawSprites();
}