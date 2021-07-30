<!-- 订单详情页面 -->
<template>
	<view class="page-container">
		<view ref="outer" class="order-detail-container">
			<!-- 顶部装饰 -->
			<view class="header-circles">
				<view v-for="(item,index) in circles" :key="index"
					class="circle"></view>
			</view>

			<!-- 底部装饰 -->
			<view class="footer-circles">
				<view v-for="(item,index) in circles" :key="index"
					class="circle"></view>
			</view>

			<view class="header">
				<view>2020-7-15</view>
				<view>15:9:24</view>
			</view>

			<u-line color="info" border-style="dotted" length="95%"
				class="divider"></u-line>

			<!-- 用户信息 -->
			<view class="layer">
				<view class="block title">收货人: </view>
				<view class="block text">云梦影</view>
			</view>

			<!-- 收货地址 -->
			<view class="layer">
				<view class="block title">收货地址: </view>
				<view class="block">
					<text class="text">蓉杏园4-66</text>
					<text class="text">辽宁省 锦州市 太和区</text>
				</view>
			</view>

			<u-line color="info" border-style="dotted" length="95%"
				class="divider"></u-line>

			<!-- 购物清单 -->
			<view class="order-list">
				<view class="header">
					<text>已发货，等待确认收货</text>
					<text>物流配送</text>
				</view>
				<view class="layer title">购物清单</view>
				<view class="scroll-view">
					<order-list-item :width="600" v-for="item in goodsList"
						:key="item.id" :goods="item" requireRemark class="order-list-item">
					</order-list-item>
				</view>

			</view>

			<u-line color="info" border-style="dotted" length="95%"
				class="divider"></u-line>

			<u-button class="button">确认收货</u-button>
		</view>
	</view>
</template>

<script>
export default {
    data() {
        return {
            circles: [],
            goodsList: [ {
                id: 1,
                name: '西瓜',
                price: 999,
                num: 1
            }, {
                id: 2,
                name: '西瓜',
                price: 999,
                num: 1
            }, {
                id: 3,
                name: '西瓜',
                price: 999,
                num: 1
            }, {
                id: 4,
                name: '西瓜',
                price: 999,
                num: 1
            }, {
                id: 5,
                name: '西瓜',
                price: 999,
                num: 1
            }, {
                id: 6,
                name: '西瓜',
                price: 999,
                num: 1
            },
            ]
        };
    },
    onLoad() {
        this.$nextTick( () => {
            const width = this.$refs[ 'outer' ].$el.offsetWidth;
            this.circles = new Array( width / 10 );
        } );

    },
    methods: {
        
    }
};
</script>

<style lang="scss">
	.page-container {
		justify-content: center;
	}

	.order-detail-container {
		width: 90%;
		height: 90vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: $uni-bg-color-base;
		position: relative;
		padding-top: $uni-spacing-lg;
	}

	.header-circles,
	.footer-circles {
		width: 100%;
		height: 20rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		position: absolute;
	}

	.header-circles {
		top: -10rpx;
	}

	.footer-circles {
		bottom: -10rpx;
	}

	.circle {
		width: 20rpx;
		height: 20rpx;
		border-radius: $uni-border-radius-circle;
		background-color: $uni-bg-color-grey;
	}

	.header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding-left: $uni-spacing-base;
		padding-right: $uni-spacing-base;
	}

	.divider {
		margin-top: $uni-spacing-lg !important;
		margin-bottom: $uni-spacing-lg !important;
	}

	.layer {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: $uni-spacing-base;
		padding-left: $uni-spacing-base;
		padding-right: $uni-spacing-base;
	}

	.block {
		width: 50%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.title {
		font-size: $uni-font-size-lg;
		font-weight: 800;
	}

	.text {
		font-size: $uni-font-size-base;
		font-weight: 300;
	}

	.order-list {
		width: 100%;
		height: 650rpx;
	}
	
	.scroll-view {
		width: 100%;
		height: 540rpx;
		margin-top: $uni-spacing-base;
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow-y: scroll;
	}

	.order-list-item {
		flex-shrink: 0;
		margin-top: $uni-spacing-base;
	}

	.button {
		background-color: $uni-color-main;
		color: $uni-text-color-inverse;
	}
</style>
