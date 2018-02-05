var blueCrystal = 0;
var greenCrystal = 0;
var blueDiamond = 0;
var redDiamond = 0;

var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;

var getRandom = function(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var startGame = function() {
  currentScore = 0;
  targetScore = getRandom(19, 120);

  blueCrystal = getRandom(1, 12);
  greenCrystal = getRandom(1, 12);
  blueDiamond = getRandom(1, 12);
  redDiamond = getRandom(1, 12);

  $("#playerScore").html(currentScore);
  $("#score").html(targetScore);

  console.log("Target Score: " + targetScore);
  console.log("Blue Crystal: " + blueCrystal);
  console.log("Green Crystal: " + greenCrystal);
  console.log("Blue Diamond: " + blueDiamond);
  console.log("Red Diamond: " + redDiamond);
};

var win = function() {
  if (currentScore > targetScore) {
    alert("Sorry. You lost!");
    console.log("You Lost");
    lossCount++;
    $("#loss-count").html(lossCount);
    startGame();
  }

  else if (currentScore === targetScore) {
    alert("Congratulations! You Won!");
    console.log("You Won!");
    winCount++;
    $("#win-count").html(winCount);
    startGame();
  }

};

var addValues = function(clickedCrystals) {
  currentScore += clickedCrystals;

  $("#playerScore").html(currentScore);

  win();

  console.log("PlayerScore: " + currentScore);
};

  startGame();

  $("#blueCrystal").click(function() {
    addValues(blueCrystal);
  });
  $("#greenCrystal").click(function() {
    addValues(greenCrystal);
  });
  $("#blueDiamond").click(function() {
    addValues(blueDiamond);
  });
  $("#redDiamond").click(function() {
    addValues(redDiamond);
  });
