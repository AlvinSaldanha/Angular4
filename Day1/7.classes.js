class Player {
    
    constructor(name = "No Name") {
        this.name = name;
        this.runs;

        let x = 1;
    }
    bats() {
        console.log(`${this.name} is batting`);
    }
}
let sachin = new Player();
sachin.runs = 40000;
//console.log(sachin.bats());

//console.log(sachin);

class Batsman extends Player{

    constructor(name){
        super(name);
        this.childProperty = 1;
    }

}

let dravid = new Batsman("dravid");
dravid.bats();