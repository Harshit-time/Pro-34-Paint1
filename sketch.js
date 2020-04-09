var drawing = [];
var currentPath = []; 

var button;
var name;
var isDrawing = false;

var database;

function setup(){

var canvas = createCanvas(400,400);



canvas.mousePressed(startPath);
canvas.mouseReleased(endPath);

database = firebase.database();


button = createButton("Save");
button.position(500,60);
}


function startPath(){

  isDrawing = true;
currentPath = [];
drawing.push(currentPath);


}

function endPath(){

  isDrawing = false;

}




function draw(){

background(0);

if(isDrawing){
  var point ={
    x:mouseX,
    y:mouseY
  }
  currentPath.push(point)
}


stroke(255);
strokeWeight(4);
noFill();

for(var i = 0;i<drawing.length;i++ ){

      var path = drawing[i];

      beginShape();    

  for(var j = 0;j<path.length;j++ ){

      vertex(path[j].x,path[j].y);

  }

  endShape();
}

button.mousePressed(()=>{

var dRef = database.ref('drawings');

var data={
  
  drawing:drawing
}

dRef.push(data);

})




}