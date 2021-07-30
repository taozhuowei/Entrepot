<template>
	<view class="user-info-contianer">
		<view class="color-bg">
			<view class="vip-code">
				<u-icon name="/static/code.png" size="40"></u-icon>
				<text>会员码</text>
			</view>
		</view>

		<view class="user-info">
			<view class="user-info-left">
				<u-icon name="/static/me.png" size="160"></u-icon>


				<view class="info-left-bottom">
					<view class="user-name">云梦影</view>
					<vip-tag vip-level="diamond"></vip-tag>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
    name: "user-info",
    data() {
        return {

        };
    }
};
</script>

<style lang="scss">
	.user-info-contianer {
		width: 100%;
		height: 400rpx;
		position: relative;
		background-image: url(../../static/userBg.png);
	}

	.color-bg {
		width: 100%;
		height: 50%;
		position: absolute;
		bottom: 0;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding-right: 44rpx;
		background-color: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(10px);
	}

	.user-info {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		display: flex;
		justify-content: space-between;
		padding-left: 44rpx;
		align-items: center;
	}

	.user-info-left {
		display: flex;
		flex-direction: column;
	}

	.info-left-bottom {
		display: flex;
	}

	.user-name {
		margin-top: $uni-spacing-sm;
		font-size: 28px;
		color: $uni-text-color-inverse;
	}

	.vip-code {
		width: 220rpx;
		height: 80rpx;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		color: $uni-text-color-inverse;
		background-color: $uni-bg-color-dark;
		border-radius: $uni-border-radius-lg;
	}
</style>
