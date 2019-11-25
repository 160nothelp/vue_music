<template>
    <div class="slider" ref="slider">
      <div class="sliderGroup" ref="sliderGroup">
        <slot></slot>
      </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {intervalId: 0}
        },
        methods:{
            setSize() {
                let imgWidth = this.$refs.slider.offsetWidth;
                this.$refs.slider.style.overflow = "hidden";
                this.$refs.sliderGroup.style.width = 5*imgWidth + "px";
                for(let i = 0; i < document.getElementsByClassName("songdiv").length; i++){
                    document.getElementsByClassName("songdiv")[i].style.width = imgWidth + "px";
                    document.getElementsByClassName("songdiv")[i].style.float = "left";
                }
                let firstNode = document.getElementsByClassName("songdiv")[0].cloneNode(true);
                this.$refs.sliderGroup.appendChild(firstNode);
            },
            slide() {
                let index = 0;
                let intervalId = setInterval(() => {
                    clearInterval(intervalId);
                    index = index + 1;
                    this.$refs.sliderGroup.style.transform = "translate("+ -375*index +"px,0px)";
                    this.$refs.sliderGroup.style.transition = "all 1500ms";
                }, 3000);
                this.intervalId = intervalId;
                this.$refs.sliderGroup.addEventListener("webkitTransitionEnd", () => {

                    if(index == 4) {
                        index = 0;
                        this.$refs.sliderGroup.style.transform = "translate(0px,0px)";
                        this.$refs.sliderGroup.style.transition = "0ms";
                    }
                    intervalId = setInterval(() => {
                        clearInterval(intervalId);
                        index = index + 1;
                        this.$refs.sliderGroup.style.transform = "translate("+ -375*index +"px,0px)";
                        this.$refs.sliderGroup.style.transition = "all 1500ms";
                    }, 3000);
                    this.intervalId = intervalId;
                })
            }
        },
        mounted() {
            this.setSize();
            this.slide();
        },
        beforeDestroy() {
            clearInterval(this.intervalId);
        }
    }
</script>

<style scoped  lang="stylus" rel="stylesheet/stylus">
  .songimg
    width 100%
</style>
