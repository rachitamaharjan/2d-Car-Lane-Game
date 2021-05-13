var keys = {
    Space : false,
}

var player = { playing: false, score: 0, speed: 5, gravity: 0.5, velocity: 0, upward: -10}
var pointsBefore = player.score
var score = document.getElementById('score')
var popUp = document.getElementsByClassName('pop-up')
var playerBird =  document.createElement('div')
playerBird.className = 'player-bird'
playerBird.y = playerBird.offsetTop
var gameArea = document.getElementById('game-area')
var blockerPipes = document.getElementsByClassName('blocker-pipes')

// var roadBoundingArea = road.getBoundingClientRect()

var startGame = popUp[0].addEventListener('click', function(){

    popUp[0].id = 'invisible'
    // player.speed = 5
    gameArea.innerHTML = ''
    // createRoadLane('left-lane')
    // createRoadLane('right-lane')
    player.playing = true
    player.score = 0
    createPipeRow('pipe-row1')
    createPipeRow('pipe-row2')
    createPipeRow('pipe-row3')

    gameArea.appendChild(playerBird)

    
    // playerBird.y = playerBird.offsetTop
    window.requestAnimationFrame(loop);
})

mainContainer[0].addEventListener('click', flapUp)

    document.addEventListener('keypress', flapUp)
    function flapUp(e){
        // if(e.code == 'Space'){
            playerBird.y = playerBird.offsetTop
            player.velocity += player.upward
            playerBird.y += player.velocity
            playerBird.style.top =  playerBird.y + 'px'
        // }
    }

// var keyDown = document.addEventListener('keydown',function(e){
//     e.preventDefault();
//     keys[e.key] = true
//     console.log(e.key)
// })

// var keyUp = document.addEventListener('keyup',function(e){
//     e.preventDefault();
//     keys[e.key] = false
//     // console.log(e.key)
// })


// createRoadLane('left-lane')
// createRoadLane('right-lane')
// playerBird.y = playerBird.offsetTop
function loop(){
    var blockerPipes = document.getElementsByClassName('blocker-pipes')
    // player.x = parseInt(playerCar.offsetLeft) 
    // playerBird.y = playerBird.offsetTop
    
    if (player.playing){
        // playerBird.y = playerBird.offsetTop

        // console.log('m',playerBird.offsetTop)

        window.requestAnimationFrame(loop);
        moveBase()
        // gameArea.appendChild(playerBird)
        birdGravity()
        movePipes('pipe-row1',blockerPipes[0].x)
        movePipes('pipe-row2',blockerPipes[1].x)
        movePipes('pipe-row3',blockerPipes[2].x)
        // moveLane('left-lane')
        // moveLane('right-lane')
        // moveBlockerCars('blocker-cars')

        // document.addEventListener('keypress', function(e){
        //     // var timer = 0
        //     // setInterval(function(){
        //     //     playerBird.y --
        //     // },2000)
        //     // console.log('key',e.code)
        //     if(e.code == 'Space'){
        //         console.log('yes')
        //         player.velocity += player.upward
        //     //     playerBird.y += player.velocity

        //     // playerBird.style.top =  playerBird.y + 'px'
        //     }

            
        // })

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
