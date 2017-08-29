function GetData() {
    console.log('Get Data Fired!');
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve([1, 2, 3, 4]);
            //reject('You are not Authorised to see this data!');
        }, 5000);
    });
}

function ProcessData(data) {
    console.log('Process Data Fired!');
    let newResult = []
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            for (let number of data) {
                let newNumber = number * 10;
                newResult.push(newNumber);
            }
            //resolve(newResult);
            reject();
        }, 2000);
    })
}

function DisplayData(data) {
    console.log('Display Data Fired!');
    for (let number of data) {
        console.log(number);
    }
}

function Init() {


    /*GetData().then(function (data) {
        ProcessData(data).then(function (newData) {
            DisplayData(newData);
        }).catch(errorMessage => console.log('ProcessData Failed'))
    }).catch(function (errorMessage) {
        console.log('Get Data Failed. Error: ' + errorMessage)
    })*/


    GetData()
        .then(ProcessData)
        .then(DisplayData).catch(logError);

}
function logError(errorMEssage) {
    console.log(errorMessage);
}

Init();