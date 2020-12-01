var pups,hbd,pppapa,p,ppp;
var song;

function preload(){
  pup = loadImage("papa.jpg")
  hbd1 = loadImage("sur.png");
  ppapa = loadImage("papa1.jpeg")
  pp = loadImage("p.png")
  pappa = loadImage("papaa.jpeg")
  gif = loadAnimation("Happy-birthday-to-you-wish-on-frame-with-hearts-Animated-GIF (1).gif")
  ty1 = loadImage("TY.png")
}

function loaded(){
   song.play();
}

function setup() {
  createCanvas(500, 500);
  
  hbd = createSprite(250,250);
  hbd.addImage(hbd1);
  hbd.scale = 1.2;
  
  song = loadSound("Happy Birthday English 2.mp3", loaded)
  
}

function draw() {
  background(220);
  
  if(keyDown("e")){
  pppapa = createSprite(250,250);
  pppapa.addImage(ppapa);
  pppapa.scale = 0.4;
  hbd.visible = false; 
  
  pp.visible = false; 

  }
  
  if(keyDown("r")){
   pups = createSprite(250,230,10,50)
  pups.addImage(pup)
  pups.scale = 2;
  }
   
  if(keyDown("w")){
  ppp = createSprite(250,250);
  ppp.addImage(pappa);
  ppp.scale = 0.4;
  }
  
  if(keyDown("q")){
  giff = createSprite(250,250)
  giff.addAnimation("giff",gif)
  giff.scale = 2
  
  }
  
  if(keyDown("t")){
  ty = createSprite(250,250)
  ty.addImage(ty1)
  ty.scale = 2
  
  }
  drawSprites();
}