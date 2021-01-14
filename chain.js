class chain{
    constructor(body1,point2){
        var options = {
            bodyA : body1,
            pointB : point2,
            stiffness : 0.004,
            length : 1
            
        }
        this.pointB = point2;
           this.chain1= Constraint.create(options);
           World.add(world,this.chain1);
    }

     fly(){
         this.chain1.bodyA = null;
     }

    display(){
        if(this.chain1.bodyA){
        var pointA = this.chain1.bodyA.position;
        var pointB = this.pointB;
       push();
       strokeWeight(5);
       line(pointA.x,pointA.y,pointB.x,pointB.y);
       pop();
        }
    }
}