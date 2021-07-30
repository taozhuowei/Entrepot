<template>
	<view :class="[vipLevel , 'vip-tag']">
		{{ vipLevelName }}会员
	</view>
</template>

<script>
export default {
    name: "vip-tag",
    props: {
        vipLevel: {
            type: String,
            validator: el => [ 'diamond', 'platinum', 'gold', 'silver',
                'bronze' ].includes( el )
        }
    },
    data() {
        return {
            vipLevelList: [ {
                dicCode: 'diamond',
                dicName: '钻石'
            },
            {
                dicCode: 'platinum',
                dicName: '铂金'
            },
            {
                dicCode: 'gold',
                dicName: '黄金'
            },
            {
                dicCode: 'silver',
                dicName: '白银'
            },
            {
                dicCode: 'bronze',
                dicName: '青铜'
            }
            ]
        };
    },
    computed: {
        vipLevelName() {
            return this.vipLevelList.find( el => {
                return el.dicCode === this.vipLevel;
            } ).dicName;
        }
    }
};
</script>

<style lang="scss">
	.vip-tag {
		width: 120rpx;
		height: 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: $uni-border-radius-sm;
		font-size: $uni-font-size-sm;
		color: #75878A;
	}

	.diamond {
		background-image: linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%);
		color: #f4f0ff;
	}

	.platinum {
		background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
	}

	.gold {
		background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
	}

	.silver {
		background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
	}

	.bronze {
		background-image: linear-gradient(to right, #243949 0%, #517fa4 100%);
	}
</style>
