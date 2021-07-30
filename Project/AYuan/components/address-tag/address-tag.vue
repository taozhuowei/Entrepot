<template>
	<view :class="['address-tag-container' ,  tagType]">{{ tagType === 'custom' ? customName : tagName }}</view>
</template>

<script>
export default {
    name:"address-tag",
    props: {
        tagType: String ,//标签类型
        customName: { //自定义标签名
            type: String,
            default: '',
            required: false
        }
    },
    data() {
        return {
            tagDics: [ //标签类型与标签名对应关系
                {dicCode: 'home' , dicName: '家'},
                {dicCode: 'company' , dicName: '公司'},
                {dicCode: 'school' , dicName: '学校'},
            ]
        };
    },
    computed: {
        tagName() {
            return this.tagDics.find(el => el.dicCode === this.tagType).dicName;
        }
    }
};
</script>

<style lang="scss">
.address-tag-container {
	width: 80rpx;
	height: 40rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: $uni-font-size-sm;
	font-weight: 300;
	border-radius: $uni-border-radius-sm;
}

.home {
	border: 1px solid #ff9a9e;
	background-color: #fad0c4;
	color: #f42e31;
}

.company {
	border: 1px solid #66a6ff;
	background-color: #c2e9fb;
	color: #1971ff;
}

.school {
	border: 1px solid #00cdac;
	background-color: #8ddad5;
	color: #00824e;
}

.custom {
	border: 1px solid #ee9ca7;
	background-color: #ffdde1;
	color: #ee5470;
}
</style>
