class Player {
    age:number = 50;
    constructor(private name) {
debugger;
    }

    walk() {
        console.log(`Name is ${this.name}`);
    }
}

let sachin = new Player("sachin");
sachin.walk();