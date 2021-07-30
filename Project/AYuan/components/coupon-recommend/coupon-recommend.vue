<!-- 用户中心优惠券领取组件 -->
<template>
	<view class="coupon-recommend-container">
		<view class="header">
			<text class="header-title">{{ title }}</text>
			<u-icon :name="'/static/right.png'" size="40" label='领券中心'
				label-pos="left" label-color="#9b9b9b"></u-icon>
		</view>

		<view class="content">
			<view class="coupon-recommend">
				<coupon v-for="(item,index) in couponList" :key="index">
					<template>
						<u-button class="button">
							<text class="buttonText">立即领取</text>
						</u-button>
					</template>
				</coupon>
			</view>
		</view>
	</view>
</template>

<script>
export default {
    name: "coupon-receive",
    props: {
        title: {
            type: String,
            default: '收下这些优惠券',
            required: false
        },
        couponList: Array
    },
};
</script>

<style lang="scss">
	.coupon-recommend-container {
		width: 100%;
		height: 300rpx;
	}

	.header {
		width: 100%;
		height: 25%;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		padding-left: $uni-spacing-lg + 15rpx;
		padding-right: $uni-spacing-lg + 15rpx;
	}

	.header-title {
		font-size: $uni-font-size-base;
		font-weight: bold;
	}

	.content {
		width: 100%;
		height: 75%;
		padding-top: $uni-spacing-lg;
	}

	.coupon-recommend {
		display: flex;
		margin-left: $uni-spacing-lg + 15rpx;
		overflow-x: scroll;
	}

	.button {
		width: 100rpx;
		height: 50rpx;
		margin: 0;
		background-color: $uni-color-main;
		color: $uni-text-color-inverse;
	}
	
	.buttonText {
		font-weight: 300;
		transform: scale(0.7);
	}
</style>
