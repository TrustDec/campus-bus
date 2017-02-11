<template>
	<div class="vacation" id="vacation" :style="{top: positionTop()}">
		<div class="box" v-el:vacation-wrapper v-if="dataStart">
		    <ul>
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
							<span class="nav-text nav-text-plate">车牌：{{item.mcnum}}</span>
							<span class="nav-text nav-text-plate">司机：{{item.mclinkman}}</span>
						</div>
					</div>
				</li>
			</ul>
	  </div>
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
			dataStart: true,
			beizhuTop: 30,
			showBeizhu: true
		}
	},
	created() {
		this.$nextTick(() => {
			this.showBeizhu = this.$parent.showBeizhu;
		});
		let test = '/api/vacation';
		let id = this.$route.params.id;
		let url = "http://api.biaoxintong.com:8080/landing-craft/busOrderApiController.do?vacation&lineid="+id;
		this.$http.get(url).then(response => {	
			let data = JSON.parse(response.data);
			if (data.vacation[0].id =='0') {
				this.dataStart = false;
				return;
			}
			this.vacation = data;	
			this.dataStart = true;
			this.$nextTick(() => {
				this._initScroll();
			});
		});
	},
	methods: {
		positionTop() {
			if (!this.showBeizhu) {
				return (133 - 33) + 'px'
			}
			return 133 + 'px'
		},
		_initScroll() {
			this.vacationScroll = new BScroll(this.$els.vacationWrapper, {});
		}
	}

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin";
.vacation 
	position: absolute
	display: flex
	bottom: 0
	width: 100%
	overflow: hidden
	color: #2c3e50
	.box
		flex: 1
		width: 100%
		background: #f3f5f7
</style>