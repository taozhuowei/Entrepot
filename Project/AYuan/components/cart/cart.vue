<!-- 购物车组件 -->
<template>
	<view>
		<!-- 购物车底栏 -->
		<bottom-bar buttonText="立即下单" @click-button="handleClickButton">
			<template slot="left">
				<view class="cart">
					<view class="cart-icon" @click="showCart">
						<u-icon name="/static/cart.png" size="100"
							color="white">
						</u-icon>
						<view class="cart-count">
							<u-count-to :end-val="count" color="#ffffff"
								:font-size="20" :duration="500"></u-count-to>
						</view>
					</view>

					<view class="cart-info">
						<u-count-to :end-val="total" :decimals="2"
							color="#ffffff" :font-size="36" :duration="1000">
						</u-count-to>
						<view class="cart-info-other">
							<text>配送费¥1.00</text>
							<text class="info-right-item">包装费¥1.00</text>
						</view>
					</view>
				</view>
			</template>
		</bottom-bar>

		<!-- 遮罩层 -->
		<view v-show="maskVisibility" class="mask mask-enter">
			<!-- 购物车详情 -->
			<view :animation="cartAnimation" class="cart-view">
				<view class="cart-view-header">
					<text class="title">已选商品</text>
					<u-icon name="/static/delete.png" size="40" label="清空购物车"
						label-pos="right" label-color="#dd524d"></u-icon>
				</view>

				<view class="cart-view-content">
					<cart-item v-for="item in cart" :key="item.id"
						:goods="item"></cart-item>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
    name: "cart",
    data() {
        return {
            maskVisibility: false,
            animationClass: 'cart-view-enter',
            cartAnimation: {}
        };
    },
    computed: {
        count() {
            return this.$store.state.count;
        },
        total() {
            const total = this.$store.state.total / 100;
            return total > 0 ? total : total.toFixed( 2 );
        },
        cart() {
            return this.$store.state.cart;
        }
    },
    methods: {
        handleClickButton() {
            uni.navigateTo( {
                url: '../checkout/checkout',
            } );
        },

        showCart() {
            const animation = uni.createAnimation({
                timingFunction: 'ease-out',
                duration: 300,
            });
            if (this.maskVisibility) {
                this.moveDown(animation);
                setTimeout(() => {
                    this.maskVisibility = false;
                }  , 300);
            }
            else {
                this.maskVisibility = true;
                this.moveUp(animation);
            }
        },
		
        moveUp(animation) {
            animation.translateY('-826rpx').step();
            this.cartAnimation = animation.export();
        },
		
        moveDown(animation) {
            animation.translateY('826rpx').step();
            this.cartAnimation = animation.export();
        }
    }
};
</script>

<style lang="scss">
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

	.mask {
		width: 100vw;
		height: 100vh;
		position: absolute;
		bottom: 100rpx;
		background-color: $uni-bg-color-mask;
		backdrop-filter: blur(8px);
	}

	.cart-view {
		width: $uni-width-main;
		height: 826rpx;
		position: absolute;
		left: 15rpx;
		bottom: -826rpx;
		border-top-left-radius: $uni-border-radius-base;
		border-top-right-radius: $uni-border-radius-base;
		background-color: $uni-bg-color-base;
	}

	.cart-view-header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding-left: $uni-spacing-lg;
		padding-right: $uni-spacing-lg;
		margin-top: $uni-spacing-base;
	}

	.title {
		font-weight: bold;
	}

	.mask-enter {
		animation: fadeIn;
		animation-duration: 500ms;
	}
</style>
