var keys = {
    ArrowLeft : false,
    ArrowRight : false,
}

var player = { playing: false, score: 0}
var score = document.getElementById('score')
var popUp = document.getElementsByClassName('pop-up')
var playerCar =  document.createElement('div')
playerCar.className = 'player-car'
var road = document.getElementById('road')
var roadBoundingArea = road.getBoundingClientRect()

// createBlockerCars('blocker-cars')
var startGame = popUp[0].addEventListener('click', function(){

    popUp[0].id = 'invisible'
    road.innerHTML = ''
    createRoadLane('left-lane')
    createRoadLane('right-lane')
    // road.appendChild(playerCar)
    // var road = document.getElementById('road')
    // popUp.style.display = 'none'
    player.playing = true
    
    player.score = 0
    player.x = playerCar.offsetLeft

    createBlockerCars('blocker-cars')
    
    window.requestAnimationFrame(loop);
})



var keyDown = document.addEventListener('keydown',function(e){
    e.preventDefault();
    keys[e.key] = true
    // console.log(e.key)
    // console.log('keys',keys)
})

var keyUp = document.addEventListener('keyup',function(e){
    e.preventDefault();
    keys[e.key] = false
    // console.log(e.key)
    // console.log('keys',keys)
})


// createRoadLane('left-lane')
// createRoadLane('right-lane')

function loop(){
    
    if (player.playing){
        window.requestAnimationFrame(loop);

        
        // console.log('score', player.score++)
        // console.log('score', player.score++)
        road.appendChild(playerCar)
        // road.appendChild(playerCar)
        // road.appendChild(blockerCars) 
        // checkCollision(playerCar, )
        moveLane('left-lane')
        moveLane('right-lane')
        moveBlockerCars('blocker-cars')
        // if(isPassingOver()){
        //     player.score = player.score + 5
        // }
        score.innerHTML = 'Score: ' + player.score
        // console.log('hete')
        if(keys.ArrowRight && player.x < roadBoundingArea.width - playerCar.offsetWidth){
            
            player.x += 5
            playerCar.style.left = player.x + 'px'
            // console.log('p',player.x) 
        }



        if(keys.ArrowLeft && player.x > 0 ){
            
            player.x -= 5
            playerCar.style.left = player.x + 'px'
            // console.log('p',playerCar.style.right,'l',player.x) 
        }
    }
}
