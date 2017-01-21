<template>
	<div class="details">
			<div v-if="dataStart" class="details-data">
			<div class="details-time-axis">
				<ul class="details-time-axis-rod" :style="{height: dataItem*40-5 + 'px'}">
					<li :style="{top: position(item)}" class="details-time-axis-rod-spot" 
					v-for="(item, index) in details.mcpasssite" num={{item+1}}></li>
				</ul>
			</div>
			<div class="details-channel-site">
				<ul>
					<li v-for="item in details.mcpasssite" class="details-channel-site-item" >
						<span class="site-item-text">{{item.passsite}}</span>
					</li>
				</ul>
			</div>			
			</div>
		<div v-else class="data-null">
			暂无班车信息
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
export default {
	data() {
		return {
			details: [],
			dataItem: 0,
			dataStart: true,
			spot: 0
		}
	},
	methods: {
		position(p) {
			return (p * 50) + 'px'
		}
	},
	ready() {
		let test = '/api/vacation';		
		let id = this.$route.params.id;
		let url = "http://api.biaoxintong.com:8080/landing-craft/busSiteApiController.do?busbypass&lineid="+id;
		this.$http.get(url).then(response => {		
			let data = JSON.parse(response.data);
			this.details = data.details;
			this.dataItem=data.details.mcpasssite.length;
		});
	}

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin";
	.details
		position: absolute
		width: 100%
		top: 115px
		.details-data
			display: flex
			.details-time-axis
				flex: 0 0 80px
				width: 80px
				padding-top: 20px
				.details-time-axis-rod
					width: 4px
					background-color: #51A6FF
					margin: 0 auto
					position: relative
					.details-time-axis-rod-spot
						width: 15px
						height: 15px
						border-radius: 15px
						background-color: #51A6FF
						position: absolute
						left: -5.5px
			.details-channel-site
				flex: 1
				.details-channel-site-item
					display: flex
					height: 50px
					line-height: 50px
					padding-left: 10px
					border-1px(rgba(7, 17, 27, 0.1))
					&:last-child
						//border-none()
						margin-bottom: 0
					.site-item-text
						font-size: 15px
						color: #666
		
</style>