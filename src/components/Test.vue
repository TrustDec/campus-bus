<template>
  <div>
    <div v-if="dataStart">
      <div class="advertisement">
        <img src="http://ww1.sinaimg.cn/large/593be353jw1e24b6qf5k8j.jpg" class="advertisement-image">
      </div>
      <div v-for="item in index.index" class="index-channel-site-item">
        <a v-link="{name:'index',params:{id:item.id,name:item.name,beizhu:item.beizhu}}" class="site-item-text">{{item.name}} <i class="icon-keyboard_arrow_right"></i></a>
      </div>      
    </div>
    <div v-else class="data-null">
      暂无班车路线信息
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll';
import Frmindex from '../components/index';
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
        name:"",
        id:"",
        dataItem: 0,
        dataStart: true,
        selectedIndex1: {}
      }
    },
    created() {
      let test = '/api/index';
      let url = 'http://api.biaoxintong.com:8080/landing-craft/busLineApiController.do?allline';
      this.$http.get(url).then(response => {
        let data = JSON.parse(response.data);
        if (data.index[0].name == '0') {
          this.dataStart = false;
          return;
        }
        this.index = data;
        this.dataItem = data.index.length;
        this.dataStart = true;
      });
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../common/stylus/mixin.styl"

.advertisement-image
  height: 120px
  width: 100%
  margin-bottom: 5px
.index-channel-site-item
  width: 100%
  height: 43px
  position: relative
  background-color: #fff
  border-1px(rgba(7, 17, 27, 0.1))
  .site-item-text
    height: 100%
    display: block
    font-weight: 500
    color: #000
    margin-left: 15px
    font-size: 15px
    line-height: 43px
  .icon-keyboard_arrow_right
    position: absolute
    right: 10px
    font-size: 18px
    line-height: 43px
    color: #999
</style>
