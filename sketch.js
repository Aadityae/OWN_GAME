


var PLAY =0
var gameState = PLAY
var WIN = 1
var LAST = 2
var OVER = 3
var END = 4


var ground1,ground2,ground3,ground4,ground5
var ground6,ground7,ground8,ground9,ground10
var ground11,ground12,ground13,ground14,ground15
var ground16,ground17,ground18,ground19,ground20
var ground21,ground22,ground23,ground24,ground25
var player,pass,pass_img
var box,box_img
var border1,border2,border3,border4
var antenna,antenna_img
var engine, world;
var sunrise,night,sunset,day,houseSunrise
var security,system
var death = 0


function preload()
{
 
  sunrise = loadImage("Sunrise.png")
  day = loadImage("Day.png")
  sunset = loadImage("Sunset.png")
  night = loadImage("Night.png")
  houseSunrise = loadImage("houseSunrise.png")
  houseDay= loadImage("houseDay.png")
  houseNight = loadImage("houseNight.png")
  houseSunset = loadImage("houseSunset.png")
  houseSunset = loadImage("houseSunset.png")
  box_img = loadImage("box.png")
  antenna_img = loadImage("antenna.png")
  pass_img = loadImage("pass.png")
}

function setup() 
{
 

if(background)
{
  background(230)
}
  

  createCanvas(800,1000);
  if(gameState === PLAY)
  {

  
  security = new Security();
  
border1 = createSprite(5,500,10,1000)
 border2 = createSprite(795,500,10,1000)
 border3 = createSprite(400,5,800,10)
border4 = createSprite(400,995,1000,10)

player = createSprite(35,20,12,12)
player.shapeColor = "red"
player.visible = false


ground1 = createSprite(200,500,700,10);
ground1.visible = false
ground2 = createSprite(600,530,700,10);
ground2.visible = false
ground3 = createSprite(200,310,700,10);
ground3.visible = false
ground4 = createSprite(600,340,700,10);
ground4.visible = false
ground5 = createSprite(200,250,700,10);
ground5.visible = false
ground6 = createSprite(600,280,700,10);
ground6.visible = false
ground7 = createSprite(300,700,70,10);
ground7.visible = false
ground8 = createSprite(300,760,70,10);
ground8.visible = false
ground9 = createSprite(265,730,10,70);
ground9.visible = false
ground10 = createSprite(335,730,10,70);
ground10.visible = false
ground11 = createSprite(435,400,70,10);
ground11.visible = false
ground12 = createSprite(435,460,70,10);
ground12.visible = false
ground13 = createSprite(400,430,10,70);
ground13.visible = false
ground14 = createSprite(470,430,10,70);
ground14.visible = false

antenna = createSprite(430,429,20,20)
antenna.visible = false
antenna.addImage(antenna_img)
antenna.scale = 0.2
box = createSprite(300,729,18,18)
box.visible = false
box.addImage(box_img)
box.scale = 0.2
pass = createSprite(710,930,30,20)
pass.visible = false
pass.addImage(pass_img)
pass.scale = 0.2
if(gameState === WIN)
{

  antenna = createSprite(430,420,20,20)
antenna.visible = false
box = createSprite(300,720,18,18)
box.visible = false
pass = createSprite(710,930,30,20)
pass.visible = false
}

}
}

function draw() {


  console.log(pass.visible)
  console.log(gameState)
if(gameState === PLAY)
{
  gameState = PLAY
}

  security.display()



 if(gameState === LAST)
 {
  background(230)
  fill("black")
  textSize(40)
  text("WELL DONE",300,60)

  fill("black")
  textSize(20)
  text("PRESS SPACE TO GO TO NEXT LEVEL",200,290)

  if(keyDown("space"))
  {
    gameState = OVER
   
   
  }
 }
  
 
  
  if(gameState === OVER)
  {
    security.hide()
    background(230)
    fill("black")
    text("LOSS :" + death,700,50)

    player.visible = true
    ground1.visible = true
    ground2.visible = true 
    ground3.visible = true 
    ground4.visible = true 
    ground5.visible = true 
    ground6.visible = true 
    ground7.visible = true 
    ground8.visible = true 

    ground9.visible = true 

    ground10.visible = true 
    ground11.visible = true 
    ground12.visible = true 
    ground13.visible = true 
    ground14.visible = true 
    antenna.visible = true
    box.visible = true
    pass.visible = true

    player.collide(ground1)
    player.collide(ground2)

    player.collide(ground3)
    player.collide(ground4)
    player.collide(ground5)
    player.collide(ground6)
    player.collide(ground7)
    player.collide(ground8)

    player.collide(ground9)
    player.collide(ground10)
    player.collide(ground11)
    player.collide(ground12)
    player.collide(ground13)
    player.collide(ground14)
    

if(keyDown("UP_ARROW"))
{
  player.y = player.y-4
}

if(keyDown("DOWN_ARROW"))
{
  player.y = player.y+4
}

if(keyDown("LEFT_ARROW"))
{
  player.x = player.x-4
}

if(keyDown("RIGHT_ARROW"))
{
  player.x = player.x+4
}

if(player.isTouching(ground1) || player.isTouching(ground2) || player.isTouching(ground3) || player.isTouching(ground4) || player.isTouching(ground5) || player.isTouching(ground6) || player.isTouching(ground7) || player.isTouching(ground8) || player.isTouching(ground9) || player.isTouching(ground10) || player.isTouching(ground11) || player.isTouching(ground12) || player.isTouching(ground13) || player.isTouching(ground14))
{
  player.x = 35
  player.y = 20

  death = death+1
}



if(player.isTouching(pass) && gameState === OVER)
{
ground7.destroy()
ground8.destroy()
ground9.destroy()
ground10.destroy()
pass.destroy()
this.security.reset.hide()

}

if(player.isTouching(box) && gameState === OVER)
{
ground11.destroy()
ground12.destroy()
ground13.destroy()
ground14.destroy()
box.destroy()

}

if(player.isTouching(antenna) && gameState === OVER)
{
  ground1.visible = false
  ground2.visible = false
  ground3.visible = false
  ground4.visible = false
  ground5.visible = false
  ground6.visible = false
  ground7.visible = false
  ground8.visible = false
  ground9.visible = false
  ground10.visible = false
  ground11.visible = false
  ground12.visible = false
  ground13.visible = false
  ground14.visible = false
antenna.destroy()


gameState = END

}
 
   }
if(gameState === END)
{
  background(230)
  fill("black")
  textSize(40)
  text("GREAT JOB ",300,60)

  fill("black")
  textSize(20)
  text("YOU HAVE FINISHED YOUR OWN CITY",200,290)

  player.visible = false
}

   if(gameState === PLAY)
   {
     ground1.visible = false
     ground2.visible = false
     ground3.visible = false
     ground4.visible = false
     ground5.visible = false
     ground6.visible = false
     ground7.visible = false
     ground8.visible = false
     ground9.visible = false
     ground10.visible = false
     ground11.visible = false
     ground12.visible = false
     ground13.visible = false
     ground14.visible = false
      
      antenna.visible = false
    
      box.visible = false
     
      pass.visible = false

     player.visible = false
     player.x =35
     player.y=20
   }
  drawSprites();

  
}


