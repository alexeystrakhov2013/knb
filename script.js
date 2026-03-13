const rock = "r";
const scissors = "s";
const paper = "p";
const PcWin = "Pc is win";
const exit = "exit";
let exitState = "start"

let countPlayerWin = 0;
let countPcWin = 0;

const PlayerWin = "Player is win";
let playerChois;

function messageChois(chois) {
    if (chois == rock) {
        return "rock";
    }

    if (chois == scissors) {
        return "scissors";
    }

    if (chois == paper) {
        return "paper";
    }

    return "ooops";
}

function message(playerCh, pcch, win) {
    let playerChMessage = messageChois(playerCh);
    let pcChoiseMessage = messageChois(pcch)
    let message = `Player has ${playerChMessage} and Pc has ${pcChoiseMessage} ${win}!!!!!`;
    return message;
}


function start() {
    exitState = "start"
    while (exitState != exit) {
        playerChois = prompt(`player win = ${countPlayerWin}, PC win ${countPcWin} 
        введите rock(r), scissors(s), paper(p) or (exit)`);

        if (playerChois === null) {
            alert("Игра завершена");
            exitState = exit;
            break;
        }

        let Pchois = [rock, scissors, paper][Math.random() * 3 | 0];



        // ROCk && SCISSORS
        if (playerChois == rock && Pchois == scissors) {
            countPlayerWin++;
            alert(message(rock, scissors, PlayerWin));
        }

        if (playerChois == scissors && Pchois == rock) {
            countPcWin++;
            alert(message(scissors, rock, PcWin));
        }

        // PAPER && ROCK
        if (playerChois == paper && Pchois == rock) {
            countPlayerWin++;
            alert(message(paper, rock, PlayerWin));
        }

        if (playerChois == rock && Pchois == paper) {
            countPcWin++;
            alert(message(rock, paper, PcWin));
        }

        // PAPER && SCISSORS
        if (playerChois == scissors && Pchois == paper) {
            countPlayerWin++;
            alert(message(scissors, paper, PlayerWin));
        }

        if (playerChois == paper && Pchois == scissors) {
            countPcWin++;
            alert(message(paper, scissors, PcWin));
        }

        // draw
        if (playerChois == Pchois) {
            alert(`player and pc has ${playerChois} is draw`)
        }

        //EXIT
        if (playerChois == exit) {
            exitState = exit;
            alert("bay, bay");
            break;
        }
    }
}
