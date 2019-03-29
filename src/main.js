import Vue from 'vue'
import App from './App.vue'

var app = new Vue({
  render: h => h(App),
}).$mount('#app')

//To display google map
const element = document.getElementById('map');
    const options = {
      zoom: 1,
      center: new google.maps.LatLng(0,0)
    };
var map = new google.maps.Map(element, options);

// For marker
google.maps.event.addListener(map, 'click', function(event) {
	removeMarker();
 	placeMarker(map, event.latLng);
});

var markers=[];

function placeMarker(map, location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
  console.log(app);
  markers.push(marker);
  app.$children[0].$children[2].getWeather(location.lat(), location.lng());
  console.log(location.lat(), location.lng());
}

function removeMarker(){
	for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
}

//To get weather from dark sky api
// function getWeather(latt, long){
// 	fetch(`${'https://cors-anywhere.herokuapp.com/'}https://api.darksky.net/forecast/de079c455075a5cf4aa90832bb015ec4/`+latt+`,`+long)
//   	.then(res => {
//      return res.json();
// }).then(function(res) {
//     app.$children[0].$children[2].displayWeather(res);
// });
// }

// function displayWeather(location){
// 	console.log(location.timezone);
// 	console.log(location.currently.summary);
// 	app.$children[0].$children[2].summary = location.currently.summary;
// 	app.$children[0].$children[2].timeZone = location.timezone;
// 	app.$children[0].$children[2].humidity = location.currently.humidity;
// 	app.$children[0].$children[2].temperature = location.currently.temperature;
// 	app.$children[0].$children[2].windSpeed = location.currently.windSpeed;
// }
