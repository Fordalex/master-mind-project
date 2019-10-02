var round = 1;
var holeSelect = 1;

const redCounter = '<div class="red-counter"></div>';
const greenCounter = '<div class="green-counter"></div>';
const yellowCounter = '<div class="yellow-counter"></div>';
const blueCounter = '<div class="blue-counter"></div>';
const holeCounter = '<div class="hole-counter"></div>';

var playerLocationOne = 0;
var playerLocationTwo = 0;
var playerLocationThree = 5;
var playerLocationFour = 2;

var masterLocationOne = 0;
var masterLocationTwo = 1;
var masterLocationThree = 0;
var masterLocationFour = 0;

generateCounters();

function generateCounters() {
    $('#master-one').html('');
    $('#master-two').html('');
    $('#master-three').html('');
    $('#master-four').html('');
};

function chooseColour(chosenColour) {
    if (round == 1 && holeSelect == 1) {
        $('#one-one').html(chosenColour);
        holeSelect++;
    } else if (round == 1 && holeSelect == 2) {
        $('#one-two').html(chosenColour);
        holeSelect++;
    } else if (round == 1 && holeSelect == 3) {
        $('#one-three').html(chosenColour);
        holeSelect++;
    } else if (round == 1 && holeSelect == 4) {
        $('#one-four').html(chosenColour);
        holeSelect++;
    }
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
    if (playerLocationOne == masterLocationOne) {
        console.log('one-black');
    } else if (playerLocationOne == masterLocationTwo || playerLocationOne == masterLocationThree || playerLocationOne == masterLocationFour) {
        console.log('one-white');
    }
    if (playerLocationTwo == masterLocationTwo) {
        console.log('two-black');
    } else if (playerLocationTwo == masterLocationOne || playerLocationTwo == masterLocationThree || playerLocationTwo == masterLocationFour) {
        console.log('two-white');
    }
    if (playerLocationThree == masterLocationThree) {
        console.log('three-black');
    } else if (playerLocationThree == masterLocationOne || playerLocationThree == masterLocationTwo || playerLocationThree == masterLocationFour) {
        console.log('three-white');
    }
    if (playerLocationFour == masterLocationFour) {
        console.log('four-black');
    } else if (playerLocationFour == masterLocationTwo || playerLocationFour == masterLocationTwo || playerLocationFour == masterLocationThree) {
        console.log('four-white');
    }





};

