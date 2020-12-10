class Paper{
constructor(x,y,r){
    var options={
    
        isStatic:false,
        restitution:0.3,  
   
       }
      this.r = r
    this.body = Bodies.circle(x,y,r,options)
    this.image = loadImage("sprites/paper.png");
       World.add(world,this.body);
}
display(){
    var pos = this.body.position
    push()
    fill("red");
    noStroke()
    translate(pos.x,pos.y)
    imageMode(CENTER)
    image(this.image,0,0,this.r,this.r);
    pop()
}
}