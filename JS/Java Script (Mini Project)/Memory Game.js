let startBtn = document.querySelector('button');
let levelMsg = document.querySelector('h3');
let tiles = document.querySelectorAll('.color-btns');
let board = document.querySelector('.main-box');
let maxScore = document.querySelector('h1');
let maxLevel = 0;
let level = 0;
let win = true;
let gameSeq = [];
let userSeq = [];

startBtn.addEventListener('click', function() {
    startBtn.classList.add('hide');
    levelMsg.classList.remove('hide');
    setTimeout(() => {
        startGame();
    }, 1000);
});

function startGame() {
    level = 0;
    gameSeq = [];
    game();
}

function game() {
    userSeq = [];
    displayLevel();
    let nextTile = selectTile();
    gameSeq.push(nextTile);
    blinkTile(nextTile);
    userClick();
}

function blinkTile(tileNo) {
    tiles[tileNo].classList.add('off');
    setTimeout(() => {
        tiles[tileNo].classList.remove('off');
    }, 150);
}

function selectTile() {
    return Math.floor((Math.random() * 4));
}

function displayLevel() {
    level += 1;
    levelMsg.innerText = `Level ${level}`;
}

function userClick() {
    for (let tile of tiles) {
        tile.addEventListener('click', handleUserClick);
    }
}

function handleUserClick(event) {
    let clickedTile = parseInt(event.target.getAttribute('id'));
    blinkTile(clickedTile);
    userSeq.push(clickedTile);
    console.log(userSeq);
    checkProgress();
}

function checkProgress() {
    let index = userSeq.length - 1;

    // wrong move
    if (userSeq[index] !== gameSeq[index]) {
        console.log("Wrong! Game Over");
        endGame();
        return;
    }

    // if finished round correctly
    if (userSeq.length === gameSeq.length) {
        console.log("Round Passed");
        setTimeout(game, 1000); // next round
    }
}

function endGame() {
    for (let tile of tiles) {
        tile.removeEventListener('click', handleUserClick);
    }
    levelMsg.innerText = `Game Over! Final Level: ${level - 1}`;
    startBtn.classList.remove('hide');
    if (level > maxLevel){
        maxScore.innerText = `Max Score: ${level - 1}`;
        maxLevel = level - 1;
    } else {
        maxScore.innerText = `Max Score: ${maxLevel}`;
    }
}