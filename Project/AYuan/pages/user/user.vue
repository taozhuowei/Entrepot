<!-- 用户中心界面 -->
<template>
	<view class="page-container">
		<user-info></user-info>

		<my-order class="page-item"></my-order>

		<coupon-recommend :couponList="couponRecommendList"></coupon-recommend>

		<other-service></other-service>
	</view>
</template>

<script>
export default {
    data() {
        return {
            couponRecommendList: [{},
			    {},
			    {},
			    {},
			    {},
            ]
        };
    }
};
</script>

<style lang="scss">
</style>
