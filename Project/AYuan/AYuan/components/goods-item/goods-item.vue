<!-- 商品卡片（列表） -->
<template>
	<card-h show-tag>
		<!-- 标签 -->
		<template slot="tag">{{ tag }}</template>

		<template slot="img">
			<image src="" class="goods-item-img"></image>
		</template>
		
		<template slot="main-header">
			<text class="title">西瓜</text>
		</template>

		<template slot="main-footer">
			<view class="footer-content">
				<price :price="999" :vipPrice="99" :originPirce="1999" :fontSize="32"></price>
				<u-icon name="/static/add.png" size="50" @click="handleAddToCart"></u-icon>
			</view>

		</template>
	</card-h>
</template>

<script>
	export default {
		name: "goods-item",
		props: {
			data: Object
		},
		data() {
			return {
				tag: 'New'
			};
		},
		methods: {
			handleAddToCart() {
				this.$store.commit('ADD_TO_CART' , this.data)
			}
		}
	}
</script>

<style lang="scss">
	.header-content {
		width: 100%;
		padding-left: 10rpx;
	}
	
	.title {
		margin-left: $uni-spacing-base;
		font-size: $uni-font-size-base;
		color: $uni-text-color-title;
	}
	
	.footer-content {
		width: 100%;
		padding-left: $uni-spacing-base;
		padding-right: $uni-spacing-base;
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
</style>
