
// division into equal parts [(1/9)*400, (4/9)*400, (7/9)*400]
var carPosition = [42, 175, 308]
var range = 5

function distance(x1, y1, x2, y2){
    return Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1),2));
}

function createRoadLane(classname){
    for(i = -1; i < 3; i++){
        var roadLane = document.createElement('div')
        roadLane.className = classname
        roadLane.y = (i * 215)
        roadLane.style.top = roadLane.y + 'px'
        road.appendChild(roadLane)
    }
}

function createBlockerCars(classname){
    for(i = -1; i < 2; i++){
        var blockerCars = document.createElement('div')
        blockerCars.className = classname
        blockerCars.y = (i * 230)
        blockerCars.style.top = blockerCars.y + 'px'
        var position = carPosition[Math.floor(Math.random() * carPosition.length)]
        // console.log('pos',Math.floor(Math.random() * carPosition.length))
        blockerCars.style.left = position + 'px'
        // blockerCars.style.left = Math.floor(Math.random() * 300) + 'px'
        road.appendChild(blockerCars) 
    }
}

function moveLane(classname){
    var elements = document.querySelectorAll('.'+classname)
    elements.forEach(element => {

        if(element.y > 800){
            element.y -= 850
        }

        element.y += player.speed
        element.style.top = element.y + 'px'
    });
}

function moveBlockerCars(classname){
    var elements = document.querySelectorAll('.'+classname)
    elements.forEach(element => {

        if(checkCollision(playerCar, element)){
            var finalScore = player.score
            gameOver(finalScore)
        }
       
        if(isPassingOver(element)){
            player.score = player.score + 5
        }


        if((element.getBoundingClientRect().bottom >= roadBoundingArea.width - range) && (element.getBoundingClientRect().bottom <= roadBoundingArea.width + range) ){
            console.log('score pluss', element.bottom, roadBoundingArea.width)
        }

        if(element.y > 800){
            element.y -= 850
            var position = carPosition[Math.floor(Math.random() * carPosition.length)]
            // console.log('pos',Math.floor(Math.random() * carPosition.length))
            element.style.left = position + 'px'
            // element.style.left = Math.floor(Math.random() * 400) + 'px'

        }

        element.y += player.speed
        element.style.top = element.y + 'px'
    });
}

function checkCollision(car1, car2){
    playerPos = car1.getBoundingClientRect()
    blockerPos = car2.getBoundingClientRect()
    // console.log('l',playerPos,blockerPos)
    
    if ((playerPos.top > blockerPos.bottom) || (playerPos.bottom < blockerPos.top) || (playerPos.right < blockerPos.left) || (playerPos.left > blockerPos.right)){
        return 0
    }
    else return 1
}

function gameOver(finalScore){
    player.playing = false
    popUp[0].id = 'visible'
    popUp[0].innerHTML = '<b>Game over!</b> <br/> Final score: <span class = "display-key"> '+ finalScore + '</span><br/> Click to Play Again!'
    player.score = 0    
}

function isPassingOver(element){
    for(i = roadBoundingArea.width - range; i <= roadBoundingArea.width + range; i++){
        if(element.getBoundingClientRect().bottom == i){
            var val = true
            break
        }
    }
    return val
}