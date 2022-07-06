// Player name
var PLAYER1 = "PLAYER 1";
var PLAYER2 = "PLAYER  2";

// Function to change the player name
function editNames() {
    PLAYER1 = prompt("Change PLAYER1 name");
    PLAYER2 = prompt("Change PLAYER2 name");

    document.querySelector("p.PLAYER1").innerHTML = PLAYER1;
    document.querySelector("p.PLAYER2").innerHTML = PLAYER2;
}

// Function to roll the dice
function rollTheDice() {
    setTimeout(function () {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;

        document.querySelector(".img1").setAttribute("src",
            "dice" + randomNumber1 + ".png");

        document.querySelector(".img2").setAttribute("src",
            "dice" + randomNumber2 + ".png");

        if (randomNumber1 === randomNumber2) {
            document.querySelector("h1").innerHTML = "Draw!";
        }

        else if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").innerHTML
                            = (PLAYER1 + " WINS!");
        }

        else {
            document.querySelector("h1").innerHTML
                            = (PLAYER2 + " WINS!");
        }
    }, 2500);
}