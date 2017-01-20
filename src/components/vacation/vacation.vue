<template>
	<div class="vacation">
		<ul v-if="dataStart">
			<li v-for="item in vacation" class="vacation-item" >
				<div class="vacation-item-start">
					<div class="vacation-start"></div>
				</div>
				<div class="vacation-item-details">
					<div class="vacation-text vacation-item-text">
						<span class="vacation-text vacation-text-start">{{item.firstTrain}}</span>
						<span class="vacation-text">{{item.firstTrainTime}}</span>
					</div>
					<div class="vacation-text-details-box">
						<span class="vacation-text vacation-text-plate">车牌:{{item.licensePlate}}</span>
						<span class="vacation-text">司机:{{item.driver}}</span>
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
		this.$http.get('/api/vacation').then(response => {
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
			}
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
	bottom: 0px
	.vacation-item
		width: 100%
		height: 80px
		display: flex
		border-1px(rgba(7, 17, 27, 0.1))
		.vacation-item-start
			width: 54px
			padding-top: 17px
			display: flex
			justify-content: center
			//align-items: center
			.vacation-start
				width: 17px
				height: 17px
				border-radius: 17px
		&:first-child
			.vacation-start
				background-color: #48cc85
		&:last-child
			.vacation-start
				background-color: #fc858f
		.vacation-item-details
			padding-top: 17px
			.vacation-text
				font-size: 15px
				color: #666
			.vacation-item-text
				display: block
				margin-bottom: 12px	
				.vacation-text-start
					margin-right: 18px
			.vacation-text-details-box
				display: block
				.vacation-text-plate
					margin-right: 55px
</style>