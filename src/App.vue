<template>
  <div>
    <div class="advertisement">
      <img src="http://img.mukewang.com/587f42480001f49812000460.jpg" class="advertisement-image">
    </div>
    <ul>
      <li v-for="item in index" class="index-channel-site-item" @click="selectIndex(item, $event)">
        <span class="site-item-text">{{item.name}}</span>
        <i class="icon-keyboard_arrow_right"></i>
      </li>
    </ul>
  </div>
  <index :index="selectedIndex" v-ref:index></index>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll';
import index from './components/index';
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
        selectedIndex: {}
      }
    },
    methods: {
      selectIndex(index, event) {
        if (!event._constructed) {
          return;
        }
        console.log(index);
        this.selectedIndex = index;
        this.$refs.index.show();
      }
    },
    components: {
      index
    },
    created() {
      this.$http.get('/api/index').then(response => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.index = response.data;
          this.dataItem=response.data.length;
        }
      });
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./common/stylus/mixin.styl"
.advertisement-image
  height: 120
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
</style>
