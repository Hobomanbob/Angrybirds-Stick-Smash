class Chain {
    constructor (bodyA,bodyB) {
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.4,
            length:10
        }
        this.chain = Matter.Constraint.create(options);
        World.add(world,this.chain);
    }
    display() {
        //name spacing#nickname
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        push();

        strokeWeight(7.5)
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}
