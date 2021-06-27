<!-- 金刚区组件 -->
<template>
	<view class="function-area-container">
		<u-icon name="/static/coupon.png" label="领券中心" label-pos="bottom" size="60" label-size="24"></u-icon>
		<u-icon name="/static/all-goods.png" label="全部商品" label-pos="bottom" size="60" label-size="24" @click="toShop"></u-icon>
		<u-icon name="/static/order.png" label="我的订单" label-pos="bottom" size="60" label-size="24"></u-icon>
		<u-icon name="/static/vip-area.png" label="会员中心" label-pos="bottom" size="60" label-size="24"></u-icon>
	</view>
</template>

<script>
	export default {
		name:"function-area",
		methods: {
			toShop() {
				uni.navigateTo({
					url: '/pages/shop/shop'
				})
			}
		}
	}
</script>

<style lang="scss">
	.function-area-container {
		width: $uni-width-main;
		height: 140rpx;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		margin-top: $uni-spacing-lg;
		background-color: $uni-bg-color-base;
		border-radius: $uni-border-radius-base;
	}
</style>
