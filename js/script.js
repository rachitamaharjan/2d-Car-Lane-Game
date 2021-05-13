var keys = {
    Space : false,
}

var player = { playing: false, score: 0, speed: 5, gravity: 1, velocity: 0}
var pointsBefore = player.score
var score = document.getElementById('score')
var popUp = document.getElementsByClassName('pop-up')
var playerBird =  document.createElement('div')
playerBird.className = 'player-bird'
playerBird.y = playerBird.offsetTop
var gameArea = document.getElementById('game-area')
// var roadBoundingArea = road.getBoundingClientRect()

var startGame = popUp[0].addEventListener('click', function(){

    popUp[0].id = 'invisible'
    // player.speed = 5
    gameArea.innerHTML = ''
    // createRoadLane('left-lane')
    // createRoadLane('right-lane')
    player.playing = true
    player.score = 0
    createPipes('blocker-pipes')
    window.requestAnimationFrame(loop);
})



var keyDown = document.addEventListener('keydown',function(e){
    e.preventDefault();
    keys[e.key] = true
    // console.log(e.key)
})

var keyUp = document.addEventListener('keyup',function(e){
    e.preventDefault();
    keys[e.key] = false
    // console.log(e.key)
})


// createRoadLane('left-lane')
// createRoadLane('right-lane')

function loop(){
    // player.x = parseInt(playerCar.offsetLeft) 

    
    if (player.playing){

        window.requestAnimationFrame(loop);
        moveBase()
        gameArea.appendChild(playerBird)
        birdGravity()
        // moveLane('left-lane')
        // moveLane('right-lane')
        // moveBlockerCars('blocker-cars')

        // score.innerHTML = 'Score: ' + player.score + '<br/> Speed: ' + player.speed

        // if (player.score >= pointsBefore+20){
        //     player.speed += 1
        //     pointsBefore = player.score
        // }
        // if(keys.ArrowRight && player.x < roadBoundingArea.width - playerCar.offsetWidth){
            
        //     player.x += 35
        //     if (player.x > roadBoundingArea.width - playerCar.offsetWidth){
        //         player.x -= 35
        //     }
        //     else{
        //         playerCar.style.left = player.x + 'px'
        //     }
        // }

    }
}
