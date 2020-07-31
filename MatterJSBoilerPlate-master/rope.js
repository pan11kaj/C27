class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA : bodyA,
            bodyB : bodyB,
           
            stiffness:0.7,
            length:130,
            pointB:{x:this.offsetX,y:this.offsetY}
    }

    this.chain = constraint.create(options)
    World.add(world,this.chain)


    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(2);
    var Anchor1X = pointA.x
    var Anchor1Y = pointA.y

    var Anchor2X = pointB.x+this.offsetX
    var Anchor2Y = pointAB.y+this.offsetY
     line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
}











    }