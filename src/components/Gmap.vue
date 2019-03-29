<template>
  <div class="google-map" id="map"></div>
</template>

<style>  
.google-map {
  height: 500px;
  width: 500px;
  position: absolute;
  top: 100px;
}
</style> 

<script> 
export default {
  name: 'Gmap',
  data(){
    return{
      // element: '#map',
      // options:{
      //   zoom: 1,
      //   center: new google.maps.LatLng(0,0)
      // }
    }
  },
  created:function(){
    // var map = new google.maps.Map(this.element, this.options);
  }
};
</script>  
