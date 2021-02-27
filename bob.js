class Bob{
    constructor(x,y){
        var options={
           isStatic:false,
           restitution:1,
           friction:0,
           density:7.8
        }
        this.body=Bodies.circle(x,y,50,options);
        this.radius=50;
        World.add(world,this.body);
    }
    display(){
       // var pos=this.krishna.position;
        push();
       // translate(pos.x,pos.y);
        strokeWeight(3);
        stroke("red");
        fill("green");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,50,50);
        pop();
    }
}