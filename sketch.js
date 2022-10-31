let myImage;
let song;
let amp;
let button;

let volhistory = [];

//load song + image
function preload() {
  song = loadSound("./assets/Always Then.mp3");
  myImage = loadImage("./assets/background.png")
}

function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);

  //button start&stop
  button = createButton("PLAY");
  button.mousePressed(playSong);
  button.position(310, 620);
	button.size(80,30);
	button.style("background-color",color(150));
	button.style("font-size","14px");
	button.style("font-family",'Space Mono');

  song.play();
  amp = new p5.Amplitude();
}

function draw() {
  background(0);
  image(myImage,0,0,myImage.widht, myImage.height);

  let vol = amp.getLevel();
  volhistory.push(vol);
  stroke(0);
  noFill();

  //create graph using beginShape function
  translate(width / 2, height / 2);
  beginShape();
  for (let i = 0; i < 360; i++) {
    let r = map(volhistory[i], 0, 1, 10, 700);
    let x = r * cos(i);
    let y = r * sin(i);
    vertex(x, y);
  }
  endShape();

  //the graph clears when it reaches the end
  if (volhistory.length > 360) {
    volhistory.splice(0, 1);
  }
}

function playSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}
