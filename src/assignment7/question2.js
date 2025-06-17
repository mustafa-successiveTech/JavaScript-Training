/* 2. Give an example of using multiple callback functions in a single function in JavaScript */

function multipleCallbacks(input, showCallback, errorCallback) {
    if(input.trim() !== ""){
        showCallback(input);
    } else {
        errorCallback("Input is empty ");
    }
}

function successCallback(input) {
    console.log("Success : ",input);
}

function errorCallback(input) {
    console.log("Error : ", input);
}

multipleCallbacks("Hello", successCallback, errorCallback);
multipleCallbacks("", successCallback, errorCallback);