var mainMap;

function initMap() {

	//Get a reference to the map container (div)
	var mapContainer = document.querySelector('#map-container');

	// Set some map options
	var options = {
		center: {
			lat: -41.300439,
			lng: 174.780291
		},
		zoom: 15
	};

	// Create a new Google Map
	mainMap = new google.maps.Map(mapContainer, options);

	// Now we're ready to show the store markers
	placeStoreMarkers();
}


function placeStoreMarkers() {

	// Connect to database and get the locations
	var locations = [
		{
			title: "Hataitai Shop",
			lat: -41.304199,
			lng: 174.794832
		},
		{
			title: "Petone Store",
			lat: -41.224220,
			lng: 174.882146
		},
		{
			title: "Lambton Quay Store",
			lat: -41.284934, 
			lng: 174.775541
		}
	];

	// Loop over each location
	for( var i=0;  i<locations.length; i++ ) {

		// Create a new marker
		var marker = new google.maps.Marker({
			position : {
				lat: locations[i].lat,
				lng: locations[i].lng
			},
			map: mainMap,
			title: locations[i].title
		});

	}

}