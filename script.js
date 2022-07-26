//get out container
const container = document.getElementById('container');
// get our character
const character = document.querySelector('.character');
// get alert
const alert = document.getElementById('alert');

// set our jump to false, to avoid jumping in air
let jumping = false;
// add gravity to make it more realistic
let gravity = 0.9;

let gameOver = false;


//assign function to keycode spacebar
// keycode.info
function control(e) {
    if (e.keyCode === 32) {
        console.log('spacebar pressed');
        if (!jumping) {
            jumping = true;
            jump();
        }
    }
}

// jump function
let position = 0;
function jump() {
    let count = 0;
    let timerId = setInterval(function (){

        //go back down
        if (count === 15) {
            clearInterval(timerId); //stops up functionality from running
            console.log('down');
            let downTimerId = setInterval(function (){
                if (count === 0) {
                    clearInterval(downTimerId);
                    jumping = false;
                    character.style.removeProperty("background-image");
                }
                position -= 6;
                count--;
                position = position * gravity;
                character.style.bottom = position + 'px';
            }, 20)

        }
        // jump up
        console.log('up');
        position += 32;
        count++
        position = position * gravity;
        character.style.bottom = position + 'px';
        character.style.backgroundImage = "url(img/jump.gif)";
    }, 20)
}

//generate obstacles and at random
function generateObstacles() {
    let randomTime = Math.random() * 5000;
    let obstaclePosition = 2000;
    const obstacle = document.createElement('div');
    if(!gameOver){
        obstacle.classList.add('obstacle');
    }
    container.appendChild(obstacle);
    obstacle.style.left = obstaclePosition + 'px';

    let timerId = setInterval(function (){
        if (obstaclePosition > 0 && obstaclePosition < 60 && position < 60){
            clearInterval(timerId);
            alert.innerHTML = 'Game Over'
            gameOver = true;
        }

        obstaclePosition -= 10;
        obstacle.style.left = obstaclePosition + 'px';
    }, 20)
    if(!gameOver) {
        setTimeout(generateObstacles, randomTime)
    }
}

generateObstacles();

document.addEventListener('keydown', control)