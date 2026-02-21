const rock = "rock";
const scissors = "scissors";
const paper = "paper";
const PcWin = "Pc is win";
const exit = "exit";

let countPlayerWin = 0;
let countPcWin = 0;

const PlayerWin = "Player is win";
let playerChois;

while (playerChois != exit) {
    playerChois = prompt(`player win = ${countPlayerWin}, PC win ${countPcWin} 
        введите rock, scissors, paper (exit)`);

    let Pchois = [rock, scissors, paper][Math.random() * 3 | 0];

    // ROCk && SCISSORS
    if (playerChois == rock && Pchois == scissors) {
        countPlayerWin++;
        alert(`player has ${rock} and Pc has ${scissors} ${PlayerWin}`);
    }

    if (playerChois == scissors && Pchois == rock) {
        countPcWin++;
        alert(`player has ${scissors} and Pc has ${rock} ${PcWin}`);
    }

    // PAPER && ROCK
    if (playerChois == paper && Pchois == rock) {
        countPlayerWin++;
        alert(`player has ${paper} and Pc has ${rock} ${PlayerWin}`);
    }

    if (playerChois == rock && Pchois == paper) {
        countPcWin++;
        alert(`player has ${rock} and Pc has ${paper} ${PcWin}`);
    }

    // PAPER && SCISSORS
    if (playerChois == scissors && Pchois == paper) {
        countPlayerWin++;
        alert(`player has ${scissors} and Pc has ${paper} ${PlayerWin}`);
    }

    if (playerChois == paper && Pchois == scissors) {
        countPcWin++;
        alert(`player has ${paper} and Pc has ${scissors} ${PcWin}`);
    }

    // draw
    if (playerChois == Pchois) {
        alert(`player and pc has ${playerChois} is draw`)
    }

    //EXIT
    if (playerChois == exit){
        alert("bay, bay");
        break;
    }
}

