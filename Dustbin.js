class Dustbin{
constructor(x,y) {
 this.x=x; this.y=y;
 this.dustbinWidth=200;
 this.dustbinHeight=100; 
this.wallThickness=20;
 this.angle=0; 
this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
Matter.Body.setAngle(this.leftWallBody, this.angle); 
this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true}) 
Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
World.add(world, this.bottomBody) 
World.add(world, this.leftWallBody) 
World.add(world, this.rightWallBody)
}
display(){
    push() 
  //  translate(paperpos.x, paperpos.y);
     rectMode(CENTER)
      strokeWeight(3); 
     fill("white") 
     rect(this.x,this.y);
      pop() 
      
}
}