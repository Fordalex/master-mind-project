var round = 1;
var holeSelect = 1;

const redCounter = '<div class="red-counter"></div>';
const greenCounter = '<div class="green-counter"></div>';
const yellowCounter = '<div class="yellow-counter"></div>';
const blueCounter = '<div class="blue-counter"></div>';
const holeCounter = '';

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
    if (masterLocationOne == 1) {
        $('#master-one').html(redCounter);
    } else if (masterLocationOne == 2) {
        $('#master-one').html(greenCounter);
    } else if (masterLocationOne == 3) {
        $('#master-one').html(yellowCounter);
    } else if (masterLocationOne == 4) {
        $('#master-one').html(blueCounter);
    }
    if (masterLocationTwo == 1) {
        $('#master-two').html(redCounter);
    } else if (masterLocationTwo == 2) {
        $('#master-two').html(greenCounter);
    } else if (masterLocationTwo == 3) {
        $('#master-two').html(yellowCounter);
    } else if (masterLocationTwo == 4) {
        $('#master-two').html(blueCounter);
    }
    if (masterLocationThree == 1) {
        $('#master-three').html(redCounter);
    } else if (masterLocationThree == 2) {
        $('#master-three').html(greenCounter);
    } else if (masterLocationThree == 3) {
        $('#master-three').html(yellowCounter);
    } else if (masterLocationThree == 4) {
        $('#master-three').html(blueCounter);
    }
    if (masterLocationFour == 1) {
        $('#master-four').html(redCounter);
    } else if (masterLocationFour == 2) {
        $('#master-four').html(greenCounter);
    } else if (masterLocationFour == 3) {
        $('#master-four').html(yellowCounter);
    } else if (masterLocationFour == 4) {
        $('#master-four').html(blueCounter);
    }


    console.log(masterLocationOne,masterLocationTwo,masterLocationThree,masterLocationFour)
};

function chooseColour(chosenColour,colourNum) {
    var countHoleSelector = '#r-' + round;
    if (holeSelect == 1) {
        $(countHoleSelector + '-c-one').html(chosenColour);
        holeSelect++;
        playerLocationOne = colourNum;
    } else if (holeSelect == 2) {
        $(countHoleSelector + '-c-two').html(chosenColour);
        holeSelect++;
        playerLocationTwo = colourNum;
    } else if (holeSelect == 3) {
        $(countHoleSelector + '-c-three').html(chosenColour);
        holeSelect++;
        playerLocationThree = colourNum;
    } else if (holeSelect == 4) {
        $(countHoleSelector + '-c-four').html(chosenColour);
        holeSelect++;
        playerLocationFour = colourNum;
    }
    console.log(playerLocationOne,playerLocationTwo,playerLocationThree,playerLocationFour,countHoleSelector)
};

function removeCounter() {
    var countHoleSelector = '#r-' + round;
    if (holeSelect == 2) {
        $(countHoleSelector + '-c-one').html('');
        holeSelect--;
        playerLocationOne = colourNum;
    } else if (holeSelect == 3) {
        $(countHoleSelector + '-c-two').html('');
        holeSelect--;
        playerLocationTwo = colourNum;
    } else if (holeSelect == 4) {
        $(countHoleSelector + '-c-three').html('');
        holeSelect--;
        playerLocationThree = colourNum;
    } else if (holeSelect == 5) {
        $(countHoleSelector + '-c-four').html('');
        holeSelect--;
        playerLocationFour = colourNum;
    }
};

function checkCounters() {
    var countHoleSelector = '#r-' + round;
    if (masterLocationOne == playerLocationOne) {
        $(countHoleSelector + '-m-one').html('<div class="black-marker-peg"></div>');
    } else if (masterLocationOne == playerLocationTwo || masterLocationOne == playerLocationThree || masterLocationOne == playerLocationFour) {
        $(countHoleSelector + '-m-one').html('<div class="white-marker-peg"></div>');
    } else {
        $(countHoleSelector + '-m-one').html('');
    }
    if (masterLocationTwo == playerLocationTwo) {
        $(countHoleSelector + '-m-two').html('<div class="black-marker-peg"></div>');
    } else if (masterLocationTwo == playerLocationOne || masterLocationTwo == playerLocationFour || masterLocationTwo == playerLocationThree) {
        $(countHoleSelector + '-m-two').html('<div class="white-marker-peg"></div>');
    } else {
        $(countHoleSelector + '-m-two').html('');
    }
    if (masterLocationThree == playerLocationThree) {
        $(countHoleSelector + '-m-three').html('<div class="black-marker-peg"></div>');
    } else if (masterLocationThree == playerLocationOne || masterLocationThree == playerLocationTwo || masterLocationThree == playerLocationFour) {
        $(countHoleSelector + '-m-three').html('<div class="white-marker-peg"></div>');
    } else {
        $(countHoleSelector + '-m-three').html('');
    }
    if (masterLocationFour == playerLocationFour) {
        $(countHoleSelector + '-m-four').html('<div class="black-marker-peg"></div>');
    } else if (masterLocationFour == playerLocationOne || masterLocationFour == playerLocationTwo || masterLocationFour == playerLocationThree) {
        $(countHoleSelector + '-m-four').html('<div class="white-marker-peg"></div>');
    } else {
        $(countHoleSelector + '-m-four').html('');
    }
    round++;
    holeSelect = 1;
    $('#round-counter').html(round);
    playerLocationOne = 0;
    playerLocationTwo = 0;
    playerLocationThree = 0;
    playerLocationFour = 0;
};

