<template>
  <div  class="index-box" v-el:index transition="move">
      <div class="index-Notice" v-show="showBeizhu">
        <span class="index-Notice-text">{{data.beizhu}}</span>
        <i class="icon-close" @click="hideBeizhu"></i>
      </div>
      <div class="title">{{data.name}}</div>
      <ul class="tab border-1px">
        <li class="tab-item" :class="{active: active == $index}" v-for="item in tab" @click="tabToggle($index,item.name)">
        <span>{{item.type}}</span>
        </li>
      </ul>
      <div class="view">
        <component :is='currentView' keep-alive></component>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import details from './details/details';
  import working from './working/working';
  import weekend from './weekend/weekend';
  import vacation from './vacation/vacation';
export default {
  props: {
    selectedline: {
      type: Object
    },
    frmdet: {
      type: Object
    }
  },
  data() {
    return {
      data: {},
      active: 2,
      showIndex: true,
      showBeizhu: false,
      tab: [
        {name:'weekend',type:'工作日'},
        {name:'working',type:'节假/周末'},
        {name:'vacation',type:'寒暑假'},
        {name:'details',type:'乘车点'}
      ],
      currentView: 'vacation'
    }
  },
  components: {
    details,
    working,
    weekend,
    vacation
  },
  ready() {
    console.log(this.$route.params.beizhu);
    if (this.$route.params.beizhu == 'null') {
      this.data=this.$route.params;
      this.showBeizhu = false;
      return;
    }
    this.data=this.$route.params;
     this.showBeizhu = true;
  },
  methods: {
    tabToggle(index,tabText){
      console.log(index);
      console.log(this.active);
      this.active = index;
      this.currentView = tabText
     },
     hideBeizhu(){
      this.showBeizhu = false;
     }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../common/stylus/mixin.styl'
&.active
  color: #51A6FF
  font-weight: bold
  border-bottom: 2px #51A6FF solid
.index-box
  position: fixed
  left: 0
  top: 0
  bottom: 0
  z-index: 30
  width: 100%
  background-color: #fff
  &.move-transition
    transition: all 0.1s ease
    opacity: 1
  &.move-enter, &.move-leave
    opacity: 0
  .index-Notice
    padding-left: 15px
    padding-right: 15px
    line-height: 30px
    height: 30px
    background-color: #fdf8b8
    position relative 
    border-1px(#FFE392)
    .index-Notice-text
      display: inline-block
      width: 90%
      height: 100%
      color:  #555
      font-size: 15px
      text-overflow: ellipsis
      overflow: hidden
      white-space: nowrap
    .icon-close
      position absolute
      right: 15px
      font-size: 18px
      line-height: 30px
  .title
    text-align: center
    font-size: 18px
    font-weight: bold
    margin: 25px 0 20px
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
    border-1px(rgba(7, 17, 27, 0.2))
    .tab-item
      flex: 1
      text-align: center
      background-color: #f8f8f8
      & > a
        display: block
        font-size: 15px
        color: rgb(77, 85, 93)
  .view
    flex: 1
    height: 100%
    background-color: #f6f6f6
</style>
