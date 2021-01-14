class stone{
    constructor(){
    var options = {
        isStatic : false,
        restitution :0.1,
       friction : 1,
        density : 1
    }
    this.body = Bodies.circle(110,500,20,options);
          this.radius = 20;
          
          this.image = loadImage("stone.png")
          World.add(world, this.body);
    }
          display(){
            var pos =this.body.position;
            var angle = this.body.angle
           push();
            translate(pos.x,pos.y);
           rotate(angle);
            imageMode(CENTER);
            //fill("brown");
           image(this.image,0,0,40,40);
            pop();
          }
    
    }