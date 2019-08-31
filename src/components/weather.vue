<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="trafficBox">
     <div class="walkerBox">
       人步行的标志
     </div>
     <div class="bikeBox">
       骑自行车的标志
     </div>
    </div>
    <!-- <h2>Essential Links</h2> -->

  </div>
</template>

<script>
import echarts from 'echarts';
export default {
  name: 'HelloWorld',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = "less">
.walkerBox
{
   border: 1px solid red;
   height: 100px;
}
.bikeBox{
  border: 1px solid red;
  height: 100px;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
