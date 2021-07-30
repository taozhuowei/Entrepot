<!-- 商品卡片（列表） -->
<template>
	<card-h show-tag>
		<!-- 标签 -->
		<template slot="tag">
			{{ tag }}
		</template>

		<template slot="img">
			<image src="/static/food.png" @click="toGoodsDetail" class="goods-item-img" />
		</template>

		<template slot="main-header">
			<text class="title">
				西瓜
			</text>
		</template>

		<template slot="main-footer">
			<view class="footer-content">
				<price :price="999" :vip-price="99" :origin-pirce="1999"
					:font-size="14" />
				<u-icon name="/static/addToCart.png" size="50"
					@click="handleAddToCart" />
				<u-count-to v-if="count > 0" :end-val="count" :duration="500"
					:font-size="28" class="count" />
			</view>
		</template>
	</card-h>
</template>

<script>
export default {
    name: "GoodsItem",
    props: {
        data: Object
    },
    data() {
        return {
            tag: 'New',
            count: 0
        };
    },
    methods: {
        handleAddToCart() {
            this.count++;
            this.$store.commit( 'ADD_TO_CART', this.data );
        },
		
        toGoodsDetail() {
            uni.navigateTo({
                url: '../../pages/goods-detail/goods-detail'
            });
        }
    }
};
</script>

<style lang="scss">
	.header-content {
		width: 100%;
		padding-left: 10rpx;
	}

	.goods-item-img {
		width: 80%;
		height: 80%;
	}

	.title {
		margin-left: $uni-spacing-base;
		font-size: $uni-font-size-base;
		color: $uni-text-color-title;
	}

	.footer-content {
		width: 100%;
		padding-left: $uni-spacing-base;
		display: flex;
		justify-content: space-between;
		align-items: center
	}

	.add-to-cart-button {
		width: 200rpx;
		height: 40rpx;
		margin-left: 10rpx;
		margin-right: 10rpx;
		font-size: 5px;
		white-space: nowrap;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: $uni-color-main;
		color: white;
	}

	.count {
		margin-left: -20rpx;
	}
</style>
