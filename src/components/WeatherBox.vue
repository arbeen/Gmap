<template>
    <div class="WeatherBox">
        <h1>The Weather of {{ timeZone }}</h1>  
        <ul class="mdc-list mdc-list--two-line">
          <li class="mdc-list-item" tabindex="0">
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">Summary of the weather</span>
              <span class="mdc-list-item__secondary-text">{{ summary }}</span>
            </span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">Temperature</span>
              <span class="mdc-list-item__secondary-text">{{ temperature }}</span>
            </span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">Humidity</span>
              <span class="mdc-list-item__secondary-text">{{ humidity }}</span>
            </span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">Wind Speed</span>
              <span class="mdc-list-item__secondary-text">{{ windSpeed }}</span>
            </span>
          </li>
        </ul>   
    </div>
</template>
<style>
.WeatherBox{
    position: relative;
    top: 100px;
    left: 60%;
    width: 120%;
    border: 2px solid #ccc;
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
                summary: '',
                temperature:'',
                humidity:'',
                windSpeed: ''
            };
        },
        methods:{
            
        }
    }
</script>

  
