<template>
  <div class="video-page">
    <div id="video-container">
      <video id="myVideo" class="video-js vjs-big-play-centered vjs-fluid">
        <p class="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to a
          web browser that
          <a href="https://videojs.com/html5-video-support/" target="_blank">
            supports HTML5 video
          </a>
        </p>
      </video>
    </div>
    <ul class="video-list" >
      <li class="item" v-for="item in 6" :key="item" @click="autoPlay">
        {{item}}
      </li>
    </ul>
    <button id="btn" @click="autoPlay">
    </button>
  </div>
</template>

<script>
import videojs from 'video.js'
/* 不能直接引入js，否则会报错：videojs is not defined
import 'video.js/dist/lang/zh-CN.js' */
import video_zhCN from 'video.js/dist/lang/zh-CN.json'
videojs.addLanguage('zh-CN', video_zhCN);
export default {
  name: 'videoPage',
  data () {
    return {
      player: null
    }
  },
  methods: {
    init () {
      let self = this
      var player = videojs(document.getElementById('myVideo'), {
        autoplay: true,
        controls: true,
        loop: true,
        preload: 'auto',
        // poster: 'xxx', // 视频封面图地址
        sources:[ // 视频源
          {
            src: '//vjs.zencdn.net/v/oceans.mp4',
            type: 'video/mp4',
            poster: '//vjs.zencdn.net/v/oceans.png'
          }
        ]
        }, function onPlayerReady () {
        // this.play()
        // self.$nextTick(_ => {
        //   document.getElementById('app').scrollTop = 1
        // })
        // setTimeout(_ => {
        //   document.getElementById('app').scrollTop = 2
        // }, 1 * 1000)
        videojs.log('ready player')
      })
      this.player = player
      document.getElementById('app').scrollTop = 1
    },
    /**
     * data = {src: .mp4, type: video/mp4}
     */
    play (data) {
      this.player.src(data)
      this.player.load(data)
      this.player.posterImage.setSrc('xxx.jpg');
      this.player.play()
    },
    autoPlay () {
      let app = document.getElementById('app')
      console.log('click')
      console.log(app.scrollTop)
      this.player.play()
      console.log('4444')
      // app.removeEventListener('scroll', this.autoPlay)
    }
  // var data = {
  //   src: 'xxx.mp4',
  //   type: 'video/mp4'
  // };
  // var player = videojs('myVideo', {...});
  // player.pause();
  // player.src(data);
  // player.load(data);
  // // 动态切换poster
  // player.posterImage.setSrc('xxx.jpg');
  // player.play();

  // 销毁videojs
  //player.dispose();

  },
  mounted () {

    document.getElementById('app').addEventListener('scroll', this.autoPlay)
    // document.getElementById('app').addEventListener('scroll', _ => {
    //   console.log(document.getElementById('app').scrollTop)
    //   console.log('app')
    // })

    this.init()
  }
}
</script>

<style lang = "less">
#btn{
  width: 1px;
  height:1px;
  /* opacity: 0; */

}
#video-container{
  height: 60vh;
  background: red;
}
.video-list{
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40vh;
  .item{
    width: percentage(6/10);
    height: 100%;
    box-sizing: border-box;
    border-right: 2px solid white;
    &:last-child{
      border:none;
    }
    background: green;
  }
}
.video-js{
  font-size: 14px;
}
.video-js button{
  outline: none;
}
.video-js.vjs-fluid,
.video-js.vjs-16-9,
.video-js.vjs-4-3{ /* 视频占满容器高度 */
  height: 100%;
  background-color: #161616;
}
.vjs-poster{
  background-color: #161616;
}
.video-js .vjs-big-play-button{ /* 中间大的播放按钮 */
  font-size: 2.5em;
  line-height: 2.3em;
  height: 2.5em;
  width: 2.5em;
  -webkit-border-radius: 2.5em;
  -moz-border-radius: 2.5em;
  border-radius: 2.5em;
  background-color: rgba(115,133,159,.5);
  border-width: 0.12em;
  margin-top: -1.25em;
  margin-left: -1.75em;
}
.video-js.vjs-paused .vjs-big-play-button{ /* 视频暂停时显示播放按钮 */
  display: block;
}
.video-js.vjs-error .vjs-big-play-button{ /* 视频加载出错时隐藏播放按钮 */
  display: none;
}
.vjs-loading-spinner { /* 加载圆圈 */
  font-size: 2.5em;
  width: 2em;
  height: 2em;
  border-radius: 1em;
  margin-top: -1em;
  margin-left: -1.5em;
}
.video-js .vjs-control-bar{ /* 控制条默认显示 */
  display: flex;
}
.video-js .vjs-time-control{display:block;}
.video-js .vjs-remaining-time{display: none;}

.vjs-button > .vjs-icon-placeholder:before{ /* 控制条所有图标，图标字体大小最好使用px单位，如果使用em，各浏览器表现可能会不大一样 */
  font-size: 22px;
  line-height: 1.9;
}
.video-js .vjs-playback-rate .vjs-playback-rate-value{
  line-height: 2.4;
  font-size: 18px;
}
/* 进度条背景色 */
.video-js .vjs-play-progress{
  color: #ffb845;
  background-color: #ffb845;
}
.video-js .vjs-progress-control .vjs-mouse-display{
  background-color: #ffb845;
}
.vjs-mouse-display .vjs-time-tooltip{
  padding-bottom: 6px;
  background-color: #ffb845;
}
.video-js .vjs-play-progress .vjs-time-tooltip{
  display: none!important;
}

</style>
