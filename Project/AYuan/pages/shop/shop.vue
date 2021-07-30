<!-- 全部商品页面 -->
<template>
	<view class="page-container">
		<view class="header">
			<u-search placeholder="便利店新星" v-model="searchKeyword" shape="square"
				:height="50" :input-style="{fontSize: '24rpx'}"
				:action-style="{color: 'white'}" clearable show-action
				animation></u-search>
		</view>

		<view class="main">
			<!-- 侧边栏 -->
			<aside-bar></aside-bar>

			<!-- 商品卡片列表 -->
			<view class="goods-items-wrapper">
				<goods-item :data="goods"></goods-item>
			</view>
		</view>

		<!-- 购物车 -->
		<cart></cart>
	</view>
</template>

<script>
export default {
    data() {
        return {
            searchKeyword: '',
            goods: {
                id: 1,
                name: '西瓜',
                price: 999,
                num: 1
            },
            maskVisibility: false
        };
    }
};
</script>

<style lang="scss">
	.page-container {
		overflow: hidden;
	}

	.header {
		width: 100vw;
		height: 100rpx;
		padding-left: $uni-spacing-lg;
		padding-right: $uni-spacing-lg;
		display: flex;
		justify-content: center;
		align-items: center;
		background: $uni-bg-color;
	}

	.main {
		width: 100%;
		height: 100%;
		display: flex;
	}

	.goods-items-wrapper {
		width: 100%;
		height: calc(100vh - 289rpx);
		padding-top: $uni-spacing-lg;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		background-color: $uni-bg-color-base;
	}
</style>
