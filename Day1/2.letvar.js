function varTest() {
    //console.log(x);

    var x = 1;
    var x = 2;

    if (true) {
        var myProperty = 10;
    }
    console.log(myProperty);
}

function letTest() {
    // console.log(x);
    let x = 1;

    if (true) {
        let myProperty = 10;
    }
    console.log(myProperty);
}

varTest();
letTest();