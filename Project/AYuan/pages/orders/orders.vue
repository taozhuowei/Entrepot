<!-- 订单查看界面 -->
<template>
	<view class="page-container orders-container">
		<tabs :tabs="tabs" :cur.sync="curTab" />

		<order-card v-for="item in orderList" :key="item.id" :data="item" @click.native="toOrderDetail" />
	</view>
</template>

<script>
export default {
    data() {
        return {
            tabs: [
                '待支付', '待收货', '待评价', '已完成', '售后'
            ],
            orderList: [ {
                id: 1,
                status: 'unpaid',
                buttonText: '',
                statusName: ''
            } ],
            statusDics: [ {
                dicCode: 'unpaid',
                dicName: '待支付'
            },
            {
                dicCode: 'unreceived',
                dicName: '待收货'
            },
            {
                dicCode: 'unremarked',
                dicName: '待评价'
            },
            {
                dicCode: 'finished',
                dicName: '已完成'
            },
            {
                dicCode: 'afterSales',
                dicName: '售后'
            }
            ],
            buttonDics: [ {
                status: 'unpaid',
                button: '立即支付'
            },
            {
                status: 'unreceived',
                button: '确认收货'
            },
            {
                status: 'unremarked',
                button: '立即评价'
            },
            {
                status: 'finished',
                button: '申请售后'
            },
            {
                status: 'afterSales',
                button: '取消售后'
            }
            ],
            curTab: 0
        };
    },
    onLoad(option) {
        // 映射订单中的订单状态和按钮文字
        this.orderList.map( el => {
            el.statusName = this.statusDics.find( dic => dic
                .dicCode === el.status ).dicName;
            el.buttonText = this.buttonDics.find( dic => dic
                .status === el.status ).button;
        } );
		
        //设置默认的tab
        if (option.orderStatus === '' || option.orderStatus === undefined) this.curTab === 0;
        else this.curTab = this.tabs.findIndex(el => el === option.orderStatus);
  
    },
    methods: {
        toOrderDetail() {
            uni.navigateTo({
                url: '../order-detail/order-detail'
            });
        }
    }
};
</script>

<style lang="scss">
</style>
