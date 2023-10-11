function setup() {
    createCanvas(400, 400);
    background(0);
  }
  
  function draw(){
    
  
    
    stroke("red");
    fill("blue");
    
    
   // console.log(mouseIsPressed);
    
    if(mouseIsPressed){
      rect(mouseX,mouseY,100,200);
     }
  }