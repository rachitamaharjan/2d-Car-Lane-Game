var keys = {
    ArrowLeft : false,
    ArrowRight : false,
}

var player = { playing: false, score: 0, speed: 5,}
var pointsBefore = player.score
var score = document.getElementById('score')
var popUp = document.getElementsByClassName('pop-up')
var playerCar =  document.createElement('div')
playerCar.className = 'player-car'
var road = document.getElementById('road')
var roadBoundingArea = road.getBoundingClientRect()

var startGame = popUp[0].addEventListener('click', function(){

    popUp[0].id = 'invisible'
    player.speed = 5
    road.innerHTML = ''
    createRoadLane('left-lane')
    createRoadLane('right-lane')
    player.playing = true
    player.score = 0
    createBlockerCars('blocker-cars')
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
    player.x = parseInt(playerCar.offsetLeft) 

    
    if (player.playing){

        window.requestAnimationFrame(loop);
        road.appendChild(playerCar)
        moveLane('left-lane')
        moveLane('right-lane')
        moveBlockerCars('blocker-cars')

        score.innerHTML = 'Score: ' + player.score + '<br/> Speed: ' + player.speed

        if (player.score >= pointsBefore+20){
            player.speed += 1
            pointsBefore = player.score
        }
        if(keys.ArrowRight && player.x < roadBoundingArea.width - playerCar.offsetWidth){
            
            player.x += 30
            playerCar.style.left = player.x + 'px'
        }

        if(keys.ArrowLeft && player.x > 0 ){
            
            player.x -= 30
            playerCar.style.left = player.x + 'px'
        }
    }
}
