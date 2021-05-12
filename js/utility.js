function distance(x1, y1, x2, y2){
    return Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1),2));
}

function createRoadLane(classname){
    for(i = 0; i < 4; i++){
        var roadLane = document.createElement('div')
        roadLane.className = classname
        roadLane.style.top = (i * 215) + 'px'
        road.appendChild(roadLane)
    }
}