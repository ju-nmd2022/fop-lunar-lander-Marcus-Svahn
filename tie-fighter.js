/*
    This is the Tie Fighter
*/

background(255,255,255);

let x = 200;
let y = 200;
let s = 0.2;


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

tieFighter(50, 300, 0.2);

let tieRotation = 0;

function draw() {
    clear();
    push();
    translate(150, 0);
    rotate(tieRotation);
    tieFighter(x, y, s);
    pop();

    tieRotation = tieRotation + 0;
    s = s + 0;
    x = x + 1;
}