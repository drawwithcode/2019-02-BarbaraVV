function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  inizio = 0;
  vel = 0.03;
  maxDimen = 20;
  numRighe = 70;
  numColonne = 40;
  numGiri = 2;

}

function draw() {
  background('black');
  inizio = frameCount * vel;

  for(var giri = 0; giri < numGiri; giri += 1) {
      var giriInizio = inizio + map(giri, 0, numGiri, 0, TWO_PI);

  for(var col = 0; col < numColonne; col += 1) {
      var colOffset = map(col, 0, numColonne, 0, TWO_PI);
      var x = map(col, 0, numColonne, 50, width - 50);

  for(var rig = 0; rig < numRighe; rig += 10) {
      var y = 90 + rig * 10 + sin(giriInizio + colOffset) * 50;
      var dimOffset = (cos(giriInizio - (rig / numRighe) + colOffset) + 1.1) * 0.5;
      var dimen = dimOffset * maxDimen;

      var colorList = ['CornflowerBlue', 'DarkOrchid', 'DarkSeaGreen', 'DeepPink'];
      var index = Math.round(random() * (colorList.length - 1));
      fill(color(colorList[index]));
      ellipse(x, y, dimen, dimen);

      }
    }
  }

}
