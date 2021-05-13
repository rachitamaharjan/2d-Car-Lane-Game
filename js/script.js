var keys = {
    ArrowLeft : false,
    ArrowRight : false,
}

var player = {}

var popUp = document.getElementById('pop-up')
var playerCar =  document.createElement('div')
playerCar.className = 'player-car'
var road = document.getElementById('road')
var roadBoundingArea = road.getBoundingClientRect()

// createBlockerCars('blocker-cars')

var startGame = popUp.addEventListener('click', function(){
    popUp.style.display = 'none'
    
    
    // console.log('area',roadBoundingArea)
    // road.appendChild(playerCar)
    // var roadSections = document.getElementsByClassName('road-section')
    // roadSections[1].appendChild(playerCar)
    // console.log('pos',playerCar.offsetLeft)
    // console.log('pos2',playerCar.offsetTop)
    player.x = playerCar.offsetLeft
    // player.y = playerCar.offsetTop
    // console.log('gg',player)
    createBlockerCars('blocker-cars')
    // road.appendChild(blockerCars) 
    loop()
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


createRoadLane('left-lane')
createRoadLane('right-lane')

function loop(){
    window.requestAnimationFrame(loop);

    
    road.appendChild(playerCar)
    // road.appendChild(blockerCars) 
    // checkCollision(playerCar, )
    moveLane('left-lane')
    moveLane('right-lane')
    moveBlockerCars('blocker-cars')
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
