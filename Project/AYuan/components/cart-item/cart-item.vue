<template>
	<card-h :width="700" :height="140" class="card-h">
		<template slot="img">
			<image src="/static/food.png" class="goods-item-img"></image>
		</template>

		<template slot="main-header">
			<text class="title">{{ goods.name }}</text>
			<u-icon name="/static/deleteGoods.png" size="40"></u-icon>
		</template>

		<template slot="main-footer">
			<view class="footer-content">
				<text class="price">¥ {{ goods.price / 100 }}</text>
				<u-number-box v-model="goods.num" @change="handleChange">
				</u-number-box>
			</view>
		</template>
	</card-h>
</template>

<script>
export default {
    name: "cart-item",
    props: {
        goods: Object
    },
    methods: {
        handleChange(e) {
            const payload = {id: this.goods.id , num: e.value};
            this.$store.commit('UPDATE_GOODS_NUM' , payload);
        }
    }
};
</script>

<style lang="scss">
	.card-h {
		margin-top: $uni-spacing-base;
	}
	
	.goods-item-img {
		width: 80%;
		height: 80%;
	}

	.title {
		margin-left: $uni-spacing-base;
		font-size: 36rpx;
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

	.price {
		font-weight: bold;
		font-size: $uni-font-size-base;
		color: $uni-color-emphasize
	}
</style>
