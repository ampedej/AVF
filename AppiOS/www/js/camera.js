/*
Project 4
Edward M Murray Jr
ASD 1301
*/
//
document.addEventListener("deviceready",onDeviceReady,false);
	function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }
    
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
