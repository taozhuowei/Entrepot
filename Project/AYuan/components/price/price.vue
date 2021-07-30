<!-- 价格组件 -->
<template>
	<view class="price-container">
		<view class="vip-price" v-if="showVipPrice && vipPrice > 0"
			:style="{fontSize: fontSize+'px'}">¥{{ vipPrice / 100 }}</view>
		<text class="price" v-else
			:style="{fontSize: fontSize * 1.3 +'px'}">¥{{ price / 100 }}</text>

		<text class="origin-price"
			:style="{fontSize: fontSize+'px'}">¥{{ originPirce / 100 }}</text>
	</view>
</template>

<script>
export default {
    name: "price",
    props: {
        fontSize: {
            type: Number,
            default: 12,
            required: false
        },
        price: Number, //优惠价
        originPirce: Number, //原价
        vipPrice: Number //会员价
    },
    data() {
        return {
            showVipPrice: false,
        };
    },
};
</script>

<style lang="scss">
	.price-container {
		display: flex;
		align-items: flex-end;
	}
	
	.vip-price {
		padding: 10rpx;
		text-align: center;
		line-height: 40rpx;
		border-radius: $uni-border-radius-sm;
		color: $uni-color-vip-price;
		background-color: $uni-color-vip-price-bg;
	}

	.price {
		font-weight: bold;
		color: $uni-color-price;
	}

	.origin-price {
		margin-left: 10rpx;
		text-decoration: line-through;
		color: $uni-color-origin-price;
	}
</style>
