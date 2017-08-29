// var sachin = {
//     name: "sachin", age: 44, DOB: '23/04/1973', bats= function () {
//         console.log("Sachin Bats!");
//     }
// };

function Player() {
    this.name;
    var salary =10000;
    this.age;
    this.DOB;
    this.bats = function () {
        //console.log(this.name+ " Bats!");
       //console.log('Sachins Salary inside the function ' + salary);
    }
}

var sachin = new Player();
sachin.name = "sachin";
sachin.age = 44;
sachin.runs = 40000;

sachin.bats();

Player.prototype.wickets = 100;

//console.log('Sachins Salary ' + sachin.salary);

var dravid = new Player();
dravid.name = "dravid";
dravid.age = 42;
dravid.bats();

console.log(sachin);
console.log(dravid.wickets);