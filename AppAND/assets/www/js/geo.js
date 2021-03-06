/*
Week 3
Edward M Murray Jr
AVF 1303
*/
//
// Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
    function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    // onSuccess Run Geo Function
    //
    function onSuccess(position) {
        var element = document.getElementById('staticmap');
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        var pos = lat + "," + lon;//device coords for url 
        var imsrc ="http://maps.googleapis.com/maps/api/staticmap?center=" + pos + "&zoom=18&size=600x600&maptype=roadmap&markers=color:red%7Clabel:A%7C" + pos + "&sensor=false&key=AIzaSyCJTZgUnB6kpfOqL1YF1kB7diLyZDZ6VCQ";
        $('#staticmap').append("<img src='"+imsrc+"'>");//append img src to html div
        }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
