<template>
	<div class="working">		
		<ul v-if="dataStart">
			<li v-for="item in working.working" class="nav-item" >
				<div class="nav-item-start">
					<div class="nav-start"></div>
				</div>
				<div class="nav-item-details">
					<div class="nav-text nav-item-text">
						<span class="nav-text nav-text-start">{{item.mcorder}}</span>
						<span class="nav-text nav-text-start">{{item.mcstarttime}}</span>
					</div>
					<div class="nav-text-details-box">
						<span class="nav-text nav-text-plate">车牌：{{item.mcnum}}</span>
						<span class="nav-text nav-text-plate">司机：{{item.mclinkman}}</span>
					</div>
				</div>
			</li>
		</ul>
		<div v-else class="data-null">
			暂无班车信息
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
import BScroll from 'better-scroll';
const ERR_OK = 0;
export default {
	props: {
		seller: {
			type: Object
		}
	},
	data() {
		return {
			working: [],
			dataStart: true
		}
	},
	methods: {
		show() {
			
		}
	},
	created() {
		let test = '/api/working';
		let id = this.$route.params.id;
		let url = "http://api.biaoxintong.com:8080/landing-craft/busOrderApiController.do?working&lineid="+id;
		this.$http.get(url).then(response => {
			let data = JSON.parse(response.data);
			if (data.working[0].id =='0') {
				this.dataStart = false;
				return;
			}
			this.working = data;	
			this.dataStart = true;
		});
	}

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin";
.working	
	position: absolute
	width: 100%
	//top: 115px
	//background-color: #fff
				
</style>