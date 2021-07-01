<!-- 商品卡片（限时抢购） -->
<template>
	<card-v :width="300" :height="200" :imgHeight="100" title="西瓜">
		<template slot="title">
			<text class="goods-title">西瓜</text>
		</template>

		<template slot="footer">
			<view class="goods-footer">
				<price :price="10" :originPirce="12" :vipPrice="9" class="goods-price"></price>
				<view class="discount">4.82折</view>
			</view>

		</template>
	</card-v>
</template>

<script>
	export default {
		name: "goods-flashsale",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.goods-title {
		margin-left: $uni-spacing-sm;
		font-size: $uni-font-size-sm;
		font-color: $uni-text-color-title
	}

	.goods-price {
		margin-left: $uni-spacing-sm;
	}
	
	.goods-footer {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	
	.discount {
		width: 80rpx;
		height: 30rpx;
		margin-left: $uni-spacing-sm;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: $uni-font-size-mini;
		color: $uni-color-sub;
		border: 1px solid $uni-color-sub;
		border-radius: $uni-border-radius-sm;
	}
</style>
