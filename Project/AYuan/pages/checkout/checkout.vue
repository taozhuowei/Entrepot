<!-- 结算界面 -->
<template>
	<view class="page-container">
		<!-- 地址选择 -->
		<address-choose :pick-up-method.sync="pickUpMethod" />

		<!-- 时间选择 -->
		<time-choose :pick-up-method="pickUpMethod" />

		<!-- 商品列表 -->
		<order-list />

		<!-- 底栏 -->
		<bottom-bar button-text="立即支付" class="bottom-bar">
			<template #left>
				<view />
			</template>
		</bottom-bar>
	</view>
</template>

<script>
export default {
    data() {
        return {
            pickUpMethod: 'delivery'
        };
    }
};
</script>

<style lang="scss">
	.bottom-bar {
		position: fixed;
		bottom: 0;
	}
</style>
