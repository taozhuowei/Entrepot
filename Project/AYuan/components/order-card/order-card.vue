<!-- 所有订单中的订单卡片组件 -->
<template>
	<card-h :width="720" class="order-card-container">
		<template slot="header">
			<view class="order-header">
				<text class="order-time">2021-7-8 15:19:12</text>
				<text class="order-status">{{ data.statusName }}</text>
			</view>
		</template>

		<template slot="img">
			<image src="/static/food.png" class="order-img"></image>
		</template>

		<template slot="main-header">
			<view class="title">
				<text class="first-goods">西瓜</text>
				<text>等1件商品...</text>
			</view>

		</template>

		<template slot="main-footer">
			<view class="footer-content">
				<text class="price">¥9.99</text>
				<u-button :class="['button' , data.status]">{{ data.buttonText }}</u-button>
			</view>
		</template>
	</card-h>
</template>

<script>
export default {
    name: "order-card",
    props: {
        data: Object,
    },
};
</script>

<style lang="scss">
	.order-card-container {
		margin-top: $uni-spacing-base;
		border-radius: $uni-border-radius-base;
	}

	.order-header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: $uni-spacing-lg;
		padding-right: $uni-spacing-lg;
		padding-top: $uni-spacing-sm;
	}
	
	.order-time , .order-status {
		font-size: $uni-font-size-sm;
	}

	.order-img {
		width: 80%;
		height: 80%;
	}

	.title {
		margin-left: $uni-spacing-base;
		font-size: $uni-font-size-sm;
		color: $uni-text-color-title;
	}

	.first-goods {
		font-size: $uni-font-size-base;
	}

	.footer-content {
		width: 100%;
		padding-left: $uni-spacing-base;
		padding-right: $uni-spacing-base;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.button {
		width: 140rpx;
		height: 50rpx;
		margin: 0;
		font-size: $uni-font-size-sm;
		border: none;
		color: $uni-text-color-inverse;
	}
	
	.unpaid {
		background-color: $uni-color-sub;
	}
</style>
