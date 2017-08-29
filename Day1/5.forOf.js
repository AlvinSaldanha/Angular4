var sachin = {
    name: "sachin", age: 44
}
var dravid = {
    name: "dravid", age: 44
}

let players = [];
players.push(sachin);
players.push(dravid);

let numbers = [10,20,30];
numbers.myProperty = "Test";


for (let player in players) {
   // console.log(players[player]);
}

for (let number in numbers) {
   // console.log(numbers[number]);
}

for (let player of players) {
    console.log(player);
}

for (let number of numbers) {
    console.log(number);
}