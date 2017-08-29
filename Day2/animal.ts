class Animal {
    protected name: string;
    constructor(private color: string) {

    }

    walk() {

    }

    static GetType() {
        return "Animal";
    }

}

class Cat extends Animal {
    constructor() {
        super("brown");
    }
}


let animal = new Animal("Brown");
Animal.GetType();

interface IPlayer {
    name: string;
    age: number;
    bat(): number;
}

class Player implements IPlayer {
    name: string = "sachin";
    age: number = 44;
    bat() {
            return 100;
    }
}