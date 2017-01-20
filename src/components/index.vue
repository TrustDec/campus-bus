<template>
  <div v-show="showIndex" class="index-box" v-el:index>
    <div class="title">医学院校区 - 曲江校区</div>
    <div class="tab border-1px">
       <div class="tab-item">
        <a v-link="{path:'/details'}">站点详情</a>
       </div>
       <div class="tab-item">
        <a v-link="{path:'/working'}">工作</a>
       </div>
       <div class="tab-item">
        <a v-link="{path:'/weekend'}">节假日周末</a>
       </div>
       <div class="tab-item">
        <a v-link="{path:'/vacation'}">寒暑假</a>
       </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    food: {
      type: Object
    }
  },
  data() {
    return {
      showIndex: false
    }
  },
  methods: {
    show() {
      console.log("show");
        /*this.showIndex = true;
        this.selectType = ALL;
        this.onlyContent = true;
        this.$nextTick(() => {
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
  bottom: 48px
  z-index: 30
  width: 100%
  background: #fff
  .title
    text-align: center
    font-size: 18px
    font-weight: 600
    margin: 25px 0 30px
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
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: #51A6FF
          font-weight: 700
          border-bottom: 2px #51A6FF solid
</style>
