<template>
	<div class="weekend">
		<ul v-if="dataStart">
			<li v-for="item in weekend" class="weekend-item" >
				<div class="weekend-item-start">
					<div class="weekend-start"></div>
				</div>
				<div class="weekend-item-details">
					<div class="weekend-text weekend-item-text">
						<span class="weekend-text weekend-text-start">{{item.firstTrain}}</span>
						<span class="weekend-text">{{item.firstTrainTime}}</span>
					</div>
					<div class="weekend-text-details-box">
						<span class="weekend-text weekend-text-plate">车牌:{{item.licensePlate}}</span>
						<span class="weekend-text">司机:{{item.driver}}</span>
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
			weekend: [],
			dataStart: false
		}
	},
	created() {
		this.$http.get('/api/weekend').then(response => {
			response = response.body;
			if (response.errno === ERR_OK) {
				let data = response.data[0];
				for (let item in data) {
					if (data[item]) {
						this.weekend = response.data;
						this.dataStart = true;
						console.log("1");
						break;
					}else{
						this.weekend = response.data;
						this.dataStart = false;
						console.log("2");
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
.weekend	
	position: absolute
	width: 100%
	top: 115px
	bottom: 0px
	.weekend-item
		width: 100%
		height: 80px
		display: flex
		border-1px(rgba(7, 17, 27, 0.1))
		.weekend-item-start
			width: 54px
			padding-top: 17px
			display: flex
			justify-content: center
			//align-items: center
			.weekend-start
				width: 17px
				height: 17px
				border-radius: 17px
		&:first-child
			.weekend-start
				background-color: #48cc85
		&:last-child
			.weekend-start
				background-color: #fc858f
		.weekend-item-details
			padding-top: 17px
			.weekend-text
				font-size: 15px
				color: #666
			.weekend-item-text
				display: block
				margin-bottom: 12px	
				.weekend-text-start
					margin-right: 18px
			.weekend-text-details-box
				display: block
				.weekend-text-plate
					margin-right: 55px
				
</style>