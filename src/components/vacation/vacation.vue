<template>
	<div class="vacation">
		<ul v-if="dataStart">
			<li v-for="item in vacation.vacation" class="nav-item" >
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
const ERR_OK = 0;
export default {
	props: {
		seller: {
			type: Object
		}
	},
	data() {
		return {
			vacation: [],
			dataStart: false
		}
	},
	created() {
		let test = '/api/vacation';
		let id = this.$parent.selectedline.id;
		let url = "http://api.biaoxintong.com:8080/landing-craft/busOrderApiController.do?vacation&lineid="+id;
		this.$http.get(url).then(response => {		
			let data = JSON.parse(response.data);
			this.vacation = data;
			this.dataStart = true;
		/*this.$http.get('/api/vacation').then(response => {
			response = response.body;
			if (response.errno === ERR_OK) {
				let data = response.data[0];
				for (let item in data) {
					if (data[item]) {
						this.vacation = response.data;
						this.dataStart = true;
						console.log("1");
						break;
					}else{
						this.vacation = response.data;
						this.dataStart = false;
						console.log("2");
						break;
					}
				}			
			}*/
		});
	}

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin";
.vacation	
	position: absolute
	width: 100%
	top: 115px
	background-color: #fff
</style>