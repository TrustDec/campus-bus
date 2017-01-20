<template>
  <div>
    <div class="advertisement">
      <img src="http://bpic.588ku.com/element_origin_min_pic/16/06/25/16576e3f26e3948.jpg" class="advertisement-image">
    </div>
    <ul>
      <li v-for="item in index.index" class="index-channel-site-item" @click="selectIndex(item, $event)">
        <span class="site-item-text">{{item.name}}</span>
        <i class="icon-keyboard_arrow_right"></i>
      </li>
    </ul>
  </div>
  <Frmindex  v-ref:frmmain></Frmindex>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll';
import Frmindex from './components/index';
const ERR_OK = 0;
export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        index: [],
        dataItem: 0,
        dataStart: true,
        selectedIndex1: {},
        data: {}
      }
    },
    methods: {
      selectIndex(index1, event) {
        // console.log(event);
        /*if (!event._constructed) {
          return;
        }*/
        this.$refs.frmmain.selectedline=index1;
        //this.index = index1;
        //console.log(this.selectedIndex);
        this.$refs.frmmain.show();
        

      }
    },
    components: {
      Frmindex
    },
    created() {
      let test = '/api/index';
      let url = 'http://api.biaoxintong.com:8080/landing-craft/busLineApiController.do?allline';
      this.$http.get(url).then(response => {
        let data = JSON.parse(response.data);
        this.index = data;
        this.dataItem = data.index.length;
        this.data = data;
        //if (response.errno === ERR_OK) {
          /*this.index = response.data;
          this.dataItem=response.data.length;*/
        //}
      });
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./common/stylus/mixin.styl"
.advertisement-image
  height: 120px
  width: 100%
.index-channel-site-item
  width: 100%
  height: 43px
  position: relative
  border-1px(rgba(7, 17, 27, 0.1))
  .site-item-text
    font-weight: 500
    color: #000
    font-size: 15px
    margin-left: 18px
    line-height: 43px
  .icon-keyboard_arrow_right
    position: absolute
    right: 10px
    font-size: 18px
    line-height: 43px
    color: #999
</style>
