var round = 1;
var holeSelect = 1;

const redCounter = '<img src="assets/images/red-counter.png" class="counter">';
const greenCounter = '<img src="assets/images/green-counter.png" class="counter">';
const yellowCounter = '<img src="assets/images/yellow-counter.png" class="counter">';
const blueCounter = '<img src="assets/images/blue-counter.png" class="counter">';
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


    console.log(masterLocationOne, masterLocationTwo, masterLocationThree, masterLocationFour)
};

function chooseColour(chosenColour, colourNum) {
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
    console.log(playerLocationOne, playerLocationTwo, playerLocationThree, playerLocationFour, countHoleSelector)
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
    var blackPeg = '<img src="assets/images/black-peg.png" class="marker-peg">';
    var whitePeg = '<img src="assets/images/white-peg.png" class="marker-peg">';

    var countHoleSelector = '#r-' + round;
    var playerLocationOneChecked = false;
    var playerLocationTwoChecked = false;
    var playerLocationThreeChecked = false;
    var playerLocationFourChecked = false;

    var masterLocationOneChecked = false;
    var masterLocationTwoChecked = false;
    var masterLocationThreeChecked = false;
    var masterLocationFourChecked = false;

    /* check to see if the colour is correct and in the right location */

    if (masterLocationOne == playerLocationOne) {
        $(countHoleSelector + '-m-one').html(blackPeg);
        playerLocationOneChecked = true;
        masterLocationOneChecked = true;

    };
    if (masterLocationTwo == playerLocationTwo) {
        $(countHoleSelector + '-m-two').html(blackPeg);
        playerLocationTwoChecked = true;
        masterLocationTwoChecked = true;

    };
    if (masterLocationThree == playerLocationThree) {
        $(countHoleSelector + '-m-three').html(blackPeg);
        playerLocationThreeChecked = true;
        masterLocationThreeChecked = true;

    };
    if (masterLocationFour == playerLocationFour) {
        $(countHoleSelector + '-m-four').html(blackPeg);
        playerLocationFourChecked = true;
        masterLocationFourChecked = true;
    };

    /* check if the correct colour in the wrong loction  */

    if (masterLocationOneChecked == false) {
        if (masterLocationOne == playerLocationTwo && playerLocationTwoChecked == false) {
            $(countHoleSelector + '-m-one').html(whitePeg);
            playerLocationTwoChecked = true;
        } else if (masterLocationOne == playerLocationThree && playerLocationThreeChecked == false) {
            $(countHoleSelector + '-m-one').html(whitePeg);
            playerLocationThreeChecked = true;
        } else if (masterLocationOne == playerLocationFour && playerLocationFourChecked == false) {
            $(countHoleSelector + '-m-one').html(whitePeg);
            playerLocationFourChecked = true;
        }
    };

    if (masterLocationTwoChecked == false) {
        if (masterLocationTwo == playerLocationOne && playerLocationOneChecked == false) {
            $(countHoleSelector + '-m-two').html(whitePeg);
            playerLocationOneChecked = true;
        } else if (masterLocationTwo == playerLocationThree && playerLocationThreeChecked == false) {
            $(countHoleSelector + '-m-two').html(whitePeg);
            playerLocationThreeChecked = true;
        } else if (masterLocationTwo == playerLocationFour && playerLocationFourChecked == false) {
            $(countHoleSelector + '-m-two').html(whitePeg);
            playerLocationFourChecked = true;
        }
    };

    if (masterLocationThreeChecked == false) {
        if (masterLocationThree == playerLocationOne && playerLocationOneChecked == false) {
            $(countHoleSelector + '-m-three').html(whitePeg);
            playerLocationOneChecked = true;
        } else if (masterLocationThree == playerLocationTwo && playerLocationTwoChecked == false) {
            $(countHoleSelector + '-m-three').html(whitePeg);
            playerLocationTwoChecked = true;
        } else if (masterLocationThree == playerLocationFour && playerLocationFourChecked == false) {
            $(countHoleSelector + '-m-three').html(whitePeg);
            playerLocationFourChecked = true;
        }
    };

    if (masterLocationFourChecked == false) {
        if (masterLocationFour == playerLocationOne && playerLocationOneChecked == false) {
            $(countHoleSelector + '-m-four').html(whitePeg);
            playerLocationOneChecked = true;
        } else if (masterLocationFour == playerLocationTwo && playerLocationTwoChecked == false) {
            $(countHoleSelector + '-m-four').html(whitePeg);
            playerLocationTwoChecked = true;
        } else if (masterLocationFour == playerLocationThree && playerLocationThreeChecked == false) {
            $(countHoleSelector + '-m-four').html(whitePeg);
            playerLocationThreeChecked = true;
        }
    };

    round++;
    holeSelect = 1;
    $('#round-counter').html(round);
    playerLocationOne = 0;
    playerLocationTwo = 0;
    playerLocationThree = 0;
    playerLocationFour = 0;
};

