<!-- 商品详情页面 -->
<template>
	<view class="page-container">
		<swiper autoplay class="swiper">
			<swiper-item v-for="(item, index) in imgList" :key="index">
				<image :src="item" class="goods-detail-img"></image>
			</swiper-item>
		</swiper>

		<view class="content">
			<view class="content-header">
				<view class="content-header-item">
					<text class="title">西瓜</text>
					<text class="info">销量： 1000+</text>
				</view>

				<view class="content-header-item">
					<price :price="1999" :origin-pirce="2999" :vip-price="999"
						:fontSize="14" class="price"></price>
					<text class="info">品牌：安井 ， 产地：黑龙江</text>
				</view>
			</view>

			<u-line color="info" border-style="dotted" length="95%"
				class="divider"></u-line>

			<view class="content-main">
				详情详情详情详情详情详情详情详情详情详情详情详情
				详情详情详情详情详情详情详情详情详情详情详情详情
				详情详情详情详情详情详情详情详情详情详情详情详情
				详情详情详情详情详情详情详情详情详情详情详情详情
				详情详情详情详情详情详情详情详情详情详情详情详情
				详情详情详情详情详情详情详情详情详情详情详情详情
				详情详情详情详情详情详情详情详情详情详情详情详情
				详情详情详情详情详情详情详情详情详情详情详情详情
				详情详情详情详情详情详情详情详情详情详情详情详情
				详情详情详情详情详情详情详情详情详情详情详情详情
				详情详情详情详情详情详情详情详情详情详情详情详情
				详情详情详情详情详情详情详情详情详情详情详情详情
				详情详情详情详情详情详情详情详情详情详情详情详情
				详情详情详情详情详情详情详情详情详情详情详情详情
				详情详情详情详情详情详情详情详情详情详情详情详情
				详情详情详情详情详情详情详情详情详情详情详情详情
				详情详情详情详情详情详情详情详情详情详情详情详情
				详情详情详情
			</view>
		</view>


		<bottom-bar button-text="加购物车">
			<template #left>
				<view class="remark">
					<view class="remark-item">
						<u-icon name="/static/like.png" size="40"></u-icon>
						<text class="num">0</text>
					</view>

					<view class="remark-item">
						<u-icon name="/static/dislike.png" size="40"></u-icon>
						<text class="num">0</text>
					</view>
				</view>
			</template>
		</bottom-bar>
	</view>
</template>

<script>
export default {
    data() {
        return {
            imgList: [
                "/static/goodsDetail1.png",
                "/static/goodsDetail2.png",
                "/static/goodsDetail3.png"
            ]
        };
    }
};
</script>

<style lang="scss">
	.swiper {
		width: $uni-width-main;
		height: 440rpx;
		background-color: $uni-bg-color-grey;
	}

	.goods-detail-img {
		width: 100%;
		height: 100%;
	}

	.content {
		width: 100vw;
		height: calc(100vh - 314px);
		display: flex;
		flex-direction: column;
		align-items: center;
		border-top-left-radius: $uni-border-radius-lg;
		border-top-right-radius: $uni-border-radius-lg;
		background-color: $uni-bg-color-base;
	}

	.content-header {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-top: $uni-spacing-lg;
		padding-left: $uni-spacing-lg;
		padding-right: $uni-spacing-lg;
	}

	.content-header-item {
		width: 100%;
		margin-top: $uni-spacing-base;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}

	.title {
		font-size: $uni-font-size-lg;
		font-weight: 800;
	}

	.info {
		color: $uni-text-color-grey;
	}

	.divider {
		margin-top: $uni-spacing-lg !important;
		margin-bottom: $uni-spacing-lg !important;
	}

	.content-main {
		width: 90%;
		height: 450rpx;
		overflow-y: scroll;
	}

	.remark {
		width: 180rpx;
		display: flex;
		justify-content: space-between;
		margin-left: $uni-spacing-base;
		color: $uni-text-color-inverse;
		font-size: $uni-font-size-lg;
	}

	.remark-item {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.num {
		margin-left: $uni-spacing-sm;
	}
</style>
