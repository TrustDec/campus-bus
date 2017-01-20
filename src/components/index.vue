<template>
  <div v-show="showIndex" class="index-box" v-el:index transition="move">
    <div class="title"><i class="icon-arrow_lift" @click="hide"></i>{{index.name}}</div>
    <div class="tab border-1px">
       <div class="tab-item">
        <a v-link="{path:'/details'}">站点详情</a>
       </div>
       <div class="tab-item">
        <a v-link="{path:'/working'}">工作日</a>
       </div>
       <div class="tab-item">
        <a v-link="{path:'/weekend'}">节假/周末</a>
       </div>
       <div class="tab-item">
        <a v-link="{path:'/vacation'}">寒暑假</a>
       </div>
    </div>
    <router-view class="router-view" :seller="data"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    index: {
      type: Object
    }
  },
  data() {
    return {
      data: {},
      showIndex: false
    }
  },
  methods: {
    show(index) {
      //console.log(index);
      //console.log(this.index);
      this.data = index;
        this.showIndex = true;
        //this.selectType = ALL;
        //this.onlyContent = true;
        /*this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$els.index, {
              click: true
            });
          } else {
            this.scroll.refresh();
          }
        });*/
      },
      hide() {
        this.showIndex = false;
      },
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../common/stylus/mixin.styl'
.index-box
  position: fixed
  left: 0
  top: 0
  bottom: 0
  z-index: 30
  width: 100%
  background-color: #fff
  &.move-transition
    transition: all 0.2s linear
    transform: translate3d(0, 0, 0)
  &.move-enter, &.move-leave
    transform: translate3d(100%, 0, 0)
  .title
    text-align: center
    font-size: 18px
    font-weight: 600
    margin: 25px 0 30px
  .icon-arrow_lift
    position: absolute
    z-index: 20
    left: 10px
    top: 10px
    color: #999
    width: 50px
    height: 50px
    line-height: 50px
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 15px
        color: rgb(77, 85, 93)
        &.active
          color: #51A6FF
          font-weight: 700
          border-bottom: 2px #51A6FF solid
    .router-view
      background-color: red
</style>
