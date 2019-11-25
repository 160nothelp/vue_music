<template>
  <transition name="slider">
    <div class="detail">
      <div class="songimg">
        <img :src="songDetail.songImgSrc">
      </div>
      <div class="songtitle">
        {{songDetail.songName}}
      </div>
      <div class="songaudio">
        <audio autoplay="autoplay">
          <source src="static/song/song.ogg" type="audio/ogg" />
          <source src="static/song/song.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  </transition>
</template>

<script>
    export default {
        name: "m-detail",
        data(){
            return {songDetail: {}}
        },
        mounted() {
            // this.songDetail = this.$route.params.item;
            this.songDetail = JSON.parse(this.$route.query.item);
        }
    }
</script>

<style scoped  lang="stylus" rel="stylesheet/stylus">
  // 四个状态，两个过程
  .slider-enter-active,.slider-leave-active
    transition  all 0.3s
  .slider-enter,.slider-leave-to
    transform translateX(100%)



  .detail
    position fixed
    z-index 100
    top 0
    left 0
    right 0
    bottom 0
    background white
    .songtitle
      text-align center
      font-size 14px
    .songimg
      text-align center
      img
        width 50%;
        border-radius 50%

        animation: circling 20s infinite linear;
      @keyframes circling {
        from {
          -webkit-transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(360deg);
        }
      }
</style>
