<!-- 地址选择页面 -->
<template>
	<view class="page-container">
		<address-card addressType="home"></address-card>
		<address-card addressType="company"></address-card>
		<address-card addressType="school"></address-card>
		<address-card addressType="store"></address-card>
		<address-card addressType="custom" customTag="妈妈家"></address-card>
	</view>
</template>

<script>
export default {
    data() {
        return {
            pageType: ''	
        };
    },
    onLoad(option) {
        this.pageType = option.pageType;
        console.log(option.pageType);
    }
};
</script>

<style lang="scss">

</style>
