<template>
	<view class="page-container">
		<view class="background"></view>

		<view class="content">
			<view class="content-header">
				<view class="content-header-right">
					<text-gradient :text="'ID '+user.vipId" direction="to right"
						:fontSize="priceFontSize" fontWeight="800"
						:colors="['#2d3a41' , '#4e588b']" :percents="[0 , 100]">
					</text-gradient>
					<vip-tag :vipLevel="user.vipLevel"></vip-tag>
				</view>
			</view>

			<view class="user-info">
				<view class="user-avatar"></view>

				<view class="user-name">{{ user.name }}</view>
			</view>

			<view class="vip-code"></view>

			<text class="hint">请到收银台出示</text>

			<coupon-recommend title="会员专属优惠券" :couponList="vipCouponList"
				class="conpon-recommend"></coupon-recommend>
		</view>
	</view>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: '云梦影',
                vipLevel: 'diamond',
                vipId: '12138'
            },
            vipCouponList: [ {},
                {},
                {},
                {},
                {},
            ]
        };
    }
};
</script>

<style lang="scss">
	.background {
		width: 100%;
		height: 360rpx;
		background-color: $uni-bg-color;
	}

	.content {
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}

	.content-header {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		padding-top: $uni-spacing-base;
		padding-right: $uni-spacing-lg;
	}

	.content-header-right {
		width: 150rpx;
		height: 100rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	.user-info {
		width: 400rpx;
		height: 120rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.user-avatar {
		width: 120rpx;
		height: 120rpx;
		background-color: $uni-bg-color-grey;
		border-radius: $uni-border-radius-base;
	}

	.user-name {
		font-size: 38px;
		font-weight: 300;
		color: $uni-text-color-title
	}

	.vip-code {
		width: 400rpx;
		height: 400rpx;
		margin-top: $uni-spacing-lg * 2;
		border-radius: $uni-border-radius-base;
		background-color: $uni-bg-color-mask;
	}
	
	.hint {
		margin-top: $uni-spacing-base;
	}
	
	.conpon-recommend {
		margin-top: $uni-spacing-lg;
	}
</style>
