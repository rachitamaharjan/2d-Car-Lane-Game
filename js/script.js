var keys = {
    Space : false,
}

var player = { playing: false, score: 0, speed: 5, gravity: 0.5, velocity: 0, upward: -0.1}
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
    
    // playerBird.y = playerBird.offsetTop
    window.requestAnimationFrame(loop);
})



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
    // player.x = parseInt(playerCar.offsetLeft) 
    // playerBird.y = playerBird.offsetTop
    
    if (player.playing){
        // playerBird.y = playerBird.offsetTop

        // console.log('m',playerBird.offsetTop)

        window.requestAnimationFrame(loop);
        moveBase()
        gameArea.appendChild(playerBird)
        birdGravity()
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
