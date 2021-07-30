<!-- 地址&配送方式选择组件 -->
<template>
	<!-- 地址选择 -->
	<view class="address-choose-container">
		<!-- 地址 -->
		<view class="address-top">
			<view class="address-top-left">
				<!-- 详细地址 -->
				<text class="address-detail">{{ address.detail }}</text>
				<!-- 省市区 -->
				<text class="address">{{ `${address.province} ${address.city} ${address.area} ${address.street}` }}</text>
			</view>

			<u-icon name="/static/position.png" size="80"
				v-show="selectDelivery" />
			<u-icon name="/static/shop.png" size="80"
				v-show="!selectDelivery" />
		</view>

		<!-- 配送方式选择 -->
		<view class="address-bottom">
			<view
				:class="['address-botttom-item' , selectDelivery ? 'active' : '']"
				@click="chooseDelivery">
				<view class="bottom-item-right">
					<u-icon name="/static/check.png" size="40"
						v-show="selectDelivery" class="item-right-check">
					</u-icon>
					<u-icon name="/static/delivery.png" size="60"
						:class="['animate__animated' ,  selectDelivery ? 'animate__tada' : '']">
					</u-icon>
					<view class="item-right-right">
						<text class="item-right-title">配送</text>
						<text class="item-right-info">物流到家</text>
					</view>
				</view>
			</view>

			<view
				:class="['address-botttom-item' , !selectDelivery ? 'active' : '']"
				@click="chooseSelfPickUp">
				<view class="bottom-item-right">
					<u-icon name="/static/check.png" size="40"
						v-show="!selectDelivery" class="item-right-check">
					</u-icon>
					<u-icon name="/static/selfPickUp.png" size="60"
						:class="['animate__animated' , !selectDelivery ? 'animate__tada' : '']">
					</u-icon>
					<view class="item-right-right">
						<text class="item-right-title">自提</text>
						<text class="item-right-info">到店自取</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
    name: "address-choose",
    props: {
        pickUpMethod: String
    },
    data() {
        return {
            selectDelivery: true,
            address: {
                detail: '蓉杏园4-66号',
                province: '辽宁省',
                city: '锦州市',
                area: '太和区',
                street: '陵西大街'
            }
        };
    },
    methods: {
        chooseDelivery() {
            this.selectDelivery = true;
            this.address = {
                detail: '蓉杏园4-66号',
                province: '辽宁省',
                city: '锦州市',
                area: '太和区',
                street: '陵西大街'
            };
            this.$emit( 'update:pickUpMethod', 'delivery' );
        },
        chooseSelfPickUp() {
            this.selectDelivery = false;
            this.address = {
                detail: '万达1号店',
                province: '辽宁省',
                city: '锦州市',
                area: '太和区',
                street: '陵西大街'
            };
            this.$emit( 'update:pickUpMethod', 'selfPickUp' );
        }
    }
};
</script>

<style lang="scss">
	.address-choose-container {
		width: $uni-width-main;
		height: 300rpx;
		box-sizing: border-box;
		background-color: $uni-bg-color-base;
		border-radius: $uni-border-radius-base;
	}

	.address-top {
		width: 100%;
		height: 50%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.address-top-left {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}

	.address-bottom {
		width: 100%;
		height: 50%;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}

	.address-detail {
		font-size: $uni-font-size-lg;
		font-weight: bold;
	}

	.address {
		font-size: $uni-font-size-base;
		color: $uni-text-color-grey;
		margin-top: $uni-spacing-sm;
	}

	.address-botttom-item {
		width: 240rpx;
		height: 120rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid $uni-text-color-grey;
		border-radius: $uni-border-radius-sm;
	}

	.bottom-item-right {
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: relative;
	}

	.item-right-right {
		display: flex;
		flex-direction: column;
		margin-left: $uni-spacing-base;
	}

	.item-right-title {
		font-size: 32rpx;
		font-weight: bold;
	}

	.item-right-info {
		font-size: $uni-font-size-sm;
		color: $uni-text-color-grey;
	}

	.item-right-check {
		position: absolute;
		top: -40rpx;
		right: -50rpx;
	}

	.active {
		border: 2px solid $uni-color-main;
	}
</style>
