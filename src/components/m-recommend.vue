<template>
  <div class="recommend" v-if="songList.length">
    <h2 class="recommendlist">推荐歌单</h2>
    <slider>
      <div v-for="item in songList" class="songdiv">
        <a :href="item.linkUrl">
          <img class="needsclick songimg" :src="item.songImgSrc">
        </a>
      </div>
    </slider>
    <h2 class="recommendlist">推荐歌单</h2>
    <m-songlist :recommend-list='recommendList'></m-songlist>
    <div class="loadingcontainer">
      <MLoading v-if="!recommendList.length"></MLoading>
    </div>
  </div>
</template>

<script>
  import MSlider from './m-slider'
  import MSonglist from './m-songlist'
  import MLoading from './m-loading'
    export default {
        data() {
            return {
                songList: [],
                recommendList: []
            }
        },
        methods: {
            getSongList(){
                this.$axios.get('/static/data/songList.json').then((response) =>
                    {
                        this.songList = response.data
                    }
                )
            },
            getrecommendList(){
                this.$axios.get('/static/data/recommendList.json').then((response) =>
                    {
                        this.recommendList = response.data
                    }
                )
            }
        },
        mounted() {
            this.getSongList();
            this.getrecommendList();
        },
        components:{
            MSonglist,
            'slider': MSlider,
            MLoading
        }
    }
</script>

<style scoped  lang="stylus" rel="stylesheet/stylus">
  @import "../common/css/reset.styl"
  .recommend
    background #fcfcfd
    height 300px
    min-height 100%
    ul
      height 300px
    .clearleft
      clear left
    li
      width 32%
      float left
      padding-left 1%
      position relative
      text-align center
      img
        width 100%
        height 100%
        border-radius 10px
      .songName
        position absolute
        top 0px
        text-align center
        color white
        font-family "微软雅黑"
        font-size 12px
        margin 0 auto
  .recommendlist
    padding-left 9px
    height 20px
    line-height 20px
    font-size 15px
    margin-top 10px
    text-align center
    margin-bottom 10px
    font-weight 400
    border-left 2px solid #d33a31
  .loadingcontainer
    position relative
    top 50px
</style>
