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
        $('#one-one').html(chosenColour);
        holeSelect++;
        playerLocationOne = colourNum;
    } else if (round == 1 && holeSelect == 2) {
        $('#one-two').html(chosenColour);
        holeSelect++;
        playerLocationTwo = colourNum;
    } else if (round == 1 && holeSelect == 3) {
        $('#one-three').html(chosenColour);
        holeSelect++;
        playerLocationThree = colourNum;
    } else if (round == 1 && holeSelect == 4) {
        $('#one-four').html(chosenColour);
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
        console.log('one-black');
    } else if (masterLocationOne == playerLocationTwo || masterLocationOne == playerLocationThree || masterLocationOne == playerLocationFour) {
        console.log('one-white');
    }
    if (masterLocationTwo == playerLocationTwo) {
        console.log('two-black');
    } else if (masterLocationTwo == playerLocationOne || masterLocationTwo == playerLocationTwo || masterLocationTwo == playerLocationThree) {
        console.log('two-white');
    }
    if (masterLocationThree == playerLocationThree) {
        console.log('three-black');
    } else if (masterLocationThree == playerLocationOne || masterLocationThree == playerLocationTwo || masterLocationThree == playerLocationFour) {
        console.log('three-white');
    }
    if (masterLocationFour == playerLocationFour) {
        console.log('four-black');
    } else if (masterLocationFour == playerLocationOne || masterLocationFour == playerLocationTwo || masterLocationFour == playerLocationThree) {
        console.log('four-white');
    }
};

