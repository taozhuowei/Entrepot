<!-- 结算页面的购物清单列表 -->
<template>
	<view class="order-list-container card">
		<view class="order-list-header">
			<text class="list-haader-title">商品列表</text>
		</view>

		<view class="order-list-content">
			<order-list-item v-for="goods in goodsList" :key="goods.id"
				:goods="goods"></order-list-item>
		</view>

		<view @click="toCouponChoose" class="coupon-choose">
			<text class="text"><b>3</b>张优惠可用</text>
		</view>

		<view class="order-list-footer">
			<text>总计</text>
			<text class="total">¥{{ total }}</text>
		</view>
	</view>
</template>

<script>
export default {
    name: "order-list",
    computed: {
        goodsList() {
            console.log( 11111 );
            console.log( this.$store.state.cart );
            return this.$store.state.cart;
        },

        total() {
            return this.$store.state.total / 100;
        }
    },
    methods: {
        toCouponChoose() {
            uni.navigateTo({
                url: '../../pages/coupon-choose/coupon-choose'
            });
        }
    }
};
</script>

<style lang="scss">
	.order-list-container {
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	.order-list-header {
		width: 100%;
		text-align: left;
		margin-top: $uni-spacing-base;
		margin-bottom: $uni-spacing-base;
		padding-left: $uni-spacing-lg;
		font-size: $uni-font-size-base;
		font-weight: bold;
	}

	.coupon-choose {
		width: 100%;
		text-align: right;
		margin-top: 50rpx;
		padding-right: $uni-spacing-lg;
	}

	.order-list-footer {
		width: 100%;
		text-align: right;
		margin-top: $uni-spacing-lg;
		padding: $uni-spacing-lg;
		color: $uni-text-color-grey;
		border-top: 1px dotted $uni-text-color-grey;
	}

	.total {
		margin-left: $uni-spacing-sm;
		font-size: $uni-font-size-lg;
		font-weight: bold;
		color: $uni-text-color;
	}
</style>
