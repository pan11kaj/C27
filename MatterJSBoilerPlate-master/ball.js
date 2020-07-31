class Ball {
    constructor(x,y,radius) {
      var options = {
          isStatic:false,
          'restitution':0.7,
          'friction':0.6,
          'density':2.2
          
      }
      
      this.body = Bodies.circle(x,y,radius, options);
      
      
      this.x = x;
      this.y = y;
  
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
     fill("pink");
  translate(this.body.position.x,this.body.position.y);
   ellipse(this.x,this.y,this.radius);

      
      

      

     
      
    }
  };    