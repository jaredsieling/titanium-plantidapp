
var _args = arguments[0] || {}, // Any passed in arguments will fall into this property
	App = Alloy.Globals.App, // reference to the APP singleton object
	userPlants = null,  // Array placeholder for all users
	indexes = [];  // Array placeholder for the ListView Index (used by iOS only);
	
var userPlants = _args.userPlants;
	
function initListView() {
	var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory + "userPlantData/samples.json");
	userPlants = JSON.parse(file.read().text).userPlants;
	userPlants = _.sortBy(plant, function(plant) {
		return plant.name;
	});
	
	if (userPlants) {

		indexes = [];
		var sections = [];

		var plantGroups = _.groupBy(userPlants, function(item) {
			return item.group;
		});

		_.each(plantGroups, function(group) {
			var dataToAdd = _.map(rawData, function(item) {
				return {
					template : "userPlantTemplate",
					properties : {
						userPlant : item,
					},
					name : {
						text : item.company
					},
					photo : {
						image : item.photo
					}
				};
			});

			if (dataToAdd.length < 1)
				return;
			indexes.push({
				index : indexes.length,
				title : group[0].group
			});

			/**
			 * Create the ListViewSection header view
			 * DOCS: http://docs.appcelerator.com/platform/latest/#!/api/Titanium.UI.ListSection-property-headerView
			 */

			var sectionHeader = Ti.UI.createView({
				backgroundColor : "#ececec",
				width : Ti.UI.FILL,
				height : 30
			});
			var sectionLabel = Ti.UI.createLabel({
				text : group[0].lastName.charAt(0),
				left : 20,
				font : {
					fontSize : 20
				},
				color : "#666"
			});
			sectionHeader.add(sectionLabel);

			var section = Ti.UI.createListSection({
				headerView : sectionHeader
			});
			section.items = dataToAdd;
			sections.push(section);
		});

		$.listView.sections = sections;

		/**
		 * For iOS, we add an event listener on the swipe of the ListView to display the index of the ListView we
		 * created above. The `sectionIndexTitles` property is only valid on iOS, so we put these handlers in the iOS block.
		 */
		if (OS_IOS) {
			$.wrapper.addEventListener("swipe", function(e) {
				if (e.direction === "left") {
					$.listView.sectionIndexTitles = indexes;
				}
				if (e.direction === "right") {
					$.listView.sectionIndexTitles = null;
				}
			});
		}
	}

	/**
	 * Check to see if the `restrictToFavorites` flag has been passed in as an argument, and
	 * hide the favorite icon accordingly
	 */
	if (_args.restrictToFavorites) {
		OS_IOS && ($.searchBar.showBookmark = false);

	} else {

		if (OS_IOS) {
			$.wrapper.leftNavButton = Ti.UI.createLabel({
				text : "\ue601",
				color : "#C41230",
				font : {
					fontFamily : "icomoon",
					fontSize : 36
				}
			});
		}
	}

};

var preprocessForListView = function(rawData) {

	/**
	 * Using the rawData collection, we map data properties of the users in this array to an array that maps an array to properly
	 * display the data in the ListView based on the templates defined in index.xml
	 */
	return _.map(rawData, function(item) {
		return {
			template : isFavorite ? "favoriteTemplate" : "userTemplate",
			properties : {
				searchableText : item.firstName + ' ' + item.lastName + ' ' + item.company + ' ' + item.email,
				user : item,
				editActions : [{
					title : isFavorite ? "- Favorite" : "+ Favorite",
					color : isFavorite ? "#C41230" : "#038BC8"
				}],
				canEdit : true
			},
			userName : {
				text : item.firstName + " " + item.lastName
			},
			userCompany : {
				text : item.company
			},
			userPhoto : {
				image : item.photo
			},
			userEmail : {
				text : item.email
			}
		};
	});
};

function initMap() {

	// NEW (iOS, Android): Add one or more - addCircles() - to a map
	$.map.addCircle(Alloy.Globals.map.createCircle({
		center : {
			longitude : -122.0502150,
			latitude : 37.3895100
		},
		strokeColor : Alloy.CFG.brandPrimary,
		strokeWidth : 5,
		fillColor : Alloy.CFG.brandPrimary.replace('#', '#88'),
		radius : 10000
	}));

	// NEW (iOS, Android): Add one or more - addPolylines() - to a map
	$.map.addPolyline(Alloy.Globals.map.createPolyline({
		points : [

		// can be an array
		[-122.0841890, 37.4223450], // Google HQ

		// or an object
		{
			longitude : -122.0502150, // Appcelerator HQ
			latitude : 37.3895100
		}, [-122.0301890, 37.3316920] // Apple HQ

		],
		strokeColor : '#337ab7',
		strokeWidth : 5
	}));

	// NEW (iOS, Android): Add one or more - addPolygons() - to a map
	$.map.addPolygon(Alloy.Globals.map.createPolygon({
		points : [[-122.0546632, 37.4365219], [-122.0107179, 37.4362493], [-122.0344072, 37.4594175]],
		strokeColor : '#5cb85c',
		strokeWidth : 5,
		fillColor : '#885cb85c'
	}));
}

function initOther() {

	// NEW (iOS, Android): Catch uncaught exceptions
	Ti.App.addEventListener('uncaughtException', function(e) {
		console.info('[uncaughtException ' + JSON.stringify(e, null, 2));

		// in development on iOS the red error screen will prevent our alert
		// from showing so we wait until the screen has been closed by the user.
		if (OS_IOS && !ENV_PROD) {
			$.otherWin.addEventListener('focus', function onFocus() {
				$.otherWin.removeEventListener('focus', onFocus);

				Ti.UI.createAlertDialog({
					title : 'uncaughtException worked:',
					message : JSON.stringify(e)
				}).show();
			});

		} else {
			Ti.UI.createAlertDialog({
				title : 'uncaughtException worked:',
				message : JSON.stringify(e)
			}).show();
		}
	});
}

function onUserPlantClick(e) {
	var item = $.listView.sections[e.sectionIndex].items[e.itemIndex];

	/**
	 * Open the details view, and pass in the data for this plant
	 */
	Alloy.Globals.Navigator.open("userPlantDetails", item);
}

// NEW (iOS, Android): Event that fires after user interacts with a custom row action
function onRowAction(e) {
	console.info('[rowAction] ' + JSON.stringify(e, null, 2));

	$.toast.text = '[marker]\n' + e.action;
}

// NEW (iOS, Android): Event that fires when scrolling starts
function onScrollstart(e) {
	console.info('[scrollstart] ' + JSON.stringify(e, null, 2));

	$.toast.text = '[scrollstart]\nfirstVisibleSectionIndex: ' + e.firstVisibleSectionIndex + '\nfirstVisibleItemIndex: ' + e.firstVisibleItemIndex + '\nvisibleItemCount: ' + e.visibleItemCount;
}

// NEW (iOS, Android): Event that fires when scrolling ends (either by stopping or after flinging it)
function onScrollend(e) {
	console.info('[scrollend] ' + JSON.stringify(e, null, 2));

	$.toast.text = '[scrollend]\nfirstVisibleSectionIndex: ' + e.firstVisibleSectionIndex + '\nfirstVisibleItemIndex: ' + e.firstVisibleItemIndex + '\nvisibleItemCount: ' + e.visibleItemCount;
}

function onMarker(e) {
	console.info('[marker] ' + JSON.stringify(e, null, 2));

	$.toast.text = '[marker]\nsectionIndex: ' + e.sectionIndex + '\nitemIndex: ' + e.itemIndex;
}

function doUncaughtException(e) {
	Titanium.Media.showCamera({
		success : function(event) {
			// called when media returned from the camera
			Ti.API.debug('Our type was: ' + event.mediaType);
			if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				var imageView = Ti.UI.createImageView({
					width : win.width,
					height : win.height,
					image : event.media
				});
				win.add(imageView);
			} else {
				alert("got the wrong type back =" + event.mediaType);
			}
		},
		cancel : function() {
			// called when user cancels taking a picture
		},
		error : function(error) {
			// called when there's an error
			var a = Titanium.UI.createAlertDialog({
				title : 'Camera'
			});
			if (error.code == Titanium.Media.NO_CAMERA) {
				a.setMessage('Please run this test on device');
			} else {
				a.setMessage('Unexpected error: ' + error.code);
			}
			a.show();
		},
		saveToPhotoGallery : true,
		// allowEditing and mediaTypes are iOS-only settings
		allowEditing : true,
		mediaTypes : [Ti.Media.MEDIA_TYPE_VIDEO, Ti.Media.MEDIA_TYPE_PHOTO]
	});
}

/*
 * Initialize the views
 */
initListView();
initOther();
initMap();

$.index.open();