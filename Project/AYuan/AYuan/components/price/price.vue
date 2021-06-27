<!-- 价格组件 -->
<template>
	<view class="price-container">
		<view class="vip-price" v-if="showVipPrice" :style="{fontSize: fontSize*0.6+'rpx'}">¥{{ vipPrice / 100 }}</view>
		<view class="price-container-footer">
			<text class="price" v-if="showPrice" :style="{fontSize: fontSize+'rpx'}">¥{{ price / 100 }}</text>
			<text class="origin-price" :style="{fontSize: fontSize*0.6+'rpx'}">¥{{ originPirce / 100 }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "price",
		props: {
			fontSize: {
				type: Number,
				default: 28,
				required: false
			},
			price: Number, //优惠价
			originPirce: Number, //原价
			vipPrice: Number //会员价
		},
		data() {
			return {
				showVipPrice: false,
				showPrice: true
			}
		},
	}
</script>

<style lang="scss">
	.vip-price {
		width: 70rpx;
		height: 40rpx;
		text-align: center;
		line-height: 40rpx;
		border-radius: $uni-border-radius-sm;
		color: $uni-color-vip-price;
		background-color: $uni-color-vip-price-bg;
	}

	.price-container-footer {
		margin-top: 10rpx;
	}

	.price {
		font-weight: bold;
		color: $uni-color-price;
	}

	.origin-price {
		margin-left: 10rpx;
		text-decoration: line-through;
		color: $uni-color-origin-price;
	}
</style>
