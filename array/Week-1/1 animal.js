// all about classes and object
class Animal {
    constructor(name,peak,legcount){
        this.name = name;
        this.peak = peak;
        this.legcount = legcount;
    }
    static mywork(){
        console.log("animal");
    }
    static speaks(){
        console.log('animal speak ' + this.peak);
    }
}

let dog = new Animal("vaibhav","bhao bhao",4);
let cat = new Animal("Vinay","meow meow",7);

dog.speaks();
Animal.mywork();
Animal.speaks();
