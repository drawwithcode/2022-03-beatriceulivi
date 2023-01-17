// ********* THE BATTY PIANO ********* //
// This sketch is optimized for the screen of Macbook Pro 13 //
// press Keys or piano buttons to generate the digital collage //

let C, D, E, F, G, A, B, U;

let stars;
let arrayOfStars = [];

avanti = true;
let angle = 0;
let angle1 = 0;
let moveA = 200;
let moveB = -100;
let moveC = -400;
let moveD = -500;
let t = 0;
let w = 0;

let cloud1, cloud2;
let myFont;
let fish;
let cat;
let back;
let finger;
let desert;
let choir;
let bird;
let up;
let balls = [];
let money = [];
let orange;
let eye;

//boolean
let on1 = false;
let on2 = false;
let on3 = false;
let on4 = false;
let on5 = false;
let on6 = false;
let on7 = false;
let on8 = false;


function preload() {

  myFont = loadFont('assets/PicNic.otf');

  cloud1 = loadImage("./assets/nuvola.png")
  cloud2 = loadImage("./assets/nuvola2.png")
  fish = loadImage("./assets/pesce.png")
  cat = loadImage("./assets/cat.png")
  back = loadImage("./assets/fondo.png")
  finger = loadImage("./assets/indice.png")
  desert = loadImage("./assets/deserto.png")
  choir = loadImage("./assets/coro.png")
  bird = loadImage("./assets/bird.png")
  up = loadImage("./assets/up.png")
  orange = loadImage("./assets/arancia.png")
  eye = loadImage("./assets/eye.png")
  
  C = loadSound("./assets/sound/C.mp3");
  D = loadSound("./assets/sound/D.mp3");
  E = loadSound("./assets/sound/E.mp3");
  F = loadSound("./assets/sound/F.mp3");
  G = loadSound("./assets/sound/G.mp3");
  A = loadSound("./assets/sound/A.mp3");
  B = loadSound("./assets/sound/B.mp3");
  U = loadSound("./assets/sound/U.mp3");
  
  for(let i = 0; i < 1; i++){
    money[i] = loadImage("./assets/moneta.png");
  }


}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15)
	stars = createStars()

  for(let i = 0; i < 15; i++){
    let x = random(width);
    let y = random(height);
    let r = random(10, 100);
    let s = random(0.2, 4);
    let coin = random(money);
    balls.push(new DrawBalls(x, y, r, s, coin));
  }
}

function draw() {
  background("#ea3ff7");

  angleMode(DEGREES);
  imageMode(CENTER);

////star
  push();
  for (let star of stars) {
		fill(random(0, 255))
		noStroke()
		circle(star.x, star.y, 2);
  }
  pop();

////desert
  image(desert, windowWidth/2, windowHeight/1.5, windowWidth);


///// * clouds * //////////////////////////////////////////////////////
   image(cloud1, moveA, 80, cloud1.width, cloud1.height);
   moveA = moveA + 2; 
   if (moveA > windowWidth) {
     moveA = -10 + 2;
   }
   image(cloud1, moveB, 150, cloud1.width*2, cloud1.height*2);
   moveB = moveB + 5; 
   if (moveB > windowWidth) {
   moveB = -100 +5 ;
   }
   image(cloud2, moveC, 350, cloud2.width/3, cloud2.height/3);
   moveC = moveC + 2; 
   if (moveC > windowWidth) {
     moveC = -50 +2 ;
   }
   image(cloud2, moveD, 250, cloud2.width/2, cloud2.height/2);
   moveD = moveD + 5; 
   if (moveD > windowWidth) {
     moveD = -50 +5;
   }
///////////////////////////////////////////////////////////////////////////////

  
///// * boolean images * //////////////////////////////////////////////////////
  if (on1) {
    image(fish, windowWidth-250, windowHeight-390, fish.width/2, fish.height/2);
  }
  if (on2) {
    //// choir
    push();
    translate(windowWidth/2,windowHeight/4.5);
    image(choir, t, 100, choir.width/3, choir.height/3);
    t = t + random(-2, 2);
    pop();
  }
  if (on3) {
    //// rotating orange
    push();
    imageMode(CENTER);
    translate(windowWidth/4.5, windowHeight/1.5);
    rotate(angle);
    angle ++;
    image(orange, 0, 0, orange.width/4, orange.height/4);
    pop();
  }
  if (on4) {
     ///// money rain
     for(let i = 0; i < balls.length; i++){
      balls[i].display();
      balls[i].move();
    }
  }
  if (on5) {
    ///// bird
    image(bird, 80, 650, bird.width/3.5, bird.height/3.5);
  }
  if (on6) {
    ///// rotating eye
    push();
    translate(140, 150);
    rotate(angle1);
  if (avanti==true){
   angle1 ++;
  if (angle1 >5){
     avanti=false;
   }
  } else{
   angle1 --;
   if (angle1 <-5){
     avanti=true;
   }
  }
  image(eye, 0, 0, eye.width/1.5, eye.height/1.5);
  pop();
  }
  if (on7) {
    ///// cat
    image(cat, windowWidth-50, 180, cat.width/2.7, cat.height/2.7);
  }
  if (on8) {
    ///// UP
    push();
    translate(windowWidth-120, windowHeight-100);
    image(up, w, 0, up.width/5, up.height/5);
    w = w + random(-1, 1);
    pop();
  }
/////////////////////////////////////////////////////////////////////////
 

///// * keyboard * //////////////////////////////////////////////////////
  push();
  imageMode(CENTER);
  translate(windowWidth/2, windowHeight/0.88);
  image(back, 0, 0, windowWidth/1.8, windowHeight);
  pop();

///white buttons
  push();
  translate(windowWidth/4, windowHeight/1.35);
  for(let x = 0; x < windowWidth/2; x +=  windowWidth/16) {
    for(let y = 0; y < windowWidth/17; y += windowWidth/8) {
      
      stroke(0);
      strokeWeight(3);
      fill(255);
      rect(x, y, windowWidth/17, windowWidth/8, 0, 0, 15, 15);
    }
  }
  pop();

///black buttons
  push();
  translate(windowWidth/4 + windowWidth/28, windowHeight/1.35);
  for(let x = 0; x < windowWidth/2.3; x +=  windowWidth/16) {
    for(let y = 0; y < windowWidth/17; y += windowWidth/16) {
      
      fill(0);
      rect(x, y, windowWidth/22, windowWidth/16, 0, 0, 10, 10);
    }
  }
  pop();
///////////////////////////////////////////////////////////////////////
  

/////* text *//////////////////////////////////////////////////////////
push();
  textSize(25);
  textAlign(CENTER);
  textFont(myFont);
  text('C', windowWidth/3.6, windowHeight/1.08);
  text('D', windowWidth/2.9, windowHeight/1.08);
  text('E', windowWidth/2.46, windowHeight/1.08);
  text('F', windowWidth/2.15, windowHeight/1.08);
  text('G', windowWidth/1.89, windowHeight/1.08);
  text('A', windowWidth/1.69, windowHeight/1.08);
  text('B', windowWidth/1.519, windowHeight/1.08);
  text('U', windowWidth/1.39, windowHeight/1.08);

  textFont(myFont);
  fill('#0404bc');
  textSize(40);
  text('Press Keys or piano buttons to generate', windowWidth/2, windowHeight/3);
pop();
///////////////////////////////////////////////////////////////////////

////finger mouse
push();
  imageMode(CENTER);
  image(finger, mouseX, mouseY, finger.width/7, finger.height/7);
pop();
 
}
   

function keyTyped() {
  if(key === 'c'){
    C.play();
    on1=true;
  
  }
  if(key == 'd'){
    D.play();
    on2=true;
  }
  if(key == 'e'){
    E.play();
    on3=true;
  }
  if(key == 'f'){
    F.play();
    on4=true;
  }
  if(key == 'g'){
    G.play();
    on5=true;
  }
    if(key == 'a'){
    A.play();
    on6=true;
  }
  if(key == 'b'){
    B.play();
    on7=true;
  }
  if(key == 'u'){
    U.play();
    on8=true;
  }


}



function createStars() {
	for (let i = 0; i < 500; i++) {
		let star = {
			x: random(width),
			y: random(height)
		}
		arrayOfStars.push(star)
	}
	return arrayOfStars
}



function mousePressed() {
  if ( mouseX > windowWidth/4 && mouseX < windowWidth/3.5
  && mouseY > windowHeight/1.35 && mouseY < windowHeight/1.05 ) {
    C.play();
    on1=true;
  }
  if ( mouseX > windowWidth/3.2 && mouseX < windowWidth/2.7
  && mouseY > windowHeight/1.35 && mouseY < windowHeight/1.05 ) {
    D.play();
    on2=true;
  }
  if ( mouseX > windowWidth/2.75 && mouseX < windowWidth/2.3
  && mouseY > windowHeight/1.35 && mouseY < windowHeight/1.05 ) {
    E.play();
    on3=true;
  }
  if ( mouseX > windowWidth/2.3 && mouseX < windowWidth/2
  && mouseY > windowHeight/1.35 && mouseY < windowHeight/1.05 ) {
    F.play();
    on4=true;
  }
  if ( mouseX > windowWidth/1.99 && mouseX < windowWidth/1.8
  && mouseY > windowHeight/1.35 && mouseY < windowHeight/1.05 ) {
    G.play();
    on5=true;
  }
  if ( mouseX > windowWidth/1.8 && mouseX < windowWidth/1.6
  && mouseY > windowHeight/1.35 && mouseY < windowHeight/1.05 ) {
    A.play();
    on6=true;
  }
  if ( mouseX > windowWidth/1.55 && mouseX < windowWidth/1.45
  && mouseY > windowHeight/1.35 && mouseY < windowHeight/1.05 ) {
    B.play();
    on7=true;
  }
  if ( mouseX > windowWidth/1.4 && mouseX < windowWidth/1.2
  && mouseY > windowHeight/1.35 && mouseY < windowHeight/1.05 ) {
    U.play();
    on8=true;
  }

}



class DrawBalls{
  constructor(x, y, r, s, coin){
    this.x = x;
    this.y = y;
    this.r = r;
    this.s = s;
    this.coin = coin;
  }

display(){
  image(this.coin, this.x, this.y, this.coin.width / 10, this.coin.height / 10);
}

move(){
  this.y += this.s;
  if(this.y - this.r > height){
    this.y = -this.y - this.r + 600;
  }
}
}

windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
