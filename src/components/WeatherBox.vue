<template>
    <div class="WeatherBox">
        <h1>The Weather of {{ timeZone }}</h1>  
        <ul class="mdc-list mdc-list--two-line">
          <li class="mdc-list-item" tabindex="0">
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">{{ summary }}({{ icon }})</span>
              <span class="mdc-list-item__secondary-text">Summary of the weather</span>
            </span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">{{ temperature }} &degF</span>
              <span class="mdc-list-item__secondary-text">Temperature</span>
            </span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">{{ humidity }}%</span>
              <span class="mdc-list-item__secondary-text">Humidity</span>
            </span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">{{ windSpeed }}mph</span>
              <span class="mdc-list-item__secondary-text">Wind Speed</span>
            </span>
          </li>
        </ul>   
    </div>
</template>
<style>
.WeatherBox{
    position: absolute;
    top: 100px;
    right: 5em;
    width: 500px;
    height: 500px;
    border: 2px solid #ccc;
    border-radius: 10px;
}
.WeatherBox h1{
    padding: 20px;
}
span{
    margin: 0 auto;
}
</style>  
<script>
    export default {
        name: 'WeatherBox',
        data(){
            return{
                timeZone: 'the World',
                summary: 'Clear',
                temperature:'63.04',
                humidity:'0.38',
                windSpeed: '9',
                icon:'Sunny'
            };
        },
        methods:{
            displayWeather: function(location){
                console.log(location.timezone);
                console.log(location.currently.summary);
                this.summary = location.currently.summary;
                this.timeZone = location.timezone;
                this.humidity = location.currently.humidity;
                this.temperature = location.currently.temperature;
                this.windSpeed = location.currently.windSpeed;
                this.icon = location.currently.icon;
            },
            getWeather: function(latt, long){
                let _this = this;
                fetch(`${'https://cors-anywhere.herokuapp.com/'}https://api.darksky.net/forecast/de079c455075a5cf4aa90832bb015ec4/`+latt+`,`+long)
                    .then(res => {
                     return res.json();
                }).then(function(res) {
                    _this.displayWeather(res);
                });
            }
        }
    }
</script>

  
