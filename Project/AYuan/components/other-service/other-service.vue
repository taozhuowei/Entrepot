<template>
	<view class="other-service-container">
		<view class="header">
			<text class="header-title">其他服务</text>
		</view>
		
		<view class="content">
			<view v-for="(item,index) in services" :key="index" class="service-item">
				<u-icon :name="'/static/'+item.code+'.png'" size="60"></u-icon>
				<text class="text">{{ item.text }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"other-service",
		data() {
			return {
				services: [
					{code: 'myCoupon' , text: '我的优惠券'},
					{code: 'addressManage' , text: '地址管理'},
					{code: 'sign' , text: '签到'},
					{code: 'share' , text: '分享APP'},
				]
			};
		}
	}
</script>

<style lang="scss">
.other-service-container {
	width: $uni-width-main;
	margin-top: $uni-spacing-base;
}
	
.header {
	width: 100%;
	height: 25%;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	padding-left: $uni-spacing-lg;
	padding-right: $uni-spacing-lg;
}

.header-title {
	font-size: $uni-font-size-base;
	font-weight: bold;
}


.content {
	width: 100%;
	height: 75%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin-top: $uni-spacing-base;
}

.service-item {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.text {
	margin-top: $uni-spacing-mini;
	font-size: $uni-font-size-sm;
	font-weight: 800;
}
</style>
