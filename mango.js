class mango{
    constructor(x,y,r){
    var options = {
        isStatic : true,
        restitution : 0,
        friction:1,
        //density:1,
    }
    this.body = Bodies.circle(x,y,r,options);
          
          this.radius = r;
          this.image = loadImage("mango.png")
          World.add(world, this.body);
    }
          display(){
            var pos =this.body.position;
            var angle = this.body.angle;
           push();
           translate(pos.x,pos.y);
            rotate(angle);
            imageMode(CENTER);
            //fill("brown");
           image(this.image,0,0,50,50);
            pop();
          }
    
    }