'use strict';

/*
 * Initialize map
 */
var viewCenter = [51.9133, 4.4947];
var viewSouthWest = L.latLng(0, -125.0);
var viewNorthEast = L.latLng(80.0, 60.0);
var viewBounds = L.latLngBounds(viewSouthWest, viewNorthEast);
var map = L.map('map', {
	zoom: 19,
	minZoom: 4,
	maxZoom: 25,
	center: viewCenter,
	maxBounds: viewBounds,
});

var baseLayer = L.tileLayer('https://service.pdok.nl/hwh/luchtfotorgb/wmts/v1_0/2023_quick_orthoHR/EPSG:3857/{z}/{x}/{y}.png', {
	maxNativeZoom: 20, // set the maximum zoom level at which the tiles are available
	maxZoom: 25, // set the maximum zoom level at which the map can be displayed
});


var compareLayer = L.tileLayer('https://api.maptiler.com/tiles/0bd4e0b2-fd9e-40be-be22-052cf984b5c6/{z}/{x}/{y}.png?key=hV04Qt1KNH7EvsutoWv4', {
	maxNativeZoom: 21, // set the maximum zoom level at which the tiles are available
	maxZoom: 25, // set the maximum zoom level at which the map can be displayed
});

baseLayer.addTo(map);
compareLayer.addTo(map);
/*
 * Add Layer swiper
 */
var swipeLyrConf = {base:{layer:baseLayer,clip:null},compare:{layer:compareLayer,clip:null}};
/*var lyrSwiper = L.control.layerSwiper({
	orientation:'v',
	ratio:0.5,
	swipeLyrConf:swipeLyrConf
}).addTo(map);*/

var lyrSwiper = L.control.layerSwiper({
	orientation:'v',
	position:'topleft',
	ratio:0.5,
	swipeLyrConf:swipeLyrConf
}).addTo(map);