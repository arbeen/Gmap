<template>
  <div id="app">
    <navbar />
    <div class="mdc-layout-grid">
      <div class="mdc-layout-grid__inner">
        <div class="mdc-layout-grid__cell"><Gmap /></div>
        <div class="mdc-layout-grid__cell"><WeatherBox ref="WeatherBox"></WeatherBox></div>
      </div>
    </div>
  </div>
</template>

<style>
*{
  margin:0;
  padding:0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
import Gmap from './components/Gmap.vue'
import navbar from './components/navbar.vue'
import WeatherBox from './components/WeatherBox.vue'

export default {
  name: 'app',
  components: {
    Gmap,
    navbar,
    WeatherBox
  }
}
</script>
