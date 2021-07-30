<!-- 首页 -->
<template>
	<view class="page-container">
		<!-- 顶部信息：门店定位 个人信息 -->
		<u-sticky>
			<info-bar class="info-bar" />
		</u-sticky>

		<!-- 轮播图 -->
		<banner class="banner" />

		<!-- 金刚区 -->
		<function-area class="function-area" />

		<!-- 限时抢购 & 商品排行榜 -->
		<view class="flashsale-ranking-list">
			<flashsale />
			<ranking-list />
		</view>

		<!-- 商品推荐 -->
		<view class="index-content">
			<recommend-list />
		</view>
	</view>
</template>

<script>
export default {
    data() {
        return {
        };
    },
};
</script>

<style lang="scss" scoped>
	.info-bar {
		width: 100vw;
	}

	.info-bar,
	.function-area {
		flex-shrink: 0;
	}

	.banner {
		margin-top: $uni-spacing-lg;
	}

	.flashsale-ranking-list {
		width: $uni-width-main;
		height: 280rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.index-content {
		width: 100vw;
		min-height: 100vh;
		margin-top: $uni-spacing-lg;
		background-color: $uni-bg-color-base;
	}

	.index-content-title {
		margin-top: $uni-spacing-sm;
		margin-left: $uni-spacing-base;
		font-size: $uni-font-size-lg;
		font-weight: bold;
		color: $uni-text-color-title
	}
</style>
