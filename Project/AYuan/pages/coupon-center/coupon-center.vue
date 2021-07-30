<!-- 领券中心页面 -->
<template>
	<view class="page-container">
		<view class="header">
			<text-gradient text="领取你的专属优惠券" direction="to top" :fontSize="40"
				fontWeight="600" :colors="['#00cdac' , '#8ddad5']"
				:percents="[0 , 100]">
			</text-gradient>
			<text class="sub-title">今日剩余：{{ count }}次</text>
		</view>

		<view class="content">
			<!-- 翻转卡片优惠券 -->
			<rotate-card :allowRotate="allowRotate"
				:endStyle="'url(\'../../static/couponCardBg.png\')'"
				@rotate="handleRotate" @stop="handleStop"
				v-for="item in coupons" :key="item.id" class="coupon-card">
				<!-- 卡片正面 -->
				<template>
					<coupon size="lg">
						<template>
							<u-button class="button">立即领取</u-button>
						</template>
					</coupon>
				</template>
			</rotate-card>
		</view>

		<u-toast :duration="3000" ref="uToast" />
	</view>
</template>

<script>
export default {
    data() {
        return {
            count: 3, //剩余优惠券领取次数
            allowRotate: true, //是否允许卡片旋转（领取优惠券）
            coupons: [
                {
                    id: 1
                },
                {
                    id: 2
                },
                {
                    id: 3
                },
                {
                    id: 4
                },
                {
                    id: 5
                },
                {
                    id: 6
                },
            ]
        };
    },
    methods: {
        //翻牌后减少使用优惠券次数
        handleRotate() {
            if ( this.count > 0 ) this.count--;
            if ( this.count === 0 ) this.allowRotate = false;
        },
		
        //次数用尽后提示
        handleStop() {
            this.$refs.uToast.show( {
			    title: '今日领取次数已用完',
			    type: 'warning',
			    url: '/pages/index/index'
            } );
        }
    }
};
</script>

<style lang="scss">
	.header {
		width: 100%;
		padding-top: $uni-spacing-lg;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		align-items: center;
	}

	.sub-title {
		color: $uni-text-color-grey
	}

	.content {
		width: $uni-width-main;
		margin-top: $uni-spacing-base;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		padding-bottom: $uni-spacing-base;
	}
	
	.button {
		width: 150rpx;
		height: 70rpx;
		margin: 0;
		background-color: $uni-color-main;
		color: $uni-text-color-inverse;
	}
</style>
