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
    
    
    console.log('area',roadBoundingArea)
    // road.appendChild(playerCar)
    // var roadSections = document.getElementsByClassName('road-section')
    // roadSections[1].appendChild(playerCar)
    console.log('pos',playerCar.offsetLeft)
    // console.log('pos2',playerCar.offsetTop)
    player.x = playerCar.offsetLeft
    // player.y = playerCar.offsetTop
    console.log('gg',player)
    createBlockerCars('blocker-cars')
    // road.appendChild(blockerCars) 
    loop()
})



var keyDown = document.addEventListener('keydown',function(e){
    e.preventDefault();
    keys[e.key] = true
    console.log(e.key)
    console.log('keys',keys)
})

var keyUp = document.addEventListener('keyup',function(e){
    e.preventDefault();
    keys[e.key] = false
    console.log(e.key)
    console.log('keys',keys)
})
// const speed = 2

// function Circle(x, y, r){
//     this.x = x;
//     this.y = y;
//     this.r = r;
//     this.color = '#'+Math.floor(Math.random()*16777215).toString(16);
//     this.movement = Math.random() * Math.PI * 2;

  
//     this.updatePosition = function(){
//         this.x += Math.cos(this.movement) * speed;
//         this.y += Math.sin(this.movement) * speed;

//         if(this.x - this.r < 0){
//             this.x = this.r
//             this.movement = Math.atan2(Math.sin(this.movement), Math.cos(this.movement)* -1)
//         }
//         else if(this.x + this.r > boxContainer.canvas.width){
//             this.x = boxContainer.canvas.width - this.r
//             this.movement = Math.atan2(Math.sin(this.movement), Math.cos(this.movement)* -1)
//         }
//         if(this.y - this.r < 0){
//             this.y = this.r
//             this.movement = Math.atan2(Math.cos(this.movement), Math.sin(this.movement)* -1)
//         }
//         else if(this.y + this.r > boxContainer.canvas.height){
//             this.y = boxContainer.canvas.height - this.r
//             this.movement = Math.atan2(Math.cos(this.movement), Math.sin(this.movement)* -1)
//         }
//     }

//     this.checkCollision = function(){

//         for(j = 0; j< circleArray.length; j++){
            
//             if(this != circleArray[j]){
//                 if (distance(this.x, this.y, circleArray[j].x, circleArray[j].y) - (this.r * 2) < 0) {
//                     // console.log('yes, collision detected', distance(this.x, this.y, circleArray[j].x, circleArray[j].y) - (this.r * 2) )
//                     this.movement = Math.atan2(Math.sin(this.movement) * -1, Math.cos(this.movement)* -1)
//                 }
//             }
//         }
//     }

// }

// var boxContainer = document.querySelector('canvas').getContext('2d');



// var circleArray = [];
// for(i = 0; i < 5; i++){
//     var x = Math.random() * innerWidth
//     var y = Math.random() * innerHeight
//     var r = 50
//     if(i != 0){
//         for(j = 0; j< circleArray.length; j++){
//             if(distance(x, y, circleArray[j].x, circleArray[j].y) - (r * 2)  < 0){
//                 x = Math.random() * innerWidth
//                 y = Math.random() * innerHeight
//                 j = -1
//             }
//         }
//     }
//     circleArray.push(new Circle(x, y, r))
// }


createRoadLane('left-lane')
createRoadLane('right-lane')

function loop(){
    window.requestAnimationFrame(loop);

    
    road.appendChild(playerCar)
    // road.appendChild(blockerCars) 
    moveLane('left-lane')
    moveLane('right-lane')
    moveBlockerCars('blocker-cars')
    // console.log('hete')
    if(keys.ArrowRight && player.x < roadBoundingArea.width - playerCar.offsetWidth){
        
        player.x += 5
        playerCar.style.left = player.x + 'px'
        console.log('p',player.x) 
    }



    if(keys.ArrowLeft && player.x > 0 ){
        
        player.x -= 5
        playerCar.style.left = player.x + 'px'
        console.log('p',playerCar.style.right,'l',player.x) 
    }
}
