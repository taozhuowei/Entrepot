<!-- 金刚区组件 -->
<template>
	<view class="function-area-container card">
		<u-icon name="/static/coupon.png" label="领券中心" label-pos="bottom"
			size="60" label-size="24" @click="toCouponCenter"/>

		<u-icon name="/static/allGoods.png" label="全部商品" label-pos="bottom"
			size="60" label-size="24" @click="toShop" />

		<u-icon name="/static/order.png" label="我的订单" label-pos="bottom"
			size="60" label-size="24" @click="toOrders" />

		<u-icon name="/static/vipArea.png" label="会员中心" label-pos="bottom"
			size="60" label-size="24" @click="toVipCenter" />
	</view>
</template>

<script>
export default {
    name: 'FunctionArea',
    methods: {
        toCouponCenter() {
            uni.navigateTo( {
                url: '/pages/coupon-center/coupon-center'
            } );
        },
		
        toShop() {
            uni.navigateTo( {
                url: '/pages/shop/shop'
            } );
        },

        toOrders() {
            uni.navigateTo( {
                url: '/pages/orders/orders'
            } );
        },
		
        toVipCenter() {
		    uni.navigateTo( {
		        url: '/pages/vip-center/vip-center'
		    } );
        },
    }
};
</script>

<style lang="scss">
	.function-area-container {
		height: 140rpx;
		justify-content: space-evenly;
		align-items: center;
	}
</style>
