<template>
  <div class="video-page">
    <div id="video-container">
      <video  ref="videoPlayer" class="video-js vjs-big-play-centered vjs-fluid">
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
      <li class="item" v-for="item in 6" :key="item" @click="play(index)">
        <div class="label">
          {{item}} 这是地名
        </div>
      </li>
    </ul>
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
      self.player = videojs(this.$refs.videoPlayer, {
        autoplay: 'play',
        controls: true,
        loop: true,
        muted: true,
        preload: 'auto',
				sources: [
					{
					 src: '//vjs.zencdn.net/v/oceans.mp4',
           type: 'video/mp4',
           poster: '//vjs.zencdn.net/v/oceans.png'
					}
				]
      }, function onPlayerReady() {
        videojs.log('videojs ready')
        setTimeout(_ => {
          this.volume(0.2)
        }, 1 * 1000)
      })
    },
    /**
     * data = {src: .mp4, type: video/mp4, poster: .jpg}
     */
    play (data) {
      this.player.src(data)
      this.player.load(data)
      // this.player.posterImage.setSrc('xxx.jpg')
      this.player.play()
      // myPlayer.poster('http://example.com/myImage.jpg');
      // myPlayer.src({type: 'video/mp4', src: 'http://www.example.com/path/to/video.mp4'});
      // myPlayer.ready(function() {
      //   myPlayer.play();
      // });
    },
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
    this.init()
  },
  destroyed () {
    // 销毁播放器
    this.player.dispose()
  }
}
</script>

<style lang = "less">
#video-container{
  height: 80vh;
  background: red;
}
.video-list{
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20vh;
  .item{
    width: percentage(6/10);
    height: 100%;
    box-sizing: border-box;
    border-right: 2px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(161, 173, 161);
    &:last-child{
      border:none;
    }
    .label{
      padding: 5px;
      border: 1px solid white;
      border-radius: 5px;
      background: white;
      font-size: 32px;
      text-align: center;
    }
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
