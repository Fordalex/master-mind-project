/* on load */

$(document).ready(function () {
    $('#enterNameModal').modal('show');
    loop();
    $('#player-coins').html(coins);
});

/* drop down */

$('.expand-button').on('click', function () {
    $(this).next('div').slideToggle('slow');
    console.log('press')
})

/* players name */

var playerName = 'Player';

$('#firstModal').on('click', function () {
    playerName = $('#inputPlayerName').val();
    $('#player-name-stats').text(playerName + "'s");
});

/* variables */

var round = 1;
var holeSelect = 1;
var gameStarted = false;
var fullGames = 0;
var coins = 0;

const redCounter = '<img src="assets/images/red-counter.png" class="counter">';
const greenCounter = '<img src="assets/images/green-counter.png" class="counter">';
const yellowCounter = '<img src="assets/images/yellow-counter.png" class="counter">';
const blueCounter = '<img src="assets/images/blue-counter.png" class="counter">';
const orangeCounter = '<img src="assets/images/orange-counter.png" class="counter">';
const whiteCounter = '<img src="assets/images/white-counter.png" class="counter">';
const holeCounter = '';

var playerLocationOne = 0;
var playerLocationTwo = 0;
var playerLocationThree = 0;
var playerLocationFour = 0;

var masterLocationOne = 0;
var masterLocationTwo = 0;
var masterLocationThree = 0;
var masterLocationFour = 0;

/* difficulty setting */

$('#easy').on('click', function() {
    difficultySetting = 'easy';
});
$('#medium').on('click', function() {
    difficultySetting = 'medium';
});
$('#hard').on('click', function() {
    difficultySetting = 'hard';
});

var difficultySetting = '';

/* backgrounds */

const spaceBackground = "url('../images/space-background.png')";

/* audio */

var startSound = new Audio();
startSound.src = "assets/audio/classic--game-start.wav";

var counterDown = new Audio();
counterDown.src = "assets/audio/classic--counter-down.wav";
var counterDownTwo = new Audio();
counterDownTwo.src = "assets/audio/classic--counter-down2.wav";
var counterDownThree = new Audio();
counterDownThree.src = "assets/audio/classic--counter-down3.wav";

var removeCounterSound = new Audio();
removeCounterSound.src = "assets/audio/classic--remove.wav";

var gameWon = new Audio();
gameWon.src = "assets/audio/classic--game-won.wav";

var gameOverSound = new Audio();
gameOverSound.src = "assets/audio/classic--game-lose.wav";

var lineCheckedSound = new Audio();
lineCheckedSound.src = "assets/audio/classic--line-checked.wav";

/* Functions */

/* to start the game */

function start() {
    fullGames++;
    $('.counter').remove();
    $('.marker-peg').remove();
    round = 1;
    holeSelect = 1;
    selectedHole();
    startSound.play();
    $('#master-cover').removeClass('d-none');
    $('#master-cover').addClass('fade-in');
    $('#ready-button').remove();
    setTimeout(function () {
        generateCounters();
        gameStarted = true;
    }, 1500);
}

/* generated counters animation before the game starts */

function loop() {
    if (gameStarted == false) {
        setTimeout(function () {
            if (gameStarted == false) {
                loop();
                generateCounters();
            }
        }, 1000);
    }
};

/* computer generated counters */

function generateCounters() {
    masterLocationOne = Math.floor(Math.random() * 7);
    masterLocationTwo = Math.floor(Math.random() * 7);
    masterLocationThree = Math.floor(Math.random() * 7);
    masterLocationFour = Math.floor(Math.random() * 7);
    if (masterLocationOne == 1) {
        $('#master-one').html(redCounter);
    } else if (masterLocationOne == 2) {
        $('#master-one').html(greenCounter);
    } else if (masterLocationOne == 3) {
        $('#master-one').html(yellowCounter);
    } else if (masterLocationOne == 4) {
        $('#master-one').html(blueCounter);
    } else if (masterLocationOne == 5) {
        $('#master-one').html(orangeCounter);
    } else if (masterLocationOne == 6) {
        $('#master-one').html(whiteCounter);
    } else {
        $('#master-one').html('');
    }
    if (masterLocationTwo == 1) {
        $('#master-two').html(redCounter);
    } else if (masterLocationTwo == 2) {
        $('#master-two').html(greenCounter);
    } else if (masterLocationTwo == 3) {
        $('#master-two').html(yellowCounter);
    } else if (masterLocationTwo == 4) {
        $('#master-two').html(blueCounter);
    } else if (masterLocationTwo == 5) {
        $('#master-two').html(orangeCounter);
    } else if (masterLocationTwo == 6) {
        $('#master-two').html(whiteCounter);
    } else {
        $('#master-two').html('');
    }
    if (masterLocationThree == 1) {
        $('#master-three').html(redCounter);
    } else if (masterLocationThree == 2) {
        $('#master-three').html(greenCounter);
    } else if (masterLocationThree == 3) {
        $('#master-three').html(yellowCounter);
    } else if (masterLocationThree == 4) {
        $('#master-three').html(blueCounter);
    } else if (masterLocationThree == 5) {
        $('#master-three').html(orangeCounter);
    } else if (masterLocationThree == 6) {
        $('#master-three').html(whiteCounter);
    } else {
        $('#master-three').html('');
    }
    if (masterLocationFour == 1) {
        $('#master-four').html(redCounter);
    } else if (masterLocationFour == 2) {
        $('#master-four').html(greenCounter);
    } else if (masterLocationFour == 3) {
        $('#master-four').html(yellowCounter);
    } else if (masterLocationFour == 4) {
        $('#master-four').html(blueCounter);
    } else if (masterLocationFour == 5) {
        $('#master-four').html(orangeCounter);
    } else if (masterLocationFour == 6) {
        $('#master-four').html(whiteCounter);
    } else {
        $('#master-four').html('');
    }
    console.log(masterLocationOne, masterLocationTwo, masterLocationThree, masterLocationFour)
};

function chooseColour(chosenColour, colourNum) {
    if (gameStarted == true) {
        var countHoleSelector = '#r-' + round;
        counterDownSound();
        $('.hole-selector').remove();

        if (holeSelect == 1) {
            $(countHoleSelector + '-c-one').append(chosenColour);
            $(countHoleSelector + '-c-two').append('<i class="fas fa-long-arrow-alt-down hole-selector"></i>');
            holeSelect++;
            playerLocationOne = colourNum;
        } else if (holeSelect == 2) {
            $(countHoleSelector + '-c-two').html(chosenColour);
            $(countHoleSelector + '-c-three').append('<i class="fas fa-long-arrow-alt-down hole-selector"></i>');
            holeSelect++;
            playerLocationTwo = colourNum;
        } else if (holeSelect == 3) {
            $(countHoleSelector + '-c-three').html(chosenColour);
            $(countHoleSelector + '-c-four').append('<i class="fas fa-long-arrow-alt-down hole-selector"></i>');
            holeSelect++;
            playerLocationThree = colourNum;
        } else if (holeSelect == 4) {
            $(countHoleSelector + '-c-four').html(chosenColour);
            $('#check-round-arrow').append('<i class="fas fa-long-arrow-alt-right hole-selector hole-selector-check"></i>');
            holeSelect++;
            playerLocationFour = colourNum;
        };
        selectedHole();
        console.log(playerLocationOne, playerLocationTwo, playerLocationThree, playerLocationFour, countHoleSelector);
    }
};

/* sound randomised for when the player places a counter */

function counterDownSound() {
    var pick = Math.floor(Math.random() * 3);
    console.log('pick ', pick)
    if (pick == 0) {
        counterDown.play();
    } else if (pick == 1) {
        counterDownTwo.play();
    } else if (pick == 2) {
        counterDownThree.play();
    };
}

/* A arrow showing the user where the next counter will go */

function selectedHole() {
    var countHoleSelector = '#r-' + round;
    $('.hole-selector').remove();
    if (holeSelect == 1) {
        $(countHoleSelector + '-c-one').append('<i class="fas fa-long-arrow-alt-down hole-selector"></i>');
    } else if (holeSelect == 2) {
        $(countHoleSelector + '-c-two').append('<i class="fas fa-long-arrow-alt-down hole-selector"></i>');
    } else if (holeSelect == 3) {
        $(countHoleSelector + '-c-three').append('<i class="fas fa-long-arrow-alt-down hole-selector"></i>');
    } else if (holeSelect == 4) {
        $(countHoleSelector + '-c-four').append('<i class="fas fa-long-arrow-alt-down hole-selector"></i>');
    } else if (holeSelect == 5) {
        $('#check-round-arrow').append('<i class="fas fa-long-arrow-alt-right hole-selector hole-selector-check"></i>');
    };
    console.log(holeSelect);
};

function removeCounter() {
    if (gameStarted == true) {
        var countHoleSelector = '#r-' + round;
        removeCounterSound.play();
        if (holeSelect == 2) {
            $(countHoleSelector + '-c-one').html('');
            holeSelect--;
            selectedHole();

        } else if (holeSelect == 3) {
            $(countHoleSelector + '-c-two').html('');
            holeSelect--;
            selectedHole();

        } else if (holeSelect == 4) {
            $(countHoleSelector + '-c-three').html('');
            holeSelect--;
            selectedHole();

        } else if (holeSelect == 5) {
            $(countHoleSelector + '-c-four').html('');
            holeSelect--;
            selectedHole();

        }
    }
};

function checkCounters() {
    if (gameStarted == true) {
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

        lineCheckedSound.play();

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

        if (masterLocationOne == playerLocationOne && masterLocationTwo == playerLocationTwo && masterLocationThree == playerLocationThree && masterLocationFour == playerLocationFour) {
            levelComplete();
        };

        if (round == 10) {
            gameOverSound.play();
            setTimeout(function () {
                $('#player-name-loser').text(playerName);
                console.log(playerName);
                $('#loserModal').modal('show');
            }, 200);

        }

        round++;
        holeSelect = 1;
        $('#round-counter').html(round);
        playerLocationOne = 0;
        playerLocationTwo = 0;
        playerLocationThree = 0;
        playerLocationFour = 0;
        selectedHole();
    }
};

function levelComplete() {
    if (difficultySetting == 'easy') {
        difficultyBonus = 50;
    } else if (difficultySetting == 'medium') {
        difficultyBonus = 100;
    } else if (difficultySetting == 'hard') {
        difficultyBonus = 150;
    };
    console.log(difficultySetting, difficultyBonus);
    var difficultyBonus 
    var roundCoinBonus = (10 - round + 1) * 10;
    var totalRoundCoins = 50 + roundCoinBonus + difficultyBonus;
     /* adding stats */
     $('#stats-table').append(`
     <tr>
     <th>Round ${fullGames}</th>
     <td>${round}</td>
     <td>0</td>
     <td>${totalRoundCoins}</td>
     </tr>
     `);

    $('#attempts-round-' + fullGames).text(round);
    $('#attempts-round').html(round);
    $('#master-cover').removeClass('fade-in');
    $('#master-cover').addClass('d-none');
    $('.hole-selector').remove();
    gameWon.play();
    gameStarted = false;

    /* adding coins */
   
    for (i = 0; i < totalRoundCoins; i++) {
        coins++;
    }
    $('#round-coin-bonus').html(roundCoinBonus);
    $('#total-coins-round').html(totalRoundCoins);
    $('#player-coins').html(coins);
    $('#difficulty-bonus').html(difficultyBonus);

    /* winner modal */

    setTimeout(function () {
        $('.hole-selector').remove();
        $('#player-name-winner').text(playerName);
        $('#winnerModal').modal('show');
    }, 200);

};