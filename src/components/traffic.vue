<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="trafficBox">
     <div class="walkerBox">
       <div class="walker"></div>
        <div >进入： xxx</div>
        <div >进出： xxx</div>
        <div class="lineBox" id ="walkerShow">
          <!-- echarts图 -->
        </div>
     </div>
     <div class="bikeBox">
       <div class="bike"></div>
         <div >进入： xxx</div>
        <div >进出： xxx</div>
          <div class="lineBox" id ="bikeShow">
          <!-- echarts图 -->
        </div>
     </div>
    </div>
    <!-- <h2>Essential Links</h2> -->

  </div>
</template>

<script>
import echarts from 'echarts';
import axios from 'axios';
const text =
{
  inNum: '进：',
  outNume: '出：',
  Unit1: '人'
  // '风&nbsp;&nbsp;速',
  // '空气质量',
  // '噪&nbsp;&nbsp;音'

}

 export default {
  name: 'HelloWorld',
  data () {
    return {
      text,
      // msg: 'Welcome to Your Vue.js App'
      msg: '流量统计情况'
    }
  },
  methods:{
    getData () {
      let url = 'http://china.eco-counter-tools.com/api/aladdin/1.0.0/languages'
      axios.get(url).then(res => {
        let {data} = res
        console.log(data)
      }).catch(_ => console.log(_))
    },
    drawLine () {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('walkerShow'))
        let myChart2 = echarts.init(document.getElementById('bikeShow'))
        // 绘制图表
        myChart.setOption({
            title: { text: '人流量统计' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'line',
                smooth: true,
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
        myChart2.setOption({
            title: { text: '车流量统计' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'line',
                smooth: true,
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }

  },
  mounted(){
      this.getData()
      this.drawLine()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = "less">
.hello{
  height: 100%;
}
.walkerBox
{
   border: 1px solid #000;
   height: 50%;
   margin-bottom: 20px;
}
.bikeBox{
  border: 1px solid #000;
  height: 50%;
}
.trafficBox{
  height: 100%;
}
.walker{
  width: 32px;
  height: 32px;
  float: left;
  background: url(../images/walker.png) no-repeat center;
}
.bike{
  width: 32px;
  height: 32px;
  float: left;
  background: url(../images/bike.png) no-repeat center;
}
.lineBox{
  /* border: 1px solid red; */
  height: 300px;
}
</style>
