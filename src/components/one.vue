<template>
  <div class="one-container">
    <div class="above">
      <div class="left-wrapper">
        <img src="../images/rain.png" alt="">
      </div>
      <div class="right-wrapper">
        <ul class="item-wrapper">
          <li class="item" v-for="item in 4" :key='item'>{{item}}</li>
        </ul>
      </div>
    </div>
    <div class="bottom">
      <div class="item" v-for="item in 3" :key='item'>
          {{item}}
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = "less">
  .one-container{
    height: 100%;
    background: rgb(216, 238, 187);
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
        width: 50%;
        position: relative;
        img{
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 50%;
        }
      }
      .right-wrapper{
        width: 50%;
        box-sizing: border-box;
        padding:10% 5% 5%;
        .item-wrapper{
          height: 100%;
          list-style-type: none;
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-wrap: wrap;
          .item{
            width:48%;
            height: 48%;
            background: rgb(180, 189, 175);
          }
        }
      }
    }
    .bottom {
      height: 15%;
      background: rgb(106, 126, 83);
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
