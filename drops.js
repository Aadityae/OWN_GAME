class Drop {
    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'friction':0.1,
          'density':1.0,
          
      }
      this.rain = Bodies.circle(x, y, 5, options);
     
      
      World.add(world, this.rain);
    }
    display(){
      var pos =this.rain.position;
      
      var angle = this.rain.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      
    
      fill("lightblue");
      ellipse(0, 0, 5);

      pop();

      if(this.rain.position.y>height)
        {
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
        }
    }

    
        
  };