<!-- 结算页面的购物清单列表项 -->
<template>
	<card-h :width="width" :height="160" class="card-h">
		<template slot="img">
			<image src="/static/food.png" class="goods-item-img"></image>
		</template>

		<template slot="main-header">
			<text class="title">{{ goods.name }}</text>
		</template>

		<template slot="main-footer">
			<view v-if="!requireRemark" class="footer-content">
				<text class="num">×{{ goods.num }}</text>
				<text class="price">¥ {{ goods.price / 100 }}</text>
			</view>

			<view v-else class="remark">
				<view></view>
				<view>
					<u-icon name="/static/like.png" size="40"></u-icon>
					<u-icon name="/static/dislike.png" size="40" style="margin-left: 20rpx;"></u-icon>
				</view>
			</view>
		</template>
	</card-h>
</template>

<script>
export default {
    name: "order-list-item",
    props: {
        goods: Object,
        width: {
            type: Number,
            default: 680,
            required: false
        },
        requireRemark: {
            type: Boolean,
            default: false,
            required: false
        }
    }
};
</script>

<style lang="scss">
	.goods-item-img {
		width: 80%;
		height: 80%;
	}

	.title {
		margin-left: $uni-spacing-base;
		font-size: $uni-font-size-lg;
		color: $uni-text-color-title;
		font-weight: 300;
	}

	.footer-content {
		width: 100%;
		padding-left: $uni-spacing-base;
		padding-right: $uni-spacing-base;
		display: flex;
		justify-content: space-between;
		align-items: center
	}

	.num {
		font-size: $uni-font-size-base;
		font-weight: 300;
	}

	.price {
		font-weight: 300;
		font-size: $uni-font-size-base;
	}

	.remark {
		width: 100%;
		padding-right: $uni-spacing-base;
		display: flex;
		justify-content: space-between;
	}
</style>
