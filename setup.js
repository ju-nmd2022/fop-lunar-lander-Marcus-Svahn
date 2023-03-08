let x = 200;
let y = 0;
let s = 0.2;
let gravity = 0;
let acceleration = 0.2;
let state = "start";


function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
}

// This is the spaceship based from Star Wars
function tieFighter(x, y, s) {

  /*
      LEFT WING
  */
  
  // left arm thing
  fill (130, 130, 130);
  noStroke();
  
  beginShape();
  vertex(x + 10 * s, y + 25 * s);
  vertex(x - 40 * s, y + 10 * s);
  vertex(x - 40 * s, y - 10 * s);
  vertex(x + 10 * s, y - 25 * s);
  endShape();
  
  
  // left wing
  fill(0, 0, 0);
  stroke(130, 130, 130);
  strokeWeight(9 * s);
  
  beginShape();
  vertex(x - 55 * s, y);
  vertex(x - 45 * s, y + 110 * s);
  vertex(x - 90 * s, y + 150 * s);
  vertex(x - 110 * s, y);
  vertex(x - 90 * s, y - 150 * s);
  vertex(x - 45 * s, y - 120 * s);
  vertex(x - 55 * s, y);
  endShape();
  
  // left wing support-thingy
  strokeWeight(6 * s);
  line(x - 85 * s, y + 140 * s, x - 80 * s, y);
  line(x - 50 * s, y + 110 * s, x - 80 * s, y);
  line(x - 85 * s, y - 140 * s, x - 80 * s, y);
  line(x - 50 * s, y - 120 * s, x - 80 * s, y);
  line(x - 110 * s, y, x - 80 * s, y);
  
  fill(130, 130, 130);
  noStroke();
  rect(x - 80 * s, y - 10 * s, 50 * s, 20 * s, 20 * s);
  
  /*
      RIGHT WING
  */
  
  // right arm thing
  fill (130, 130, 130);
  noStroke();
  
  beginShape();
  vertex(x + 140 * s, y + 10 * s);
  vertex(x + 90 * s, y + 25 * s);
  vertex(x + 90 * s, y - 25 * s);
  vertex(x + 140 * s, y - 10 * s);
  endShape();
  
  // right wing
  fill(0, 0, 0);
  stroke(130, 130, 130);
  strokeWeight(9 * s);
  
  beginShape();
  vertex(x + 210 * s, y);
  vertex(x + 190 * s, y + 150 * s);
  vertex(x + 145 * s, y + 110 * s);
  vertex(x + 155 * s, y);
  vertex(x + 145 * s, y - 120 * s);
  vertex(x + 190 * s, y - 150 * s);
  vertex(x + 210 * s, y);
  endShape();
  
  // right wing support-thingy
  strokeWeight(6 * s);
  line(x + 150 * s, y + 110 * s, x + 180 * s, y);
  line(x + 185 * s, y + 140 * s, x + 180 * s, y);
  line(x + 150 * s, y - 120 * s, x + 180 * s, y);
  line(x + 185 * s, y - 140 * s, x + 180 * s, y);
  line(x + 205 * s, y, x + 180 * s, y);
  
  fill(130, 130, 130);
  noStroke();
  rect(x + 130 * s, y - 10 * s, 50 * s, 20 * s, 20 * s);
  
  /*
      COCKPIT
  */
  
  // cockpit
  fill (140, 140, 140);
  noStroke();
  
  ellipse (x + 50 * s, y, 100 * s);
  
  // cockpit glass
  stroke(110, 110, 110);
  strokeWeight(2 * s);
  fill (75, 75, 75);
  ellipse (x + 50 * s, y, 60 * s);
  
  line(x + 20 * s, y, x + 80 * s, y);
  line(x + 50 * s, y - 30 * s, x +50 * s, y + 30 * s);
  line(x + 30 * s, y + 20 * s, x + 70 * s, y - 20 * s);
  line(x + 30 * s, y - 20 * s, x + 70 * s, y + 20 * s);
  
  ellipse (x + 50 * s, y, 25 * s);
  
  // Guns
  ellipse(x + 30 * s, y + 35 * s, 10 * s);
  ellipse(x + 70 * s, y + 35 * s, 10 * s);
  
  }

// This is the scenery for the game, based on the planet Tatooine
function scenery() {
    push();
    noStroke();
    background(250, 205, 120);
  
    // Hills
    fill(135, 120, 100);
  
    // top hill
    beginShape();
    vertex(0, 500);
    vertex(0, 460);
    bezierVertex(100, 400, 50, 350, 200, 450);
    bezierVertex(460, 400, 250, 370, 500, 450);
    bezierVertex(560, 450, 450, 390, 900, 500);
    vertex(600, 430);
    vertex(600, 500);
    endShape();
    
  // lower hill
    fill(145, 125, 110);
    beginShape();
    vertex(0, 525);
    vertex(0, 480);
    bezierVertex(100, 420, 50, 390, 210, 480);
    bezierVertex(460, 450, 270, 430, 530, 480);
    vertex(600, 470);
    vertex(600, 525);
    endShape();
  
    //Ground
    noStroke();
    fill(110, 90, 65);
    rect(0, 525, width, 75 );
  
    // suns
    fill(250, 242, 86);
    ellipse(500, 400, 60);
  
    fill(255, 250, 140);
    ellipse(370, 340, 60);
  }

  function draw() {
      push();
      clear();
      scenery();
      pop();         

      tieFighter(x, y+50, s);


      if (state === "start") {
        startScreen();
      } else if (state === "game") {
        gameScreen();
      } else if (state === "win") {
        winScreen();
      }else if (state === "lose") {
        loseScreen();
      }
  }
  
// change from the start screen to the game screen
  function keyPressed() { 
        if (state === "start") {
          state = "game";
      }   
    }

// Start screen with info about the game
  function startScreen() {
    // background fade color
    push();
    noStroke();
    fill (0, 0, 0 , 100);
    rect(0, 0, width, height);
    pop();

    fill(255, 255, 255); 
    textSize(48);
    textStyle(BOLD);
    text("TIE LANDER", 300, 200);

    textSize(24);
    textStyle(NORMAL);
    text("Press Any key to Start", 300, 290);

    textSize(14);
    textStyle(NORMAL);
    text("Use the arrows to maneuver the", 300, 240);
    text("tie-fighter to make a safe landing", 300, 255);

    // Makes the tiefigher move 
    x = x + 5;
    if (x > 615){
      x = -15;
    }
  } 
  
 
// Game screen the actual game you play 
  function gameScreen() {
    scenery();

    tieFighter(x, y+50, s);
    y = y + gravity;
    gravity = gravity + acceleration;

    // Game controlls (from: https://p5js.org/reference/#/p5/keyIsDown)
    if (keyIsDown(LEFT_ARROW)) { x -= 3; 
    }

    if (keyIsDown(RIGHT_ARROW)) {
      x += 3;
    }

    if (keyIsDown(UP_ARROW)) {
      gravity = gravity - 0.5;
  }

  // Sets the "right" gravity/speed and where you land to either win or lose 
    if (y >= 500 && gravity > 4) {
      state = "lose";
      gravity = 1;
      acceleration = 0.2;
    } else if (y >= 500 && gravity < 4) {
      state = "win";
      gravity = 1;
      acceleration = 0.2;
    }
  }



// If you landed successfully this screen shows
  function winScreen() {
    push();
    noStroke();
    fill (0, 0, 0 , 100);
    rect(0, 0, width, height);
    pop();
  
    fill(0, 255, 0); 
    textSize(48);
    textStyle(BOLD);
    text("YOU WON", 300, 200);

    textSize(24);
    textStyle(NORMAL);
    text("Press the Spacebar to Restart", 300, 290);

    textSize(14);
    textStyle(NORMAL);
    text("You Landed the Tie Fighter safely", 300, 240);


// Come back to start screen when pressing the space button
    if (keyIsDown(32)) {
      state = "start";
      y = 0;
    }
  }

// When landing too fast, this screen shows
  function loseScreen() {
    push();
    noStroke();
    fill (0, 0, 0 , 100);
    rect(0, 0, width, height);
    pop();
  
    fill(255, 10, 0); 
    textSize(48);
    textStyle(BOLD);
    text("YOU LOSE", 300, 200);

    textSize(24);
    textStyle(NORMAL);
    text("Press the Spacebar to Restart", 300, 290);

    textSize(14);
    textStyle(NORMAL);
    text("You crashed the Tie Fighter", 300, 240);

    // Come back to start screen when pressing the space button
    if (keyIsDown(32)) {
      state = "start";
      y = 0;
    }
  }
  
  



