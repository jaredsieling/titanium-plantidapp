var args = arguments[0] || {};


function init(){
			
	$.imageSpot = args.arg1;
	
	if(OS_IOS){
		$.selectedImage.rightNavButton = Ti.UI.createLabel({
			text: "\ue601",
			color: "#fff",
			font:{
				fontFamily:"icomoon",
				fontSize:36
			}
		});
		
		$.selectedImage.rightNavButton.addEventListener('click', function(e){
			var camera = Alloy.createController('camera').getView();			
			var navGroup = Titanium.UI.iOS.createNavigationWindow({
  		 		window: camera
			});
			navGroup.open();
		});
		
		$.selectedImage.leftNavButton = Ti.UI.createLabel({
			text: "Virtual Garden",
			color: "#fff",
			font:{
				fontFamily:"icomoon",
				fontSize:12
			}
		});
		
		$.selectedImage.leftNavButton.addEventListener('click', function(e){
			var directory = Alloy.createController('directory').getView();			
			var navGroup = Titanium.UI.iOS.createNavigationWindow({
  		 		window: directory
			});
			navGroup.open();
		});
	}

};

function openProfile(e)
{
	var profile = Alloy.createController('profile').getView();			
	var navGroup = Titanium.UI.iOS.createNavigationWindow({
  	 		window: profile
	});
	navGroup.open();
}

/**
 * Initialize View
 */
init();
