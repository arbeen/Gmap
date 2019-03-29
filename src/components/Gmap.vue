<template>
  <div class="google-map" id="map"></div>
</template>

<style>  
.google-map {
  height: 500px;
  width: 500px;
  position: absolute;
  top: 100px;
  left: 5em;
}
</style> 

<script> 
export default {
  name: 'Gmap',
  data(){
    return{
      markers: []
    }
  },
  methods:{
    placeMarker:function(map, location){
      var marker = new google.maps.Marker({
        position: location,
        map: map
      });
      this.markers.push(marker);
      this.$parent.$refs.WeatherBox.getWeather(location.lat(), location.lng());
      console.log(location.lat(), location.lng());
    },
    removeMarker: function(){
      console.log(this.markers.length);
      for (var i = 0; i < this.markers.length; i++) {
        console.log(this.markers[i]);
        this.markers[i].setMap(null);
      }
    }
  },
  mounted:function(){
    const element = document.getElementById('map');
    const options = {
      zoom: 1,
      center: new google.maps.LatLng(0,0)
    }
    var map = new google.maps.Map(element, options);
    var _this = this;
    google.maps.event.addListener(map, 'click', function(event) {
      _this.removeMarker();
      _this.placeMarker(map, event.latLng);
    });

  }
  
};
</script>  
