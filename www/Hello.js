//var exec = require('cordova/exec');
//
//exports.coolMethod = function(arg0, success, error) {
//    exec(success, error, "Hello", "coolMethod", [arg0]);
//};
var hello = {
    callHello: function(successCallback, errorCallback, ) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'Hello', // name of the native java class "MyPlugin"
            'sampleAction', // name of the action to performed
            [{}]  // and this array of custom arguments to create our entry
        );
    }
};
module.exports = hello;