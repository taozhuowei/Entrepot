<!-- 我的订单组件 -->
<template>
	<view class="my-order-container card">
		<view class="header">
			<text class="header-title">我的订单</text>
			<u-icon :name="'/static/right.png'" size="40" label='全部订单'
				label-pos="left" label-color="#9b9b9b" @click="handleClick"></u-icon>
		</view>

		<view class="content">
			<view v-for="(item,index) in orderTypes" :key="index"
				@click="handleClick(item.text)" class="my-order-types">
				<u-icon :name="'/static/'+item.code+'.png'" size="60"></u-icon>
				<text class="text">{{ item.text }}</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
    name: "my-order",
    data() {
        return {
            orderTypes: [
                {
                    code: 'unpaid',
                    text: '待支付'
                },
                {
                    code: 'unreceived',
                    text: '待收货'
                },
                {
                    code: 'unremarked',
                    text: '待评价'
                },
                {
                    code: 'finished',
                    text: '已完成'
                },
                {
                    code: 'afterSales',
                    text: '售后'
                },
            ]
        };
    },
    methods: {
        //跳转到对应状态的订单列表界面
        handleClick(orderStatus) {
            uni.navigateTo({
                url: '../../pages/orders/orders?orderStatus='+orderStatus
            });
        }
    }
};
</script>

<style lang="scss">
	.my-order-container {
		height: 216rpx;
		flex-direction: column;
	}

	.header {
		width: 100%;
		height: 25%;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		padding-left: $uni-spacing-lg;
		padding-right: $uni-spacing-lg;
	}

	.header-title {
		font-size: $uni-font-size-base;
		font-weight: bold;
	}

	.content {
		width: 100%;
		height: 75%;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}

	.my-order-types {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.text {
		margin-top: $uni-spacing-mini;
		font-size: $uni-font-size-sm;
		font-weight: 800;
	}
</style>
