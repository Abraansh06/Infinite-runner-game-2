var ufo,uimage;
var jetplane,jimage;
var bg,bgimage;
var ogroup,ogroup2,ogroup3;
var r,rimage,r1,r1image;
var oe,oeimage;
var or,orimage;
var os,osimage;
var spring,simage;
var ws,wsimage;
var score=0;
var restart,resetimage;
var gameState = "play";
var END;



function preload(){
    uimage=loadImage("ufo.png");
    jimage=loadImage("jetp.png");  
    bgimage=loadImage("c1.jpg");
    rimage=loadImage("r.png");
    r1image=loadImage("r1.png");
    oeimage=loadImage("ore_emerald.png");
    ogimage=loadImage("ore_gold.png");
    orimage=loadImage("ore_ruby.png");
    osimage=loadImage("ore_silver.png");
    simage=loadImage("spring.png");
    wsimage=loadImage("wheat_stage4.png");
  resetimage=loadImage("restart.png")
}

function setup() {
  createCanvas(displayWidth-100,displayHeight-50);
  
  bg=createSprite(275,250);
  bg.addImage("bg",bgimage);
  bg.scale=1.95
  bg.x=bg.width/3
  
 
  ufo=createSprite(450,150,10,10);
  ufo.addImage("ufo",uimage);
  ufo.scale=0.13;
  //ufo.velocityY=3;
  
 
  
  
  jetplane=createSprite(100,displayWidth/4-500,displayWidth/2,10);
  jetplane.addImage("jetplane",jimage);
  jetplane.scale=0.2;
  
  restart=createSprite(275,250,10,10);
  restart.addImage("restart",resetimage);
  restart.scale=0.3;
  restart.visible=false;
  

  ogroup = new Group;
  ogroup2= new Group;
  ogroup3= new Group;
  
  score=0;
  
  console.log("hello" + 5)
  
  
 
}

function draw() {
  background(400);
  
   drawSprites();
  
   camera.x=displayWidth/2
   //camera.y=displayWidth/2

  if(gameState === "play"){
    
     jetplane.y=mouseY;
    
    fill("black");
    textSize(20)
  text("Score: "+score, 450,50);
  score=score + Math.round(getFrameRate()/60); 
    
    bg.velocityX=-(13+score/300);
    
     if(bg.x<0){
    bg.x=bg.width/3;
     }
    
    if(ogroup.isTouching(jetplane)){
       gameState= END;
       }
    
    
    if(ogroup2.isTouching(jetplane)){
       gameState= END;
       }
    
    if(ogroup3.isTouching(jetplane)){
       gameState= END;
       }
    
  } 
  else if(gameState===END){
    restart.visible=true;
    bg.velocityX=0;
    ogroup.destroyEach();
    ogroup2.destroyEach();
    ogroup3.destroyEach();
    fill("Lime")
    stroke(6)
    textStyle("bold")
    textSize(35)
    text("Restart ", 225,200)
    jetplane.visible=false;
    
    
     if(mousePressedOver(restart)){
        gameState="play";
       jetplane.visible=true;
       restart.visible=false;
       score=0;
     }
    
  }
  
 
  
   
  obstacles();
  obstacles1();
  obstacles2();
  
  
}


function obstacles(){
  
  if(frameCount%120===0 && score>50){     
    oe=createSprite(650,250,10,10);
    oe.velocityX=-(2+score/50);
    oe.rotationSpeed=7;
    oe.x=Math.round(random(500,550))
    oe.lifetime=275;
    oe.setCollider("circle",0,0,15)
    oe.debug=false;
    
    r=Math.round(random(1,4))
    console.log(r);
    console.log(oe.x)
    
    if(r==1){
       oe.addImage(oeimage);
    } else if(r==2){
      oe.addImage(ogimage);        
    } else if(r==3){
       oe.addImage(orimage);       
   }  else{
     oe.addImage(osimage);
   }
    
    ogroup.add(oe);
    
     }
  
}


function obstacles1(){
  
  if(frameCount%110===0 && score>100){     
    r=createSprite(250,50,10,10);
    r.velocityX=-(2+score/100);
    r.rotationSpeed=7;
    r.x=Math.round(random(500,550))
    r.lifetime=275;
    r.setCollider("circle",0,0,15)
    r.debug=false;
    r.scale=0.5
    
    i=Math.round(random(5,7))
    console.log(i);
    console.log(r.x)
    
    if(i==5){
       r.addImage(rimage);
    } else if(i==6){
       r.addImage(simage);       
   }  else{
     r.addImage(wsimage);
   }
    
     ogroup2.add(r);
    
     }
  
}


function obstacles2(){
  
  if(frameCount%90===0 && score>250){     
    ws=createSprite(250,450,10,10);
    ws.velocityX=-(2+score/50);
    ws.rotationSpeed=7;
    ws.x=Math.round(random(500,550))
    ws.lifetime=275;
    ws.setCollider("circle",0,0,15)
    ws.debug=false;
    ws.scale=0.5
    
    b=Math.round(random(8,9))
    console.log(b);
    console.log(ws.x)
    
    if(b==8){
       ws.addImage(simage);
    } else if(b==9){
       ws.addImage(wsimage);       
   }  
    
     ogroup3.add(ws);
    
     }
  
}







