$(document).ready(function () {
    $('#enterNameModal').modal({
        backdrop: 'static',
        keyboard: false
    });
    loop();
    $('.expand-container').hide();
    $('#player-coins').html(0);
});

/* drop down */

$('.expand-button').on('click', function () {
    $(this).next('div').slideToggle('slow');
    console.log('press')
})

/* entry modal */

$('.difficuly-select-entry').on('click', function () {
    $('#close-start-modal').html(`<Button type="submit" class="btn btn-success" onclick="addName()" data-dismiss="modal">Okay</Button>`);
    $('#enter-name-message').html('<p class="text-success">Thank you, Enjoy!</p>');
});

/* players name */

var playerName = 'Player';

function addName() {
    playerName = $('#inputPlayerName').val();
    $('#player-name-stats').text(playerName + "'s");
    if (playerName == 'cheat') {
        for (i = 0; i < 8000; i++) {
            coins++;
        }
        $('#player-coins').html(coins);
        console.log('coins')
    }
};

/* variables */

var round = 1;
var holeSelect = 1;
var gameStarted = false;
var fullGames = 0;
var coins = 0;

var playerLocationOne = 0;
var playerLocationTwo = 0;
var playerLocationThree = 0;
var playerLocationFour = 0;

var masterLocationOne = 0;
var masterLocationTwo = 0;
var masterLocationThree = 0;
var masterLocationFour = 0;

var winnerBoolean = false;

/* difficulty setting */

$('.easy-difficulty').on('click', function () {
    $('.not-in-use').remove();
    difficultySetting = 'easy';
    difficultyStats = 'E';
    $('.easy-counter-selector-container').append('<i class="fas fa-ban not-in-use"></i>');
    $('.medium-counter-selector-container').append('<i class="fas fa-ban not-in-use"></i>');
});
$('.medium-difficulty').on('click', function () {
    $('.not-in-use').remove();
    difficultySetting = 'medium';
    difficultyStats = 'M';
    $('.medium-counter-selector-container').append('<i class="fas fa-ban not-in-use"></i>');
});
$('.hard-difficulty').on('click', function () {
    $('.not-in-use').remove();
    difficultySetting = 'hard';
    difficultyStats = 'H';
});

var difficultySetting = '';
var difficultyStats = '';

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

/* counter type  */

var redCounter = '<img src="assets/images/red-counter.png" class="counter">';
var greenCounter = '<img src="assets/images/green-counter.png" class="counter">';
var yellowCounter = '<img src="assets/images/yellow-counter.png" class="counter">';
var blueCounter = '<img src="assets/images/blue-counter.png" class="counter">';
var orangeCounter = '<img src="assets/images/orange-counter.png" class="counter">';
var whiteCounter = '<img src="assets/images/white-counter.png" class="counter">';
var holeCounter = '';

$('#basic-counter-inventory-select').on('click', function () {
    if (gameStarted == false) {
        redCounter = '<div class="basic-red-counter basic-counter"></div>';
        greenCounter = '<div class="basic-green-counter basic-counter"></div>';
        yellowCounter = '<div class="basic-yellow-counter basic-counter"></div>';
        blueCounter = '<div class="basic-blue-counter basic-counter"></div>';
        orangeCounter = '<div class="basic-orange-counter basic-counter"></div>';
        whiteCounter = '<div class="basic-white-counter basic-counter"></div>';
    }
});

$('#classic-counter-inventory-select').on('click', function () {
    if (gameStarted == false) {
        redCounter = '<img src="assets/images/red-counter.png" class="counter">';
        greenCounter = '<img src="assets/images/green-counter.png" class="counter">';
        yellowCounter = '<img src="assets/images/yellow-counter.png" class="counter">';
        blueCounter = '<img src="assets/images/blue-counter.png" class="counter">';
        orangeCounter = '<img src="assets/images/orange-counter.png" class="counter">';
        whiteCounter = '<img src="assets/images/white-counter.png" class="counter">';
    }
});

/* counter container selected */

$('.counters-unlocked').on('click', function () {
    $('.counters-unlocked').removeClass('inventory-selected');
    $(this).addClass('inventory-selected');
});

/* buying counters */

/* buying backgrounds */

spaceBackgroundPurchased = false;

$('#space-background-purchase').on('click', function () {
    if (coins >= 200 && spaceBackgroundPurchased == false) {
        $('body').removeClass('pink-background');
        $('body').removeClass('ice-background');
        $('body').addClass('space-background');
        for (i = 0; i < 200; i++) {
            coins--;
        };
        $('#player-coins').html(coins);
        spaceBackgroundPurchased = true;
    }
});

pinkBackgroundPurchased = false;

$('#pink-background-purchase').on('click', function () {
    if (coins >= 300 && pinkBackgroundPurchased == false) {
        $('body').removeClass('ice-background');
        $('body').removeClass('space-background');
        $('body').addClass('pink-background');
        $('.theme').addClass('pink-theme');
        $('.theme').removeClass('classic-theme');
        $('.inventory-theme').addClass('inventory-background-pink-theme');
        $('.inventory-theme').removeClass('inventory-background-classic-theme');
        $('#player-name-stats').addClass('pink-theme');
        $('#player-name-stats').removeClass('colour-secondary');
        $('#select-pink-theme').addClass('pink-background-container');
        $('#select-pink-theme').children().remove();
        theme = 'pink-theme'
        for (i = 0; i < 300; i++) {
            coins--;
        };
        $('#player-coins').html(coins);
        pinkBackgroundPurchased = true;
    }
});

iceBackgroundPurchased = false;

$('#ice-background-purchase').on('click', function () {
    if (coins >= 400 && iceBackgroundPurchased == false) {
        $('body').removeClass('space-background');
        $('body').removeClass('pink-background');
        $('body').addClass('ice-background');
        for (i = 0; i < 400; i++) {
            coins--;
        };
        $('#player-coins').html(coins);
        iceBackgroundPurchased = true;
    }
});

/* changing theme */

var theme = 'classic-theme'

$('#select-classic-theme').on('click', function () {
    $('.theme').removeClass('pink-theme');
    $('.theme').addClass('classic-theme');
    $('body').removeClass('pink-background');
    $('body').css('background-color', 'rgb(170, 185, 200)');
});

$('#select-pink-theme').on('click', function () {
    if (pinkBackgroundPurchased == true) {
        $('.theme').removeClass('classic-theme');
        $('.theme').addClass('pink-theme');
        $('body').addClass('pink-background');
    }
});







/* Functions */

/* to start the game */

function start() {
    timerSec = 0;
    timerMin = 0;
    $('#timer-min').html(timerMin);
    $('#timer-sec').html(timerSec);
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
        timer = true;
        timerFunction();
        winnerBoolean = false;
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
        }, 250);
    }
};

/* computer generated counters */

function generateCounters() {
    if (difficultySetting == 'hard') {
        masterLocationOne = Math.floor(Math.random() * 7);
        masterLocationTwo = Math.floor(Math.random() * 7);
        masterLocationThree = Math.floor(Math.random() * 7);
        masterLocationFour = Math.floor(Math.random() * 7);
    } else if (difficultySetting == 'medium') {
        masterLocationOne = Math.floor(Math.random() * 5);
        masterLocationTwo = Math.floor(Math.random() * 5);
        masterLocationThree = Math.floor(Math.random() * 5);
        masterLocationFour = Math.floor(Math.random() * 5);
    } else if (difficultySetting == 'easy') {
        masterLocationOne = Math.floor(Math.random() * 3);
        masterLocationTwo = Math.floor(Math.random() * 3);
        masterLocationThree = Math.floor(Math.random() * 3);
        masterLocationFour = Math.floor(Math.random() * 3);
    }

    if (masterLocationOne == 0) {
        $('#master-one').html(redCounter);
    } else if (masterLocationOne == 1) {
        $('#master-one').html(greenCounter);
    } else if (masterLocationOne == 2) {
        $('#master-one').html(yellowCounter);
    } else if (masterLocationOne == 3) {
        $('#master-one').html(blueCounter);
    } else if (masterLocationOne == 4) {
        $('#master-one').html(orangeCounter);
    } else if (masterLocationOne == 5) {
        $('#master-one').html(whiteCounter);
    } else {
        $('#master-one').html('');
    }

    if (masterLocationTwo == 0) {
        $('#master-two').html(redCounter);
    } else if (masterLocationTwo == 1) {
        $('#master-two').html(greenCounter);
    } else if (masterLocationTwo == 2) {
        $('#master-two').html(yellowCounter);
    } else if (masterLocationTwo == 3) {
        $('#master-two').html(blueCounter);
    } else if (masterLocationTwo == 4) {
        $('#master-two').html(orangeCounter);
    } else if (masterLocationTwo == 5) {
        $('#master-two').html(whiteCounter);
    } else {
        $('#master-two').html('');
    }


    if (masterLocationThree == 0) {
        $('#master-three').html(redCounter);
    } else if (masterLocationThree == 1) {
        $('#master-three').html(greenCounter);
    } else if (masterLocationThree == 2) {
        $('#master-three').html(yellowCounter);
    } else if (masterLocationThree == 3) {
        $('#master-three').html(blueCounter);
    } else if (masterLocationThree == 4) {
        $('#master-three').html(orangeCounter);
    } else if (masterLocationThree == 5) {
        $('#master-three').html(whiteCounter);
    } else {
        $('#master-three').html('');
    }


    if (masterLocationFour == 0) {
        $('#master-four').html(redCounter);
    } else if (masterLocationFour == 1) {
        $('#master-four').html(greenCounter);
    } else if (masterLocationFour == 2) {
        $('#master-four').html(yellowCounter);
    } else if (masterLocationFour == 3) {
        $('#master-four').html(blueCounter);
    } else if (masterLocationFour == 4) {
        $('#master-four').html(orangeCounter);
    } else if (masterLocationFour == 5) {
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
    if (gameStarted == true && holeSelect == 5) {
        var blackPeg = '<img src="assets/images/black-peg.png" class="marker-peg">';
        var whitePeg = '<img src="assets/images/white-peg.png" class="marker-peg">';

        var countHoleSelector = '#peg-container-' + round;
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
            $(countHoleSelector).append(blackPeg);
            playerLocationOneChecked = true;
            masterLocationOneChecked = true;

        };
        if (masterLocationTwo == playerLocationTwo) {
            $(countHoleSelector).append(blackPeg);
            playerLocationTwoChecked = true;
            masterLocationTwoChecked = true;

        };
        if (masterLocationThree == playerLocationThree) {
            $(countHoleSelector).append(blackPeg);
            playerLocationThreeChecked = true;
            masterLocationThreeChecked = true;

        };
        if (masterLocationFour == playerLocationFour) {
            $(countHoleSelector).append(blackPeg);
            playerLocationFourChecked = true;
            masterLocationFourChecked = true;
        };

        /* check if the correct colour in the wrong loction  */

        if (masterLocationOneChecked == false) {
            if (masterLocationOne == playerLocationTwo && playerLocationTwoChecked == false) {
                $(countHoleSelector).append(whitePeg);
                playerLocationTwoChecked = true;
            } else if (masterLocationOne == playerLocationThree && playerLocationThreeChecked == false) {
                $(countHoleSelector).append(whitePeg);
                playerLocationThreeChecked = true;
            } else if (masterLocationOne == playerLocationFour && playerLocationFourChecked == false) {
                $(countHoleSelector).append(whitePeg);
                playerLocationFourChecked = true;
            }
        };

        if (masterLocationTwoChecked == false) {
            if (masterLocationTwo == playerLocationOne && playerLocationOneChecked == false) {
                $(countHoleSelector).append(whitePeg);
                playerLocationOneChecked = true;
            } else if (masterLocationTwo == playerLocationThree && playerLocationThreeChecked == false) {
                $(countHoleSelector).append(whitePeg);
                playerLocationThreeChecked = true;
            } else if (masterLocationTwo == playerLocationFour && playerLocationFourChecked == false) {
                $(countHoleSelector).append(whitePeg);
                playerLocationFourChecked = true;
            }
        };

        if (masterLocationThreeChecked == false) {
            if (masterLocationThree == playerLocationOne && playerLocationOneChecked == false) {
                $(countHoleSelector).append(whitePeg);
                playerLocationOneChecked = true;
            } else if (masterLocationThree == playerLocationTwo && playerLocationTwoChecked == false) {
                $(countHoleSelector).append(whitePeg);
                playerLocationTwoChecked = true;
            } else if (masterLocationThree == playerLocationFour && playerLocationFourChecked == false) {
                $(countHoleSelector).append(whitePeg);
                playerLocationFourChecked = true;
            }
        };

        if (masterLocationFourChecked == false) {
            if (masterLocationFour == playerLocationOne && playerLocationOneChecked == false) {
                $(countHoleSelector).append(whitePeg);
                playerLocationOneChecked = true;
            } else if (masterLocationFour == playerLocationTwo && playerLocationTwoChecked == false) {
                $(countHoleSelector).append(whitePeg);
                playerLocationTwoChecked = true;
            } else if (masterLocationFour == playerLocationThree && playerLocationThreeChecked == false) {
                $(countHoleSelector).append(whitePeg);
                playerLocationThreeChecked = true;
            }
        };

        if (masterLocationOne == playerLocationOne && masterLocationTwo == playerLocationTwo && masterLocationThree == playerLocationThree && masterLocationFour == playerLocationFour) {
            levelComplete();
            winnerBoolean = true;
        };

        if (round == 10 && winnerBoolean == false) {
            gameOverSound.play();
            for (i = 0; i < 50; i++) {
                coins--;
            };
            $('#player-coins').html(coins);
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
    $('#round-counter').html(1);
    $('.counter').remove();
    $('.marker-peg').remove();
    timer = false;
    if (difficultySetting == 'easy') {
        difficultyBonus = 50;
    } else if (difficultySetting == 'medium') {
        difficultyBonus = 100;
    } else if (difficultySetting == 'hard') {
        difficultyBonus = 150;
    };
    if (timerMin < 1) {
        timerBonus = 50;
    } else if (timerMin < 2) {
        timerBonus = 35;
    } else if (timerMin < 3) {
        timerBonus = 15;
    } else if (timerMin < 4) {
        timerBonus = 0;
    }
    console.log(difficultySetting, difficultyBonus);
    var timerBonus;
    var difficultyBonus
    var roundCoinBonus = (10 - round + 1) * 10;
    var totalRoundCoins = 50 + roundCoinBonus + difficultyBonus + timerBonus;
    /* adding stats */
    $('#stats-table').append(`
     <tr>
     <th class="theme ${theme}">${fullGames}</th>
     <td>${round}</td>
     <td>${timerMin} : ${timerSec}</td>
     <td>${totalRoundCoins}</td>
     <td class="${difficultySetting}">${difficultyStats}</td>
     </tr>
     `);

    $('#attempts-round-' + fullGames).text(round);
    $('#attempts-round').html(round);
    $('#master-cover').removeClass('fade-in');
    $('#master-cover').addClass('d-none');
    $('.hole-selector').remove();
    gameWon.play();
    gameStarted = false;

    /* putting play button back */

    $('#ready-start-button-container').html('<button onclick="start()" id="ready-button">Play!<i class="mx-2 fas fa-play"></i></button>');

    /* adding coins */

    for (i = 0; i < totalRoundCoins; i++) {
        coins++;
    }

    $('#round-coin-bonus').html(roundCoinBonus);
    $('#total-coins-round').html(totalRoundCoins);
    $('#player-coins').html(coins);
    $('#difficulty-bonus').html(difficultyBonus);
    $('#timer-bonus').html(timerBonus);

    /* winner modal */

    setTimeout(function () {
        $('.hole-selector').remove();
        $('#player-name-winner').text(playerName);
        $('#time-taken-min').html(timerMin);
        $('#time-taken-sec').html(timerSec);
        $('#winnerModal').modal('show');
        $('#timer-min').html(0);
        $('#timer-sec').html(0);
    }, 200);

};

/* Timer */

var timerSec = 0;
var timerMin = 0;
var timer = false;

function timerFunction() {
    console.log('timer')
    if (timer == true) {
        setTimeout(function () {
            timerSec++;
            $('#timer-min').html(timerMin);
            $('#timer-sec').html(timerSec);
            if (timerSec == 60) {
                timerSec = 0;
                timerMin++;
            }
            timerFunction();
        }, 1000);
    }
}

