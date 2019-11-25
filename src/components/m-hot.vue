<template>
  <div id="hot">
    <div class="banner">
      热门歌曲
    </div>
    <m-songlist :recommend-list="hotList"></m-songlist>
  </div>
</template>

<script>
    import MSonglist from './m-songlist'
    export default {
        name: "m-host",
        data(){
            return {
                hotList: []
            }
        },
        methods:{
            getHotList() {
                this.$axios.get('/static/data/recommendList.json').then((response) => {
                    this.hotList = response.data;
                })
            }
        },
        components:{
            MSonglist,
        },
        mounted() {
            this.getHotList();
        }
    }
</script>

<style scoped  lang="stylus" rel="stylesheet/stylus">
  @import "../common/css/reset"
  .banner
    padding-top 70px;
    background url('/static/img/hot_banner.jpg')
    font-size 20px
    color white
    padding-left 50px
    padding-bottom 70px
    margin-bottom 20px
</style>
