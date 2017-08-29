var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = (function () {
    function Animal(color) {
        this.color = color;
    }
    Animal.prototype.walk = function () {
    };
    Animal.GetType = function () {
        return "Animal";
    };
    return Animal;
}());
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super.call(this, "brown") || this;
    }
    return Cat;
}(Animal));
var animal = new Animal("Brown");
Animal.GetType();
var Player = (function () {
    function Player() {
        this.name = "sachin";
        this.age = 44;
    }
    Player.prototype.bat = function () {
        return 100;
    };
    return Player;
}());
