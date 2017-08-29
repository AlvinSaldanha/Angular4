function GetData(callback,callback2) {
    console.log('Get Data Fired!');
    setTimeout(function () {
        callback([1, 2, 3, 4],callback2);
    }, 5000);
}

function ProcessData(data,callback) {
    console.log('Process Data Fired!');
    let newResult = []

    setTimeout(function () {
        for (let number of data) {
            let newNumber = number * 10;
            newResult.push(newNumber);
        }
        callback( newResult);
    }, 2000);

    
}

function DisplayData(data) {
    console.log('Display Data Fired!');
    for (let number of data) {
        console.log(number);
    }
}

function Init() {
    let data = GetData(ProcessData,DisplayData);
}

Init();