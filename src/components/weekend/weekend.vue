<template>
	<div class="weekend" id="weekend" :style="{top: positionTop()}">
		<div class="box" v-el:working-wrapper v-if="dataStart">	
			<ul >
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
export default {
	props: {
		seller: {
			type: Object
		}
	},
	data() {
		return {
			weekend: [],
			dataStart: true,
			showBeizhu: false
		}
	},
	created() {
		this.$nextTick(() => {
			this.showBeizhu = this.$parent.showBeizhu;
		});
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
			this.workingScroll = new BScroll(this.$els.workingWrapper, {});
		}
	}

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin";
.weekend	
	position: absolute
	display: flex
	bottom: 0px
	width: 100%
	overflow: hidden
	color: #2c3e50
	.box
		flex: 1
		width: 100%
		background: #f3f5f7		
		.nav-item-bg
			background-color: #fff			
</style>