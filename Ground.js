class Ground{

    constructor(x,y,width,heigth){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(450,390,900,20,ground_options)
          World.add(world,this.ground);
    }
    display(){
        rectMode(CENTER);
        push()
        fill("Gold")
        rect(this.ground.position.x,this.ground.position.y,1800,20);
        pop()
    }
}
