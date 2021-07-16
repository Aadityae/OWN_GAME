class Ice {
    constructor(x, y) {
      var options = {
          isStatic:false
          
          
      }
      this.rain = Bodies.rectangle(x,y, 10,10, options);
     
      
      World.add(world, this.rain);
    }
    display(){
      var pos =this.rain.position;
      
      var angle = this.rain.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(RADIUS);
      
    
      fill("white");
      rect(0, 0, 10,10);

      pop();

     
    }

    
        
  };