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
			working: [],
			dataStart: true
		}
	},
	methods: {
		show() {
			
		}
	},
	/*ready() {
		//console.log(this.$route.params.id);
		//console.log(this.$parent.selectedline);
	},*/
	created() {
		//console.log(this.$parent.selectedline);
		//console.log(this.$refs.frmmain);
		let test = '/api/working';
		let id = this.$parent.selectedline.id;
		let url = "http://api.biaoxintong.com:8080/landing-craft/busOrderApiController.do?working&lineid="+id;
		this.$http.get(url).then(response => {
			//response = response.body;
			let data = JSON.parse(response.data);
			this.working = data;
			this.dataStart = true;
			//console.log(data.working);
			//let data = JSON.parse(response.working);
			/*console.log(data);
			this.working = data;
			this.dataStart = true;*/
			/*if (response.errno === ERR_OK) {
				let data = response.data[0];
				for (let item in data) {
					if (data[item]) {
						this.working = response.data;
						this.dataStart = true;
						break;
					}else{
						this.working = response.data;
						this.dataStart = false;
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
.working	
	position: absolute
	width: 100%
	top: 115px
	background-color: #fff
				
</style>