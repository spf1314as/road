<template>
  <div class="one-container">
    <div class="above">
      <!-- 左侧gif -->
      <div class="left-wrapper">
        <img src="../images/rain.png" alt="">
      </div>
      <!-- 右侧四个 -->
      <div class="right-wrapper">
        <ul class="item-wrapper">
          <li class="item" v-for="(value, key, index) in weatherData" :key='key'>
            <div class='icon-wrapper'>
            </div>
            <div class='detail'>
                <p class='value'>
                  {{value}}
                </p>
                <p class="text" v-html="text[index]"></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 下面三个 -->
    <div class="bottom">
      <div class="item" v-for="item in 3" :key='item'>
          {{item}}
      </div>
    </div>

  </div>
</template>

<script>
import axios  from 'axios'

const text = [
  '温&nbsp;&nbsp;度',
  '风&nbsp;&nbsp;速',
  '空气质量',
  '噪&nbsp;&nbsp;音'
]
export default {
  name: 'HelloWorld',
  data () {
    return {
      text,
      weatherData: {
        temperature: 50,
        wind: 12,
        quality: 330,
        noice: 50,
      }
    }
  },
  methods: {
    getData () {
      let url = 'http://china.eco-counter-tools.com/api/aladdin/1.0.0/languages'
      axios.get(url).then(res => {
        let {data} = res
        console.log(data)
      }).catch(_ => console.log(_))
    }
  },
  mounted () {
    // this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = "less">
  .transY () {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .one-container{
    height: 100%;
    background: #DDE5CB;
    &:after{
      display: block;
      content: '';
      clear: both;
    }
    .above{
      height: 85%;
      .left-wrapper,.right-wrapper{
        float: left;
        height: 100%;
      }
      .left-wrapper{
        width: percentage(350/800);;
        /* position: relative; */
        display:flex;
        justify-content: center;
        align-items: center;
        img{
          /* position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%); */
          width: 50%;
        }
      }
      .right-wrapper{ //80 + 333 /800
        width: percentage(450/800);
        box-sizing: border-box;
        position: relative;
        .item-wrapper{ // 333/800
          list-style-type: none;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: percentage(333/413);
          &:after{
            display: block;
            content: '';
            clear: both;
          }
          .item{ // width 160
            width:48%;
            padding-top: 40.1472064236%;
            margin-bottom: 2%;
            margin-right: 2%;
            background: #CFD4C0;
            position: relative;
            float: left;
            .icon-wrapper {
              width: percentage(62/160);
              padding-top: percentage(62/160);
              .transY;
              background:#757E69;
            }
            .detail{
              width: percentage(98/160);
              left: percentage(62/160);
              .transY;
              .value{
                font-size: 56px;
                font-weight: bold;
                white-space: nowrap;
                &:after{
                  font-size: 32px;
                  font-weight: normal;
                  content:'℃';
                  position: relative;
                  left: -9%;
                }
              }
              .text{
                padding-left: 10px;
                font-size:32px;
                line-height: 1.2;
                color: #3D432F;
              }
            }
            &:nth-child(2) .detail .value:after{
            content:'m/s';
            }
            &:nth-child(3),&:nth-child(4){
              margin-bottom: 0;
            }
            &:nth-child(3) .detail .value:after{
              content:'ug/m³';
            }
            &:nth-child(4) .detail .value:after{
              content:'dB';
            }
          }

        }
      }
    }
    .bottom {
      height: 15%;
      background: #8E9A79;
      display: flex;
      .item{
        box-sizing: border-box;
        width: 33.3%;
        border-right: 2px solid white;
        font-size: 60px;
        text-align: center;
        &:last-child{
          border: none;
        }
      }
    }
  }
</style>
