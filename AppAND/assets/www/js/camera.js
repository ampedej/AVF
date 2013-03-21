/*
Week 3
Edward M Murray Jr
AVF 1303
*/
//
document.addEventListener("deviceready",onDeviceReady,false);
	function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }
    //Function vars
    var pictureSource;   
    var destinationType;

    // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64 encoded image data
      // console.log(imageData);

      // Get image handle
      //
      var smallImage = document.getElementById('smallImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
    }

    // Called when take photo button is clicked
    //
    function capturePhoto() {
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality : 75, 
	  destinationType : destinationType.DATA_URL, 
	  saveToPhotoAlbum: true });
    }

    // No photo taken
    // 
    function onFail(message) {
      alert("No photo was taken");
    }
    //Device connection function
    function checkConnection() {
        var networkState = navigator.network.connection.type;

        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.NONE]     = 'No network connection';

        alert('Connection type: ' + states[networkState]);
    }
    //Device properties function
    function DeviceProperties() {
        alert('Device Name: '     + device.name     + '\n' + 
              'Device Platform: ' + device.platform + '\n' + 
              'Device UUID: '     + device.uuid     + '\n' + 
              'Device Version: '  + device.version  + '\n');
    }
