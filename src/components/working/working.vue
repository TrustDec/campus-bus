<template>
	<div class="working">		
		<ul v-if="dataStart">
			<li v-for="item in working" class="working-item" >
				<div class="working-item-start">
					<div class="working-start"></div>
				</div>
				<div class="working-item-details">
					<div class="working-text working-item-text">
						<span class="working-text working-text-start">{{item.firstTrain}}</span>
						<span class="working-text">{{item.firstTrainTime}}</span>
					</div>
					<div class="working-text-details-box">
						<span class="working-text working-text-plate">车牌:{{item.licensePlate}}</span>
						<span class="working-text">司机:{{item.driver}}</span>
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
	created() {
		this.$http.get('/api/working').then(response => {
			response = response.body;
			if (response.errno === ERR_OK) {
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
			}
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
	bottom: 0px
	.working-item
		width: 100%
		height: 80px
		display: flex
		border-1px(rgba(7, 17, 27, 0.1))
		.working-item-start
			width: 54px
			padding-top: 17px
			display: flex
			justify-content: center
			//align-items: center
			.working-start
				width: 17px
				height: 17px
				border-radius: 17px
		&:first-child
			.working-start
				background-color: #48cc85
		&:last-child
			.working-start
				background-color: #fc858f
		.working-item-details
			padding-top: 17px
			.working-text
				font-size: 15px
				color: #666
			.working-item-text
				display: block
				margin-bottom: 12px	
				.working-text-start
					margin-right: 18px
			.working-text-details-box
				display: block
				.working-text-plate
					margin-right: 55px
				
</style>