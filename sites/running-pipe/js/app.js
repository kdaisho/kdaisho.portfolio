'use strict';

var on = false;
var playing;
var clean;
var poison;
var count;

var field = document.getElementById('field');
var walls = document.getElementsByClassName('wall');
var gameOver = document.getElementById('gameOver');
var startArea = document.getElementById('start');
var goalArea = document.getElementById('goal');
var statusDisplay = document.getElementById('status');
var timer = document.getElementById('timer');
var reload = document.getElementById('reload');

init();

function init() {
    poison = 0;
    count = 10;
    displayMsg(startArea, 'CLICK HERE TO START');
    displayMsg(goalArea, 'GOAL');
    clickToStart();
    detectCollision(walls, poison, count);
    goal(playing);
    displayMsg(statusDisplay, 'DAMAGE: ' + poison);
    displayMsg(timer, 'TIME: ' + count);
}

function clickToStart() {
    startArea.addEventListener('click', startGame);
}

function startTimer() {
    count = 10;
    setInterval(function () {
        if (playing) {
            count--;
            displayMsg(timer, 'TIME: ' + count);
        }
    }, 1000);
}

function startGame() {
    displayMsg(startArea, 'GO');
    playing = true;
    poison = 3;
    clean = true;
    poison = 0;
    if (playing) {
        startTimer();
    }
    countdown();
    gameOverImage.className = '';
    field.className = 'field';
    displayMsg(statusDisplay, 'DAMAGE: ' + poison);
    displayMsg(goalArea, 'GOAL');
}

function detectCollision(arr, poison, count) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].addEventListener('mousemove', addpoison, false);
    }
}

function goal(playing) {
    if (poison <= 20) {
        goalArea.addEventListener('mouseover', function () {
            displayMsg(goalArea, 'NAISU');
            displayMsg(startArea, 'PLAY AGAIN');
            celebrate();
        }, false);
    }
}

function celebrate() {
    displayMsg(startArea, 'CLICK HERE TO RESTART')
    endGame('NAISU!');
    window.clearTimeout(countdown);
}

function displayMsg(where, what) {
    where.innerHTML = what;
}
var countdown;

function countdown() {
    countdown = setTimeout(function () {
        endGame('TIME OUT');
    }, 10000);
}


function addpoison() {
    poison++;
    if (poison <= 20) {
        displayMsg(statusDisplay, 'DAMAGE: ' + poison);
    }
    if (poison > 20) {
        endGame('NO GOOD');
    }
}

function endGame(msg) {
    gameOverImage.className = 'appear';
    displayMsg(goalArea, msg)
    displayMsg(reload, msg)
    field.className = 'field blackout';
    count = 0;
    playing = false;
    reload.className = 'reload show';
}

reload.addEventListener('click', function () {
    // if (!playing) {
    location.reload();
    // }
});