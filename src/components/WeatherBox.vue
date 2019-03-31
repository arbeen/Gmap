<template>
    <div class="WeatherBox">
        <h1>The Weather of {{ timeZone }}</h1>  
        <ul class="mdc-list mdc-list--two-line">
          <li class="mdc-list-item" tabindex="0">
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text"><i class="material-icons" style="font-size:16px;">brightness_medium</i> {{ summary }}({{ icon }})</span>
              <span class="mdc-list-item__secondary-text">Summary of the weather</span>
            </span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text"><i class="material-icons" style="font-size:16px;">show_chart</i> {{ temperature }} &degF</span>
              <span class="mdc-list-item__secondary-text">Temperature</span>
            </span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text"><i class="material-icons" style="font-size:16px;">cloud_circle</i> {{ humidity }}%</span>
              <span class="mdc-list-item__secondary-text">Humidity</span>
            </span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text"><i class="material-icons" style="font-size:16px;">near_me</i>   {{ windSpeed }}mph</span>
              <span class="mdc-list-item__secondary-text">Wind Speed</span>
            </span>
            <li class="mdc-list-item">
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text"><i class="material-icons" style="font-size:16px;">publish</i>   {{ pressure }}mb</span>
              <span class="mdc-list-item__secondary-text">Atmospheric Pressure</span>
            </span>
          </li>
          </li>
        </ul>   
    </div>
</template>
<style>
.WeatherBox{
  height: 35em;
  width: 45%;
  position: absolute;
  margin-top: 4em;
  right: 2em;
  border: 1px solid #000;
  border-radius: 20px;
}
.WeatherBox span{
  font-size: 1.15em;
}
.WeatherBox h1{
  padding: 1em;
  background-color: #6200EE;
  color: #fff;
  border-radius: 20px 20px 0 0;
  font-size: 1.8em;
}
span{
    margin: 0 auto;
}

.mdc-list-item__primary-text{
  padding-bottom: 5px;
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
                icon:'Sunny',
                pressure: '1014'
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
                this.pressure = location.currently.pressure;
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

  
