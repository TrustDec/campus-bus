<template>
	<div class="weekend">
		<ul v-if="dataStart">
			<li v-for="item in weekend.working" class="nav-item nav-item-bg" >
				<div class="nav-item-start">
					<div class="nav-start"></div>
				</div>
				<div class="nav-item-details">
					<div class="nav-text nav-item-text">
						<span class="nav-text nav-text-start">{{item.mcorder}}</span>
						<span class="nav-text nav-text-start">{{item.mcstarttime}}</span>
					</div>
					<div class="nav-text-details-box">
						<span class="nav-text nav-text-plate">车牌:{{item.mcnum}}</span>
						<span class="nav-text nav-text-plate">司机:{{item.mclinkman}}</span>
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
export default {
	props: {
		seller: {
			type: Object
		}
	},
	data() {
		return {
			weekend: [],
			dataStart: true
		}
	},
	created() {
		let test = '/api/weekend';
		let id = this.$route.params.id;
		let url = "http://api.biaoxintong.com:8080/landing-craft/busOrderApiController.do?weekend&lineid="+id;
		this.$http.get(url).then(response => {
			let data = JSON.parse(response.data);
			if (data.working[0].id =='0') {
				this.dataStart = false;
				return;
			}
			this.weekend = data;	
			this.dataStart = true;
		});
	}

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin";
.weekend	
	position: absolute
	width: 100%
	//top: 115px
	height: 100%
	//background-color: #fff
	.nav-item-bg
		background-color: #fff			
</style>