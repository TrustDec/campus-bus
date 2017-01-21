<template>
  <div  class="index-box" v-el:index transition="move">
   <div class="title">{{data.name}}</div>
    <ul class="tab border-1px">
      <li class="tab-item" :class="{active:active==$index}" v-for="item in tab" @click="tabToggle($index,item.name)">
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
      active: 0,
      showIndex: true,
      tab: [
        {name:'details',type:'站点详情'},
        {name:'working',type:'工作日'},
        {name:'weekend',type:'节假/周末'},
        {name:'vacation',type:'寒暑假'}
      ],
      currentView: 'details'
    }
  },
  components: {
    details,
    working,
    weekend,
    vacation
  },
  ready() {
    this.data=this.$route.params;
  },
  methods: {
    tabToggle(index,tabText){
      console.log(index);
      console.log(tabText);
      this.active = index;
        this.currentView = tabText
     }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../common/stylus/mixin.styl'
&.active
  color: #51A6FF
  font-weight: 700
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
  .view
    flex: 1
    height: 100%
    background-color: #f6f6f6
</style>
