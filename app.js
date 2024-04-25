const tiles = document.querySelectorAll('.tile');
const currentPlayer = document.getElementById('currentPlayer');
const currentWinner = document.getElementById('winner');
const winText = document.getElementById('winText');
const drawText = document.getElementById('drawText');
let player = "X";
let plays = 0;
let line = 0;
let lineOne = 0;
let lineTwo = 0;
let lineThree = 0;
let win = false;
const winPossibilities = [
    ['One', 'Two', 'Three'],
    ['Four', 'Five', 'Six'],
    ['Seven', 'Eight', 'Nine'],

    ['One', 'Four', 'Seven'],
    ['Two', 'Five', 'Eight'],
    ['Three', 'Six', 'Nine'],

    ['One', 'Five', 'Nine'],
    ['Three', 'Five', 'Seven']
];

function reset() {
    tiles.forEach(tile => {
        tile.innerHTML = "";
        tile.classList.remove('playerX', 'playerO');
    });
    player = "X";
    gameField = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    plays = 0;
    lineOne = 0;
    lineTwo = 0;
    lineThree = 0;
    win = false;
    winText.style.display = "none"
    drawText.style.display = "none"
    updatePlayerUI();
}

function switchPlayer() {
    player = (player === "X") ? "O" : "X";
    updatePlayerUI();
}

function updatePlayerUI() {
    currentPlayer.innerHTML = player;
    currentPlayer.classList.remove('playerX', 'playerO');
    currentPlayer.classList.add('player' + player);
}

function setSymbol(whichTile) {
    if (!win) {
        const tile = document.getElementById('tile' + whichTile);

        if (!tile.classList.contains('playerX') && !tile.classList.contains('playerO')) {
            tile.innerHTML = player;
            tile.classList.add('player' + player);
            plays++;
            checkWin();
            switchPlayer();
        }
    }
}

function checkWin() {
    for (let i = 0; i < winPossibilities.length; i++) {
        const [tile1, tile2, tile3] = winPossibilities[i];
        const classList1 = document.getElementById('tile' + tile1).classList;
        const classList2 = document.getElementById('tile' + tile2).classList;
        const classList3 = document.getElementById('tile' + tile3).classList;

        if (classList1.contains('playerX') && classList2.contains('playerX') && classList3.contains('playerX')) {
            win = true;
            currentWinner.innerHTML = "X"
            currentWinner.classList.remove('playerO')
            currentWinner.classList.add('playerX')
            winText.style.display = "block"
        } else if (classList1.contains('playerO') && classList2.contains('playerO') && classList3.contains('playerO')) {
            win = true;
            currentWinner.innerHTML = "O"
            currentWinner.classList.remove('playerX')
            currentWinner.classList.add('playerO')
            winText.style.display = "block"
        }
        if (plays == 9) {
            win = false;
            drawText.style.display = "block"
        }
    }
}