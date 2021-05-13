
// // division into equal parts [(1/9)*400, (4/9)*400, (7/9)*400]
// var carPosition = [42, 175, 308]
// var range = 5
var baseX = 0
var mainContainer = document.getElementsByClassName('main-container')
// function distance(x1, y1, x2, y2){
//     return Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1),2));
// }

// function createRoadLane(classname){
//     for(i = -1; i < 3; i++){
//         var roadLane = document.createElement('div')
//         roadLane.className = classname
//         roadLane.y = (i * 215)
//         roadLane.style.top = roadLane.y + 'px'
//         road.appendChild(roadLane)
//     }
// }

console.log('height',mainContainer[0].offsetHeight,mainContainer[0].style.height)

function createPipes(classname){
    // var topPipe = document.createElement('div')
    // topPipe.className = 'top-pipe'
    // var bottomPipe = document.createElement('div')
    // bottomPipe.className = 'bottom-pipe'
    // topPipe.style.width = Math.floor((Math.random() 
    for(i = 0; i < 2; i++){
        var blockerPipes = document.createElement('div')
        blockerPipes.className = classname
        var height = Math.floor((Math.random() * mainContainer[0].offsetHeight/2 )+ 10)
        // console.log('pos',Math.floor(Math.random() * carPosition.length))
        blockerPipes.style.height = height + 'px'
        if (i % 2 == 0){
            blockerPipes.y = 0
            blockerPipes.classList.add('pipe-up')
        }
        else{
            blockerPipes.classList.add('pipe-down')
            blockerPipes.y = mainContainer[0].offsetHeight - parseInt(blockerPipes.style.height)
            console.log('h',blockerPipes.style.height)
            // blockerPipes.y = mainContainer[0].offsetHeight - blockerPipes.height
        }
        blockerPipes.style.top = blockerPipes.y + 'px'
        
        // blockerPipes.style.left = Math.floor(Math.random() * 300) + 'px'
        mainContainer[0].appendChild(blockerPipes) 
    }
}

function birdGravity(){
    
    player.velocity += player.gravity
    playerBird.y += player.velocity
    // playerBird.style.top = '200px'
    playerBird.style.top = playerBird.y + 'px'
    if(playerBird.y > mainContainer[0].offsetHeight){
        console.log('down')
        playerBird.y = parseInt(mainContainer[0].offsetHeight)
        console.log('llll',playerBird.y)
        player.velocity = 0
        playerBird.style.top = (parseInt(mainContainer[0].offsetHeight) - playerBird.offsetHeight) + 'px'
        console.log('g',playerBird.style.top)
    }
    // playerBird.style.top = playerBird.y + 'px'
    // console.log('top',playerBird.style.top)
}
// var base = document.getElementById('base')
    // console.log('base.x',base.getBoundingClientRect())
//     base.style.right = '10px'
//     console.log('j', base.offsetLeft)
//     console.log('base.x',base.getBoundingClientRect())
function moveBase(){
    // var base = document.getElementById('base')
    // console.log('base.x',base.getBoundingClientRect().right)
    // if(parseInt(base.style.right) < 200){
    //     var temp = parseInt(base.style.right)
    //     temp += 850
    //     base.style.right = temp + 'px'
    //     console.log('ok',base.style.right)
    // }
    // baseX += player.speed
    // base.style.right = baseX + 'px'
    // base.style.right = base.x + 'px'
    // console.log('base.x',player.speed,baseX,base.offsetWidth)

}

// function moveBlockerCars(classname){
//     var elements = document.querySelectorAll('.'+classname)
//     elements.forEach(element => {

//         if(checkCollision(playerCar, element)){
//             var finalScore = player.score
//             gameOver(finalScore)
//         }
       
//         if(isPassingOver(element)){
//             player.score = player.score + 5
//         }


//         if((element.getBoundingClientRect().bottom >= roadBoundingArea.width - range) && (element.getBoundingClientRect().bottom <= roadBoundingArea.width + range) ){
//             console.log('score pluss', element.bottom, roadBoundingArea.width)
//         }

//         if(element.y > 800){
//             element.y -= 850
//             var position = carPosition[Math.floor(Math.random() * carPosition.length)]
//             // console.log('pos',Math.floor(Math.random() * carPosition.length))
//             element.style.left = position + 'px'
//             // element.style.left = Math.floor(Math.random() * 400) + 'px'

//         }

//         element.y += player.speed
//         element.style.top = element.y + 'px'
//     });
// }

// function checkCollision(car1, car2){
//     playerPos = car1.getBoundingClientRect()
//     blockerPos = car2.getBoundingClientRect()
//     // console.log('l',playerPos,blockerPos)
    
//     if ((playerPos.top > blockerPos.bottom) || (playerPos.bottom < blockerPos.top) || (playerPos.right < blockerPos.left) || (playerPos.left > blockerPos.right)){
//         return 0
//     }
//     else return 1
// }

// function gameOver(finalScore){
//     player.playing = false
//     popUp[0].id = 'visible'
//     popUp[0].innerHTML = '<b>Game over!</b> <br/> Final score: <span class = "display-key"> '+ finalScore + '</span><br/> Click to Play Again!'
//     player.score = 0    
// }

// function isPassingOver(element){
//     for(i = roadBoundingArea.width - range; i <= roadBoundingArea.width + range; i++){
//         if(element.getBoundingClientRect().bottom == i){
//             var val = true
//             break
//         }
//     }
//     return val
// }