var bgImg, junglebg
var happyManImg, man, scaredManImg
var treasure, treasureImg
var edges;
var beeL,beeR, beerightImg, beeleftImg
var beeL2,beeR2,beeL3,beeR3,beeL4,beeR4,beeL5
var score = 0;
var restart,restartImg,win,winImg,gameover,gameoverImg
var PLAY = 1;
var END  = 0
var gameState = PLAY;

function preload(){
bgImg= loadImage("bg9.jpg");
happyManImg = loadImage("happy_traveller.png");
scaredManImg = loadImage("scared_traveller.png");
treasureImg = loadImage("treasure_2.png");
beeleftImg = loadImage("beeleft.png");
beerightImg = loadImage("beeright.png");
restartImg = loadImage("re-game.png");
winImg = loadImage("won.jpg");
gameoverImg = loadImage("gamedone.jpg");
}

function setup(){
  canvas = createCanvas(1000,700);

  junglebg= createSprite(500,500,10,10);
  junglebg.addImage(bgImg)
  junglebg.scale = 3.9
  
  man = createSprite(600,600,20,20);
  man.addImage(scaredManImg);
  man.scale = 1
  man.debug = true;
  man.setCollider("circle",0,0,30);

  treasure = createSprite(500,60,50,50);
  treasure.addImage(treasureImg);
  treasure.scale = 0.6

  beeL = createSprite(100,500,20,20);
  beeL.addImage(beeleftImg);
  beeL.scale = 0.5
  beeL.velocityX = 2;

  //playSound("sound123.mp3", true);
  beeR = createSprite(900,300,20,20);
  beeR.addImage(beerightImg);
  beeR.scale = 0.5
  beeR.velocityX = -8;

  beeL2 = createSprite(100,180,20,20);
  beeL2.addImage(beeleftImg);
  beeL2.scale = 0.5
  beeL2.velocityX = 4;

  beeR2 = createSprite(900,500,20,20);
  beeR2.addImage(beerightImg);
  beeR2.scale = 0.5
  beeR2.velocityX = -1;

  beeL3 = createSprite(100,400,20,20);
  beeL3.addImage(beeleftImg);
  beeL3.scale = 0.5
  beeL3.velocityX = 3;

  beeR3 = createSprite(1005,500,20,20);
  beeR3.addImage(beerightImg);
  beeR3.scale = 0.5
  beeR3.velocityX = -2;

  beeL4 = createSprite(30,180,20,20);
  beeL4.addImage(beeleftImg);
  beeL4.scale = 0.5
  beeL4.velocityX = 2;

  beeR4 = createSprite(700,100,20,20);
  beeR4.addImage(beerightImg);
  beeR4.scale = 0.5
  beeR4.velocityX = -1;
  //beeR4.debug = true;
  beeR4.setCollider("circle",0,0,50);

  beeL5 = createSprite(100,600,20,20);
  beeL5.addImage(beeleftImg);
  beeL5.scale = 0.5
  beeL5.velocityX = 3;

gameover = createSprite(300,180,40,20);
gameover.addImage(gameoverImg)
gameover.scale = 2
gameover.visible = false;

restart = createSprite(600,180,40,20);
restart.addImage(restartImg)
restart.scale = 2
restart.visible = false;

win  = createSprite(600,300,10,10);
win.addImage(winImg)
win.visible = false;
win.scale = 2
}

function draw(){
  background(bgImg);
  if( gameState === PLAY){
  text("Deaths: " + score,200,100);
  strokeWeight(0);
  fill("lightblue");
   edges = createEdgeSprites();

 //man.bounceOff(edges);
 beeR4.collide(treasure)
 man.collide(edges);

  if(keyDown(UP_ARROW)){
    man.velocityY=-3;
    }
    
    if(keyDown(DOWN_ARROW)){
    man.velocityY=2;
    }
    
    if(keyDown(LEFT_ARROW)){
    man.velocityX=-2;
    }
    
    if(keyDown(RIGHT_ARROW)){
    man.velocityX=2;
    }
    
    if(man.isTouching(treasure)){
      win.visible = true;
        //textColor("yellow")
      textSize(40);
      text("YAY! TREASURE TAKEN",100,180);
      }
        
    //resetting game
    if(man.isTouching(beeL) || man.isTouching(beeL2) || man.isTouching(beeL3)|| man.isTouching(beeL4) || man.isTouching(beeL5) || man.isTouching(beeR) || man.isTouching(beeR2) || man.isTouching(beeR3)|| man.isTouching(beeR4)) {
      man.x = 600;
      man.y = 800;
      score = score + 1;
      gameState = END;
      //gameover.visible = true;
      //restart.visible = true;
   }
  
   //if(man.isTouching(beeL) || man.isTouching(beeL2) || man.isTouching(beeL3)|| man.isTouching(beeL4) || man.isTouching(beeL5) || man.isTouching(beeR) || man.isTouching(beeR2) || man.isTouching(beeR3)|| man.isTouching(beeR4) ){
   // gameState = END;
   // }
  }
   if(gameState === END){
    gameover.visible = true;
    restart.visible = true;
    }
    //man.velocityY = 0;
    //man.velocityX = 0;
  /* beeL.velocityX = 0;
   beeL2.velocityX = 0;
   beeL3.velocityX = 0;
   beeL4.velocityX = 0;
   beeL5.velocityX = 0;
   beeR.velocityX = 0;
   beeR2.velocityX = 0;
   beeR3.velocityX = 0;
   beeR4.velocityX = 0; */

//change the man animation
//man.addImage("scaredManImg");
    
  if(mousePressedOver(restartImg)) {
  reset();
  gameState = PLAY;
  man.x = 600;
  man.y = 800
  //setup();
  }
//reset();
drawSprites();
}

function reset(){
  gameState = PLAY;
  gameover.visible = false;
  restart.visible = false;
  
  man.addImage("scaredManImg");

  score = 0;
  
}
  


