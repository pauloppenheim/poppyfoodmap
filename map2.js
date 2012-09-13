

map2 = {};
var map2_data = require("map2_data");

/***********************************************************
Helpers
***********************************************************/


function get_meters_from_miles(miles) {
	return 1609.344 * miles;
}


function get_miles_from_meters(meters) {
	return meters / 1609.344;
}


function degrees_to_radians(deg) {
	return deg/180*Math.PI;
}


function haversine_distance_meters(lat1, lon1, lat2, lon2) {
	// courtesy http://www.movable-type.co.uk/scripts/latlong.html
	// courtesy https://en.wikipedia.org/wiki/Haversine_formula
	lat1 = parseFloat(lat1);
	lon1 = parseFloat(lon1);
	lat2 = parseFloat(lat2);
	lon2 = parseFloat(lon2);
	var R = 6367500; // earth radius in meters
	var dLat = degrees_to_radians(lat2-lat1);
	var dLon = degrees_to_radians(lon2-lon1);
	var lat1 = degrees_to_radians(lat1);
	var lat2 = degrees_to_radians(lat2);
	
	var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
			Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var d = R * c;
	return d;
}


// from http://javascript.crockford.com/remedial.html
function typeOf(value) {
    var s = typeof value;
    if (s === 'object') {
        if (value) {
            if (Object.prototype.toString.call(value) == '[object Array]') {
                s = 'array';
            }
        } else {
            s = 'null';
        }
    }
    return s;
}


/***********************************************************
Updates
***********************************************************/


function draw_user_loc(lat, lon, search_radius, zoom) {
	var myLatlng = new google.maps.LatLng(lat, lon);
	map2['map'].panTo(myLatlng);
	map2['userloc_marker'].setPosition(myLatlng);
	map2['radius_circle'].setCenter(myLatlng);
	map2['radius_circle'].setRadius(search_radius);
	var e = document.getElementById("infowindow_userloc_coord");
	e.textContent = "lat: " + lat.toString() + " lon: " + lon.toString();
}


function remove_markers(markers) {
	for (var i in markers) {
		markers[i].setMap(null);
	}
}


function draw_nearby_points(nearby_points) {
	var lat = map2["lat"];
	var lon = map2["lon"];
	var addy_rev_lookup = map2["addy_rev_lookup"];
	var map = map2["map"];
	var old_markers = map2["nearby_point_markers"];
	remove_markers(old_markers);
	var nearby_point_markers = {};
	var infowindow = map2["infowindow"];
	
	for (var i in nearby_points) {
		var addy = nearby_points[i];
		var loc = map2['address_geocodes'][addy][0]['geometry']['location'];
		var dist = haversine_distance_meters(lat, lon, loc.Xa, loc.Ya);
		
		// get the list of vendors before doing dedup
		var vend_ids = [];
		var vend_dict = {};
		if (addy_rev_lookup[addy]) {
			vend_dict = addy_rev_lookup[addy];
			vend_ids = Object.keys(vend_dict);
		}
		
		// Need to dedup the different typings of the same address
		var make_marker = true;
		for (var j = 0; j < i; j++) {
			var prev_addy = nearby_points[j];
			var prev_loc = map2['address_geocodes'][prev_addy][0]['geometry']['location'];
			var prev_dist = haversine_distance_meters(loc.Xa, loc.Ya, prev_loc.Xa, prev_loc.Ya);
			if (prev_dist < 5) {
				// if less than 5 meters, just call it the same point.
				addy = prev_addy;
				loc = prev_loc;
				make_marker = false;
				if (addy_rev_lookup[addy]) {
					// Update the rev_lookup db, then move to use it
					for (var attrname in vend_dict) { addy_rev_lookup[addy][attrname] = vend_dict[attrname]; }
					vend_dict = addy_rev_lookup[addy];
					vend_ids = Object.keys(vend_dict);
				}
				break;
			}
		}
		
		//console.debug(addy + " loc (" + loc.Xa.toString() + ", " + loc.Ya.toString() + ") dist " + get_miles_from_meters(dist).toString());
		
		// Make a marker object, or look up an existing one
		var marker = null;
		if (make_marker) {
			var pos = new google.maps.LatLng(loc.Xa, loc.Ya);
			marker = new google.maps.Marker({
				position: pos,
				icon: "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|5577FF|333333",
				title: addy
			});
			marker.setMap(map);
			nearby_point_markers[addy] = marker;
		}
		else {
			marker = nearby_point_markers[addy];
		}
		
		function venditem(venslug, venname) {
			return "<li class='pickup_listitem'><a href='https://www.goodeggs.com/" + venslug + "'>" + venname + "</a></li>";
		}
		var infohtml = '<div>'
		infohtml += "<h2 class='pickup_markerhead'>" + addy + " </h2>"
		infohtml += "<p class='pickup_moreinfo'><a href='http://maps.google.com/maps?q=\"" + addy + "\"'>more info »</a></p>"
		infohtml += "<p><img src='https://goodeggs-1.a.ssl.fastly.net/img/e83be868546b08d18f23044bdd95f4ad/favicon.png' height=15 width=15> Vendors at this pickup:</p>";
		infohtml += "<ul class='pickup_list'>"
		for (i in vend_ids) {
			var vendloc = vend_dict[vend_ids[i]];
			infohtml += venditem(vendloc["vendorslug"], vendloc["vendorname"]);
		}
		infohtml += "</ul>&nbsp;";
		infohtml += "</div>";
		
		google.maps.event.addListener(marker, 'click', function(i, m){
			return function(){infowindow.open(map, m); infowindow.setContent(i);};
		}(infohtml, marker) );
	}
	map2["nearby_point_markers"] = nearby_point_markers;
}


function do_nearby_points(lat, lon, search_radius) {
	// need point DB
	if (!check_point_db_ready()) {
		console.debug("need point DB first");
	}
	else {
		var nearby_points = []
		for (var i in map2['address_geocodes']) {
			var loc = map2['address_geocodes'][i][0]['geometry']['location'];
			var dist = haversine_distance_meters(lat, lon, loc.Xa, loc.Ya);
			if (dist < search_radius) {
				nearby_points.push(i);
			}
		}
		draw_nearby_points(nearby_points);
	}
}


function set_user_loc(lat, lon) {
	map2['lat'] = lat;
	map2['lon'] = lon;
	draw_user_loc(map2['lat'], map2['lon'], map2['search_radius'], map2['zoom']);
	// Fan out; async operations for all neighbors
	// (unfortunately, for code clarity)
	do_nearby_points(map2['lat'], map2['lon'], map2['search_radius']);
	if (!map2['been_refreshed']) {
		// keeps fresh for maasive async load
		map2['been_refreshed'] = true;
		setTimeout(function(){set_user_loc(map2['lat'], map2['lon']);}, 5000);
	}
}



/***********************************************************
User Geolocation
***********************************************************/


function have_geoloc(position) {
	set_user_loc(position.coords.latitude, position.coords.longitude);
}


function error_on_geoloc(error) {
	set_user_loc(map2['lat'], map2['lon']);
}


function get_geoloc() {
	if ("geolocation" in navigator) {
		/* geolocation is available */
		var wpid = navigator.geolocation.watchPosition(have_geoloc, error_on_geoloc, {enableHighAccuracy:false, maximumAge:30000, timeout:1000});
	} else {
		set_user_loc(map2['lat'], map2['lon']);
	}
}



/***********************************************************
Initialization - Point DB / Address Geocoding
***********************************************************/


function geocoding_result(data, status, orig_address) {
	console.debug("Fetched Geocode - cache it to avoid google's geocode banhammer");
	console.debug(status);
	console.debug(data);
	console.debug(JSON.stringify(orig_address));
	console.debug(JSON.stringify(data));
	if (status === "OK") {
		map2['address_geocodes'][orig_address] = data;
	}
}


function do_geocoding(address, index) {
	var geocoder = map2['geocoder'];
	var cache = map2['address_geocodes'][address];
	if (cache !== undefined) {
		//console.debug(cache);
	}
	else {
		var req = {'address': address};
		// make a closure to keep the original address in callback
		// (silly google)
		//geocoder.geocode(req, function(data, status){geocoding_result(data, status, address)});
		map2['address_geocodes'][address] = "waiting";
		setTimeout(function(){geocoder.geocode(req, function(data, status){geocoding_result(data, status, address)});}, index * 500);
	}
}


function check_point_db_ready(menus) {
	for (var i in menus) {
		for (var j in menus[i]['pickups']) {
			var address = menus[i]['pickups'][j]['location']['address'];
			var cache = map2['address_geocodes'][address];
			if (cache === undefined || cache === "waiting") {
				return false;
			}
		}
	}
	return true;
}


function build_point_db(menus) {
	// Might need async callout, can't just return something.
	
	// get pickup locations
	for (var i in menus) {
		var menuid = menus[i]['_id'];
		var vendorid = menus[i]['vendor']['_id'];
		var vendorname = menus[i]['vendor']['name'];
		var vendorslug = menus[i]['vendor']['slug'];
		for (var j in menus[i]['pickups']) {
			var address = menus[i]['pickups'][j]['location']['address'];
			if (!address) {
				continue;
			}
			// add vendor to reverse-lookup addy space
			var vendor = {
				"menuid": menuid,
				"vendorid": vendorid,
				"vendorname": vendorname,
				"vendorslug": vendorslug
			};
			if (map2['addy_rev_lookup'][address]) {
				if (map2['addy_rev_lookup'][address][vendorid]) {
					// add menu?
				}
				else {
					map2['addy_rev_lookup'][address][vendorid] = vendor;
				}
			}
			else {
				map2['addy_rev_lookup'][address] = {};
				map2['addy_rev_lookup'][address][vendorid] = vendor;
			}
			// and get that addy coord!
			do_geocoding(address, i);
		}
	}
}



/***********************************************************
Initialization
***********************************************************/


function google_map_init(lat, lon, search_radius, zoom) {
	var myLatlng = new google.maps.LatLng(lat, lon);
	
	var mapOptions = {
		center: myLatlng,
		zoom: zoom,
		//mapTypeId: google.maps.MapTypeId.ROADMAP
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
	
	var marker = new google.maps.Marker({
		position: myLatlng,
		icon: "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FF7755|333333",
		title:"Your Location"
	});
	marker.setMap(map);
	
	var radius = search_radius;
	var radius_opts =	{
		strokeColor: "#FF0000",
		strokeOpacity: 0.2,
		strokeWeight: 2,
		fillColor: "#FF0000",
		fillOpacity: 0.1,
		center: myLatlng,
		radius: radius
	}
	var circle = new google.maps.Circle(radius_opts);
	circle.setMap(map);
	
	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
		infowindow.setContent(document.getElementById("infowindow_userloc").cloneNode(true));
	});
	
	var geocoder = new google.maps.Geocoder();
	
	map2['map'] = map;
	map2['userloc_marker'] = marker;
	map2['radius_circle'] = circle;
	map2['infowindow'] = infowindow;
	map2['geocoder'] = geocoder;
}


function maps_ready() {
	google_map_init(map2['lat'], map2['lon'], map2['search_radius'], map2['zoom']);
	set_user_loc(map2['lat'], map2['lon']);
	// Set loc first so the default view has something
	get_geoloc();
	console.debug("Local Food Mapping - Stage 2 Initialization Complete");
}


// OOooh, async loads!
function load_google_maps_script() {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "https://maps.googleapis.com/maps/api/js?sensor=true&callback=maps_ready";
	document.head.appendChild(script);
}


function load_mocha_testing() {
	// Would be cool if this didn't need jquery.
	$(function(){
		mocha
			.globals(['google', 'console', 'map2', '__e3_', '_xdc_']) // acceptable globals
			.run()
	})
}


function load_goodeggs_menus() {
	var head = document.getElementsByTagName('head')[0],
		script = document.createElement('script'),
		url = "https://www.goodeggs.com/menus?callback=build_point_db",
		id = "goodeggs_menus";
	
	script.src = url;
	script.id = id;
	script.type= 'text/javascript';
	head.appendChild(script);
}


function food_map_init() {
	map2['lat'] = 37.7793;
	map2['lon'] = -122.4192;
	map2['zoom'] = 12;
	map2['search_radius'] = get_meters_from_miles(1.5);
	map2['address_geocodes'] = {};
	map2['address_geocodes'] = build_address_geocodes_cache();
	map2['addy_rev_lookup'] = {};
	load_google_maps_script();
	// more init in maps_ready after map load
	load_goodeggs_menus();
	//build_point_db(fakemenus());
	if (location.hash.search("test") > -1) {
		load_mocha_testing();
		document.getElementById("mocha").style.display = "block";
	}
	console.debug("Local Food Mapping - Stage 1 Initialized");
}



