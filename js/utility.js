var speed = 5
var carPosition = [42, 175, 315]
// var carPosition = [42, (2/9)*400, (3/9)*400]

// var blockerCars = document.createElement('div')

function distance(x1, y1, x2, y2){
    return Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1),2));
}

function createRoadLane(classname){
    for(i = 0; i < 4; i++){
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
        console.log('pos',Math.floor(Math.random() * carPosition.length))
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

        element.y += speed
        element.style.top = element.y + 'px'
    });
}

function moveBlockerCars(classname){
    var elements = document.querySelectorAll('.'+classname)
    elements.forEach(element => {

        if(element.y > 800){
            element.y -= 850
        // console.log('pos',Math.floor(Math.random() * carPosition.length))
            var position = carPosition[Math.floor(Math.random() * carPosition.length)]
            console.log('pos',Math.floor(Math.random() * carPosition.length))
            element.style.left = position + 'px'
            // element.style.left = Math.floor(Math.random() * 400) + 'px'

        }

        element.y += speed
        element.style.top = element.y + 'px'
    });
}

