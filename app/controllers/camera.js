/**
 * @author Arun Kumar Mannava
 */
function openCamera(e)
{
	Titanium.Media.showCamera({
	success:function(event) {
		// called when media returned from the camera
		Ti.API.debug('Our type was: '+event.mediaType);
		if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
			var imageView = Ti.UI.createImageView({
				image:event.media
			});
			
			var selectedImage = Alloy.createController('selectedImage').getView();
			selectedImage.add(imageView);
			
			var navGroup = Titanium.UI.iOS.createNavigationWindow({
  		 		window: selectedImage
			});
			Alloy.Globals.Navigator.open("selectedImage", {});
			//navGroup.open();
			
		} else {
			alert("got the wrong type back ="+event.mediaType);
		}
	},
	cancel:function() {
		// called when user cancels taking a picture
	},
	error:function(error) {
		// called when there's an error
		var a = Titanium.UI.createAlertDialog({title:'Camera'});
		if (error.code == Titanium.Media.NO_CAMERA) {
			a.setMessage('Please run this test on device');
		} else {
			a.setMessage('Unexpected error: ' + error.code);
		}
		a.show();
	},
	saveToPhotoGallery:true,
    // allowEditing and mediaTypes are iOS-only settings
	allowEditing:true,
	mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO]
});
}


function openGallery(e)
{
	Titanium.Media.openPhotoGallery({
	success:function(event) {
		// called when media returned from the camera
		Ti.API.debug('Our type was: '+event.mediaType);
		if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
			var imageView = Ti.UI.createImageView({
				image:event.media
			});
			
			var selectedImage = Alloy.createController('selectedImage').getView();
			selectedImage.add (imageView);
			
			var navGroup = Titanium.UI.iOS.createNavigationWindow({
  		 		window: selectedImage
			});
			//Alloy.Globals.Navigator.open("selectedImage", {arg1: imageView});
			navGroup.open({arg1: imageView});
			
		} else {
			alert("got the wrong type back ="+event.mediaType);
		}
	},
	cancel:function() {
		// called when user cancels taking a picture
	},
	error:function(error) {
		// called when there's an error
		var a = Titanium.UI.createAlertDialog({title:'Camera'});
		if (error.code == Titanium.Media.NO_CAMERA) {
			a.setMessage('Please run this test on device');
		} else {
			a.setMessage('Unexpected error: ' + error.code);
		}
		a.show();
	},
    // allowEditing and mediaTypes are iOS-only settings
	allowEditing:true,
	mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO]
});
}
