<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <!-- <Weather/> -->
    <One/>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Weather: _ => import('./components/weather.vue'),
    One: _ => import('./components/one')
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html, body{
  height: 100%;
  width: 100%;

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
