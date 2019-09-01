<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="trafficBox">
     <div class="walkerBox">
       <div class="walker"></div>
        <!-- <div >进入： xxx</div>
        <div >进出： xxx</div> -->
        <p class="msgBar">进入： {{data.inWalker}} 进出： {{data.outWalker}}</p>
        <div class="lineBox" id ="walkerShow">
          <!-- echarts图 -->
        </div>
     </div>
     <div class="bikeBox">
       <div class="bike"></div>
         <!-- <div >进入： xxx</div>
        <div >进出： xxx</div> -->
          <p class="msgBar">进入： {{data.inBike}} 进出： {{data.outBike}}</p>
          <div class="lineBox" id ="bikeShow">
          <!-- echarts图 -->
        </div>
     </div>
    </div>
    <!-- <h2>Essential Links</h2> -->

  </div>
</template>

<script>
//第二个人流量车流量统计页面
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
      msg: '流量统计情况',
      data: {
         inWalker: '',
          outWalker: '',
          inBike: '',
          outBike: '',
          walkerData:{
            timedata:[

            ],
            valdata:[

            ]
          },
          bikeData:{
            timedata:[

            ],
            valdata:[

            ]
          }

      }
    }
  },
  methods:{
    getData () {
      let url = 'http://china.eco-counter-tools.com/api/aladdin/1.0.0/languages'
      axios.get(url).then(res => {
        // let {data} = res;

        // this.data = res.data;
        this.data = {
          inWalker: 12,
          outWalker: 13,
          inBike: 14,
          outBike: 15,
          walkerData:{
            timedata:[
              '2019-8-31 18:00:00',
              '2019-8-31 18:05:00',
              '2019-8-31 18:10:00',
              '2019-8-31 18:15:00'
            ],
            valdata:[
              20,30,70,10
            ]
          },
          bikeData:{
            timedata:[
              '2019-8-31 18:00:00',
              '2019-8-31 18:05:00',
              '2019-8-31 18:10:00',
              '2019-8-31 18:15:00'
            ],
            valdata:[
               20,30,70,10
            ]
          }
        };
        this.drawLine(this.data);
        console.log(data)
      }).catch(_ => console.log(_))
    },
    drawLine (oData) {
        // 初始化echarts实例
        let myChart = echarts.init(document.getElementById('walkerShow'))
        let myChart2 = echarts.init(document.getElementById('bikeShow'))
        let walkerAxis = oData.walkerData.timedata || [];
        let walkerData = oData.walkerData.valdata || [];
         let bikeAxis = oData.bikeData.timedata || [];
        let bikeData = oData.bikeData.valdata || [];
        // 绘制图表
        myChart.setOption({
            // title: { text: '人流量统计' },
            tooltip: {},
            xAxis: {
                data: walkerAxis
            },
            yAxis: {},
            series: [{
                name: 'walker',
                type: 'line',
                smooth: true,
                data: walkerData
            }]
        });
        myChart2.setOption({
            // title: { text: '车流量统计' },
            tooltip: {},
            xAxis: {
                data: bikeAxis
            },
            yAxis: {},
            series: [{
                name: 'bike',
                type: 'line',
                smooth: true,
                data: bikeData
            }]
        });
    }

  },
  mounted(){
      this.getData()
      // this.drawLine()
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
   border: 1px solid #CFD4C0;
   height: 50%;
   margin-bottom: 20px;
}
.bikeBox{
  border: 1px solid #CFD4C0;
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
.msgBar{
  margin-top: 7px;
}
</style>
