var canvas;
var fuelImage, backgroundImage, lifeImage, powerCoinImage;
var blastImage;
var bgImg, car1_img, car2_img, track;
var database, form, player;
var playerCount = 0;
var allPlayers, car1, car2;
var gameState, fuels, powerCoins, obstacles;
var obstacle1Image, obstacle2Image;
var cars = [];

function preload() {
  backgroundImage = loadImage("assets/background.png");
  blastImage = loadImage("assets/blast.png");
  fuelImage = loadImage("assets/fuel.png");
  lifeImage = loadImage("assets/life.png");
  powerCoinImage = loadImage("assets/goldCoin.png");
  obstacle1Image = loadImage("assets/obstacle1.png");
  obstacle2Image = loadImage("assets/obstacle2.png");
  car1_img = loadImage("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  track = loadImage("assets/track.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
