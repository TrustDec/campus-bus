<template>
	<div class="vacation">
		<ul v-if="dataStart">
			<li v-for="item in vacation" class="nav-item" >
				<div class="nav-item-start">
					<div class="nav-start"></div>
				</div>
				<div class="nav-item-details">
					<div class="nav-text nav-item-text">
						<span class="nav-text nav-text-start">{{item.firstTrain}}</span>
						<span class="nav-text">{{item.firstTrainTime}}</span>
					</div>
					<div class="nav-text-details-box">
						<span class="nav-text nav-text-plate">车牌:{{item.licensePlate}}</span>
						<span class="nav-text">司机:{{item.driver}}</span>
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
	background-color: #fff
</style>