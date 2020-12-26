class Particle {
    constructor(x,y,radius) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      this.color = (random(0,255), random(0,255), random(0,255));
      ellipse(pos.x, pos.y, this.radius);
    }
  };
