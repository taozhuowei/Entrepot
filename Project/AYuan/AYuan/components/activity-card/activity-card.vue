<!-- 活动卡片组件 -->
<template>
	<view class="activity-container">
		<view class="activity-header">
			<view class="header-left">
				<u-icon :name="'/static/'+iconName+'.png'" size="30"></u-icon>
				<text class="activity-header-title">{{ title }}</text>
			</view>

			<slot name="header"></slot>

			<u-icon name="arrow-right" size="20" color="#C2CCD0"></u-icon>
		</view>

		<slot name="content"></slot>
	</view>
</template>

<script>
	export default {
		name: "activity-card",
		props: {
			iconName: String,
			title: String
		}
	}
</script>

<style lang="scss">
	.activity-container {
		width: $uni-width-half;
		height: 280rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		background-color: $uni-bg-color-base;
		border-radius: $uni-border-radius-base;
		box-sizing: border-box;
	}

	.activity-header {
		width: 100%;
		height: 40rpx;
		padding-top: 2rpx;
		padding-left: $uni-spacing-base;
		padding-right: $uni-spacing-base;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.header-left {
		display: flex;
		align-items: center;
	}

	.activity-header-title {
		font-style: italic;
		color: $uni-text-color-title;
		font-weight: bold;
	}
</style>
