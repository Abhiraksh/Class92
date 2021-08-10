const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var b, bi, g, gi, g2, bo1, bo1i, score=0, g1, g3, gi1, g2,gs=0, fishes;
var hb, mb, bgm, bluebtn, greenbtn, leftAr, rightAr, lai, rai;
var trg, h, hi, trash, t2, t2i, lvl = 0, bc, t3, t3i, fo, foi, foii;

function preload()
{
	bi = loadImage("images/blue1.png"); 
	gi = loadImage("images/green.png"); 
	bo1i = loadImage("canoe.png");
	gi1=loadImage('images/garbager.png');
	hb = loadImage("housingboat.png");
	mb  = loadImage("motor boat.png");
	bgm = loadSound("kbr-bg.wav");
	t2i = loadImage("trash-removebg-preview (1).png");
	bc = loadImage("cruise.png");
	t3i = loadImage("bin-removebg-preview.png");
	foi = loadImage("orangeFish-removebg-preview.png");
	foii= loadImage("leftfush.png");

}

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);


	engine = Engine.create();
	world = engine.world;
	
   
	b= createSprite(650,350,10,10);
	b.addImage(bi);
	b.scale=1.5;

	bo1=createSprite(650,400,10,10);
	bo1.addImage(bo1i); 
	
	
  
	// bgm.loop();

	trg = new Group();

	login();

  
}


function draw() {
	// Engine.run(engine);
 	background("white");
	
	
// 	if(frameCount%150===0){
// 		t2 = createSprite(1300,500,40,10);
// 		t2.addImage("t2i",t2i);
// 		t2.velocityX= -5
// 		t2.lifetime = 220
		
		
// 	   }	

// 	   if(frameCount%190===0){
// 		t2 = createSprite(10,500,40,10);
// 		t2.addImage("t2i",t2i);
// 		t2.velocityX= 5
// 		t2.lifetime = 220
		
		
// 	   }
  

//   if(frameCount%100===0){
// 	g1 = createSprite(10,500,40,10);
// 	g1.addImage("gi1",gi1);
// 	g1.velocityX= 6;
// 	g1.lifetime = 220;
//    }

//    if(frameCount%140===0){
// 	g1 = createSprite(1300,500,40,10);
// 	g1.addImage("gi1",gi1);
// 	g1.velocityX= -6;
// 	g1.lifetime = 220;
//    }

   

//    if(frameCount%250 === 0){
	   
// 	t3 = createSprite(1300,520,40,10);
// 	t3.addImage("t3i",t3i);
// 	t3.velocityX= -10
// 	t3.lifetime = 220;
// 	t3.scale = 0.7;
//    }

//    if(frameCount%290 === 0){
	   
// 	t3 = createSprite(10,520,40,10);
// 	t3.addImage("t3i",t3i);
// 	t3.velocityX= 10
// 	t3.lifetime = 220;
// 	t3.scale = 0.7;
//    }
//    if(frameCount%300 === 0){
	   
// 	fo = createSprite(1300,570,40,10);
// 	fo.addImage("foi",foi);
// 	fo.velocityX= -10
//     fo.lifetime = 220;
// 	fo.scale = 0.7;
//    }

//    if(frameCount%350 === 0){
	   
// 	fo = createSprite(10,570,40,10);
// 	fo.addImage("i",foii);
// 	fo.velocityX = 10;
// 	fo.lifetime = 220;
// 	fo.scale = 0.7;
//    }

//    if(frameCount%500 === 0){
// 	   b.addImage(gi);
//    }
//    else{
// 	   b.addImage(bi);
//    }

//   if(mousePressedOver(g1)){
// 	  g1.destroy();
// 	  score+=0.5;
	
//   }

//   if(mousePressedOver(t2)){
// 	t2.destroy();
// 	score+=1.5;
    
// }
// if(mousePressedOver(t3)){
// 	t3.destroy();
// 	score+=5.5;
    
// }
// if(mousePressedOver(fo)){
// 	fo.destroy();
// 	score-=15;
    
// }

  
//   drawSprites();

//   fill("black");
// 	textSize(15);

//   text("SCORE: "+score, 1250, 20);	

	
 
}

	



