let Add = (x, y) => {
    return x + y;
}

let newAdd = (x, y) => {
    x = x + 20;
    return x + y
};

var sum = Add(10, 20);
//console.log(sum);

var newSum = Add(100, 200);
//console.log(newSum);

function Car() {
    this.speed = 100;
    let that = this;
    // this.getSpeed = function () {
    //     setTimeout(function () {
    //         console.log("The Speed of the car is " + that.speed);
    //     }, 2000);
    // }

    this.getSpeed = function () {
        setTimeout(() =>{
            console.log("The Speed of the car is " + this.speed);
        }, 2000);
    }
}

let ferrari = new Car();
ferrari.getSpeed();