<!-- 全部商品页面 -->
<template>
	<view class="page-container">
		<view class="header">
			<u-search placeholder="便利店新星" v-model="searchKeyword" shape="square" :height="50" :input-style="{fontSize: '24rpx'}" :action-style="{color: 'white'}" clearable show-action animation></u-search>
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
		<bottom-bar buttonText="立即下单">
			<template slot="left">
				<view class="cart">
					<view class="cart-icon">
						<u-icon name="/static/cart.png" size="100" color="white"></u-icon>
						<view class="cart-count">{{ count }}</view>
					</view>
					
					<view class="cart-info">
						<text class="cart-info-money">¥{{ total }}</text>
						<view class="cart-info-other">
							<text>配送费¥1.00</text>
							<text class="info-right-item">包装费¥1.00</text>
						</view>
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
				searchKeyword: '',
				goods: {
					id: 1,
					price: 999,
					num: 1
				}
			};
		},
		computed: {
			count() {
				return this.$store.state.count
			},
			total() {
				const total = this.$store.state.total / 100
				return total > 0 ? total : total.toFixed(2)
			}
		}
	}
</script>

<style lang="scss">
	/* #ifdef APP-PLUS */
	.page-container {
		height: 100vh;
	}
	/* #endif */
	
	
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
		height: 100%;
		padding-top: $uni-spacing-lg;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		background-color: $uni-bg-color-base;
	}
	
	.cart {
		display: flex;
		color: white;
		font-size: $uni-font-size-sm;
	}
	
	.cart-icon {
		width: 100rpx;
		height: 100rpx;
		overflow: hidden;
		position: relative;
	}
	
	.cart-count {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 44rpx;
		height: 44rpx;
		border-radius: $uni-border-radius-circle;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: $uni-color-emphasize;
	}
	
	.cart-info {
		height: 100rpx;
		margin-left: $uni-spacing-base;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}
	
	.cart-info-money {
		font-size: $uni-font-size-lg;
	}
	
	.cart-info-other {
		color: $uni-text-color-grey;
	}
	
	.info-right-item {
		margin-left: $uni-spacing-sm;
	}
</style>
