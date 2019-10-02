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
    if (playerLocationOne == masterLocationOne)
};

