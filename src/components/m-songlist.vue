<template>
    <div class="songlist">
      <ul>
        <li class="songli" v-for="item in recommendList" @click="seletcSong(item)">
          <div class="songinfor">
            <p class="title">{{item.songName}}</p>
            <p class="singer" style="font-size:12px;color:#888">{{item.singer}}</p>
          </div>
          <p class="start">
            <img src="../../static/img/start.png" >
          </p>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "m-songlist",
        props:['recommendList'],
        methods: {
            seletcSong(item) {
                // params 传参
                // this.$router.push({
                //     "name": "Detail",
                //     "params": {item: item}
                // })
                // query 传参
                this.$router.push({
                    'path': '/datail/:item',
                    'query': {item: JSON.stringify(item)}
                })
            }
        }
    }
</script>

<style scoped  lang="stylus" rel="stylesheet/stylus">
  @import "../common/css/reset"
  .songli
    display flex
    padding-bottom 15px
    .songinfor
      -webkit-box-flex 1
      -webkit-flex 1 1 auto
      width 0
      padding-left 20px
    .start
      display -webkit-box
      display -webkit-flex
      display flex
      -webkit-box-align center
      -webkit-align-items center
      align-items center
      padding 0 20px
      width 5%
      img
        width 100%
</style>
