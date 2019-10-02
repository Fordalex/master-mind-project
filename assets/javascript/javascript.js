var round = 1;
var holeSelect = 1;

const redCounter = '<div class="red-counter"></div>';
const greenCounter = '<div class="green-counter"></div>';
const yellowCounter = '<div class="yellow-counter"></div>';
const blueCounter = '<div class="blue-counter"></div>';
const holeCounter = '<div class="hole-counter"></div>';

var playerLocationOne = 0;
var playerLocationTwo = 0;
var playerLocationThree = 0;
var playerLocationFour = 0;

var masterLocationOne = 0;
var masterLocationTwo = 0;
var masterLocationThree = 0;
var masterLocationFour = 0;



generateCounters();

function generateCounters() {
    masterLocationOne = Math.floor(Math.random() * 5);
    masterLocationTwo = Math.floor(Math.random() * 5);
    masterLocationThree = Math.floor(Math.random() * 5);
    masterLocationFour = Math.floor(Math.random() * 5);
    console.log(masterLocationOne,masterLocationTwo,masterLocationThree,masterLocationFour);
};


function chooseColour(chosenColour,colourNum) {
    if (round == 1 && holeSelect == 1) {
        $('#r-one-c-one').html(chosenColour);
        holeSelect++;
        playerLocationOne = colourNum;
    } else if (round == 1 && holeSelect == 2) {
        $('#r-one-c-two').html(chosenColour);
        holeSelect++;
        playerLocationTwo = colourNum;
    } else if (round == 1 && holeSelect == 3) {
        $('#r-one-c-three').html(chosenColour);
        holeSelect++;
        playerLocationThree = colourNum;
    } else if (round == 1 && holeSelect == 4) {
        $('#r-one-c-four').html(chosenColour);
        holeSelect++;
        playerLocationFour = colourNum;
    } else if (round == 2 && holeSelect == 1) {
        $('#r-two-c-one').html(chosenColour);
        holeSelect++;
        playerLocationOne = colourNum;
    } else if (round == 2 && holeSelect == 2) {
        $('#r-two-c-two').html(chosenColour);
        holeSelect++;
        playerLocationTwo = colourNum;
    } else if (round == 2 && holeSelect == 3) {
        $('#r-two-c-three').html(chosenColour);
        holeSelect++;
        playerLocationThree = colourNum;
    } else if (round == 2 && holeSelect == 4) {
        $('#r-two-c-four').html(chosenColour);
        holeSelect++;
        playerLocationFour = colourNum;
    }
    console.log(playerLocationOne,playerLocationTwo,playerLocationThree,playerLocationFour)
};

function removeCounter() {
    if (round == 1 && holeSelect == 2) {
        $('#one-one').html('');
        holeSelect--;
    } else if (round == 1 && holeSelect == 3) {
        $('#one-two').html('');
        holeSelect--;
    } else if (round == 1 && holeSelect == 4) {
        $('#one-three').html('');
        holeSelect--;
    } else if (round == 1 && holeSelect == 5) {
        $('#one-four').html('');
        holeSelect--;
    }
};

function checkCounters() {
    if (masterLocationOne == playerLocationOne) {
        $('#r-one-m-one').html('<div class="black-marker-peg"></div>');
    } else if (masterLocationOne == playerLocationTwo || masterLocationOne == playerLocationThree || masterLocationOne == playerLocationFour) {
        $('#r-one-m-one').html('<div class="white-marker-peg"></div>');
    }
    if (masterLocationTwo == playerLocationTwo) {
        $('#r-one-m-two').html('<div class="black-marker-peg"></div>');
    } else if (masterLocationTwo == playerLocationOne || masterLocationTwo == playerLocationTwo || masterLocationTwo == playerLocationThree) {
        $('#r-one-m-two').html('<div class="white-marker-peg"></div>');
    }
    if (masterLocationThree == playerLocationThree) {
        $('#r-one-m-three').html('<div class="black-marker-peg"></div>');
    } else if (masterLocationThree == playerLocationOne || masterLocationThree == playerLocationTwo || masterLocationThree == playerLocationFour) {
        $('#r-one-m-three').html('<div class="white-marker-peg"></div>');
    }
    if (masterLocationFour == playerLocationFour) {
        $('#r-one-m-four').html('<div class="black-marker-peg"></div>');
    } else if (masterLocationFour == playerLocationOne || masterLocationFour == playerLocationTwo || masterLocationFour == playerLocationThree) {
        $('#r-one-m-four').html('<div class="white-marker-peg"></div>');
    }

    round++;
    holeSelect = 1;
};

