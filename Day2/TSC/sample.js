"use strict";
var Player = (function () {
    function Player(name) {
        this.name = name;
        this.age = 50;
        debugger;
    }
    Player.prototype.walk = function () {
        console.log("Name is " + this.name);
    };
    return Player;
}());
var sachin = new Player("sachin");
sachin.walk();
//# sourceMappingURL=sample.js.map